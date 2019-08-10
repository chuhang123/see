<?php
	include("../../../wp-config.php");

	//获取参数
	$action=$_POST["action"];	//要进行的操作

	if(!isset($action) || $action=="")
		die("{'succeed':'false','msg':'没有定义的操作！'}");

	//根据不同操作调用不同函数
	if($action=="querysystem")
		querysystem();
	elseif ($action=="querydevice")
		querydevice();
	elseif ($action=="querytype")
		querytype();
	elseif($action=="querydata")
		querydata();
	elseif($action == "querystate")
		querystate();
	elseif($action == "queryfault")
		queryfault();
	
	$pkg = array();

	//获取用户系统
	function querysystem()
	{
		global $current_user;
		get_currentuserinfo();
		//全局变量$current_user

		$loginuserid = $current_user->user_login;
		
		$pkg["succeed"]=true;
		$sql="SELECT
			system.`Name`,
			system.System
			FROM
			usersystem
			INNER JOIN system ON usersystem.system = system.System
			WHERE
			usersystem.`user`='".$loginuserid."'
			";
		global $wpdb;
		$rs = $wpdb->get_results($sql);
		$list=array();
		foreach ($rs as $r) 
		{
			$item=array("id"=>$r->System,"name"=>$r->Name);
			array_push($list, $item);
		}
		$pkg["data"] = $list;
		die(json_encode($pkg));
	}

	//获取某系统所有设备
	function querydevice()
	{
		$psystem=$_POST["system"];

		$pkg["succeed"]=true;
		$sql="SELECT
			device.`Name`,
			device.Device
			FROM
			systemdevice
			INNER JOIN device ON device.Device = systemdevice.device
			WHERE
			systemdevice.system = ".$psystem."
			";

		global $wpdb;
		$rs = $wpdb->get_results($sql);
		$list=array();
		foreach ($rs as $r) 
		{
			$item=array("id"=>$r->Device,"name"=>$r->Name);
			array_push($list, $item);
		}
		$pkg["data"] = $list;
		die(json_encode($pkg));
	}

	//获取数据类型
	function querytype()
	{
		$pkg["succeed"]=true;
		$sql="SELECT
			type.Type,
			type.`Name`,
			type.`Unit`
			FROM
			type";

		global $wpdb;
		$rs = $wpdb->get_results($sql);
		$list=array();
		foreach ($rs as $r) 
		{
			$item=array("id"=>$r->Type,"name"=>$r->Name,"unit"=>$r->Unit);
			array_push($list, $item);
		}
		$pkg["data"] = $list;
		die(json_encode($pkg));
	}

	//获取状态
	function querystate()
	{
		$pkg["succeed"]=true;
		$sql="SELECT
			state.State,
			state.`Name`
			FROM
			state order by State desc";

		global $wpdb;
		$rs = $wpdb->get_results($sql);
		$list=array();
		foreach ($rs as $r) 
		{
			$item=array("id"=>$r->State,"name"=>$r->Name);
			array_push($list, $item);
		}
		$pkg["data"] = $list;
		die(json_encode($pkg));
	}

	//获取错误
	function queryfault()
	{
		$pkg["succeed"]=true;
		$sql="SELECT
			fault.Fault,
			fault.`Name`
			FROM
			fault";

		global $wpdb;
		$rs = $wpdb->get_results($sql);
		$list=array();
		foreach ($rs as $r) 
		{
			$item=array("id"=>$r->Fault,"name"=>$r->Name);
			array_push($list, $item);
		}
		$pkg["data"] = $list;
		die(json_encode($pkg));
	}

	//获取数据
	function querydata()
	{

		$psystem=$_POST["system"];	
		$pdevice=$_POST["device"];
		$ptype=$_POST["type"];
		$pstate=$_POST["state"];
		$pfault=$_POST["fault"];
		$pstart=$_POST["start"]." 00:00:00";
		$pend=$_POST["end"]." 23:59:59";				
		$pkg["succeed"]=true;

		$sql = "SELECT
		`data`.ID as rsid,
		`data`.DateTime as rsdatetime,
		system.`Name` as rssystem,
		device.`Name` as rsdevice,
		type.`Name` as rstype,
		state.`Name` as rsstate,
		fault.`Name` as rsfault,
		`data`.`Value` as rsvalue
		FROM
		`data`
		INNER JOIN device ON `data`.Device = device.Device
		INNER JOIN fault ON `data`.Fault = fault.Fault
		INNER JOIN system ON `data`.System = system.System
		INNER JOIN type ON `data`.Type = type.Type
		INNER JOIN state ON `data`.State = state.State
		WHERE
		TRUE
		";

		if($psystem!=-1)
			$sql = $sql.' And system.`system` = '.$psystem;
		
		if($pdevice!=-1)
			$sql = $sql.' And device.`device` = '.$pdevice;

		if($ptype!=-1)
			$sql = $sql.' And type.`type` = '.$ptype;

		if($pstate!=-1)
			$sql = $sql.' And state.`state` = '.$pstate;

		if($pfault!=-1)
			$sql = $sql.' And fault.`fault` = '.$pfault;

		$sql = $sql.' And `data`.DateTime between "'.$pstart.'" and "'.$pend.'"';
		//数据按照时间排序
		$sql = $sql.' order by `data`.DateTime';

		//if($pdatetime!="-1")
		//	$sql += ' And system.`system` = ' + $psystem;
		//$pkg["succeed"] = false;
		//$pkg["msg"] = $sql;
		//die(json_encode($pkg));

		global $wpdb;
		$list = array();
		$rs = $wpdb->get_results($sql);

		$pkg["page"] = 1;
		$pkg["total"] = 1;
		$pkg["records"] = 3;
		foreach ($rs as $r) {
			/*
			$item = array("id"=>$r->rsid,"cell"=>array("datetime"=>$r->rsdatetime,"system"=>$r->rssystem,"device"=>$r->rsdevice,"type"=>$r->rstype,"state"=>$r->rsstate,"fault"=>$r->rsfault,"value"=>(int)$r->rsvalue));
			*/
			$item = array("datetime"=>$r->rsdatetime,"system"=>$r->rssystem,"device"=>$r->rsdevice,"type"=>$r->rstype,"state"=>$r->rsstate,"fault"=>$r->rsfault,"value"=>(int)$r->rsvalue);	
			array_push($list,$item);
		}
		$pkg["rows"]=$list;
		/*
		foreach ($rs as $r) {
			$item=array("datetime"=>$r->DateTime,"value"=> (int)$r->Value);
			array_push($list,$item);
		}
		$pkg["data"] = $list;
		*/
		//JSON编码后输出到客户端
		die( json_encode($pkg));		
	}


?>