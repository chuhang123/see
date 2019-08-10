<?php

	require_once("conn.php");
	require_once("functions.php");

	//获取参数
	$action=$_REQUEST["action"];	//要进行的操作
	$schoolid = $_REQUEST["schoolid"];
	$courseid = $_REQUEST["courseid"];
	$version = $_REQUEST["version"];
	$client = $_REQUEST["client"];
	$mode = $_REQUEST["mode"];
	$type = $_REQUEST["type"];	

	//for old version
	if($mode=="")
		$mode = 1;
	if($type=="")
		$type = 0;

	$log = $_REQUEST["log"];


	global $db;

	if(!isset($action) || $action=="")
		die("没有定义的操作！");


	//根据不同操作调用不同函数
	if($action=="checkupdate")
	{

		$curver = "";
		$sql = "select * from updates where client='$client' AND schoolid='$schoolid' AND courseid='$courseid' AND mode=$mode AND version>'$version' 
			order by ID desc limit 1";

		$rs = $db->Execute($sql);

		if (!$rs) 
		    die("");

		if($rs->EOF)
			die("");
	
		$curver = $rs->fields["version"];
		$log = $rs->fields["log"];

		$xml  = new SimpleXMLExtended('<PKG />');
		$xml->addAttribute('Version', $curver);
		$xml->URL = $rs->fields["url"];

		$xml->Log = NULL; // VERY IMPORTANT! We need a node where to append
		$xml->Log->addCData($log);
		$rs->Close(); # optional
		die($xml->asXML());

	}
	else if($action == "update")
	{

		//上传最大文件的大小。
		$MAX_SIZE = 200000000;
									
		//设置允许的 Mime 类型. 
		$FILE_MIMES = array('application/x-7z-compressed','image/jpeg','image/jpg','image/gif'
						   ,'image/png','application/msword','text/plain','application/octet-stream','application/x-zip-compressed');

		//设置允许的文件类型。请按照格式添加。            
		$FILE_EXTS  = array('.7z','.zip','.jpg','.png','.gif','.doc','.txt','.rar','zip'); 
									

		/************************************************************
		*     设置变量
		************************************************************/
		$site_name = $_SERVER['HTTP_HOST'];
		$url_dir = "http://".$_SERVER['HTTP_HOST'].dirname($_SERVER['PHP_SELF']);
		$url_this =  "http://".$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];

		$upload_dir = "../../../update/".$schoolid."/".$courseid."/".$client."/";
		$upload_url = "http://".$_SERVER['HTTP_HOST'].$upload_dir;
		$message ="";
		//die($upload_dir);
		/************************************************************
		*     创建上传目录
		************************************************************/
		
		if (!is_dir($upload_dir)) {
		  if (!mkdir($upload_dir,0777,true))
		   die ("上传目录不存在但创建时出错");
		  //if (!chmod($upload_dir,0755))
		  // die ("change permission to 755 failed.");
		}
		

		if ($_FILES['upfile']) 
		{

			  /*
			  $resource = fopen("log.txt","a");
			  fwrite($resource,date("Ymd h:i:s")."UPLOAD - $_SERVER[REMOTE_ADDR]"
						.$_FILES['upfile']['name']." "
						.$_FILES['upfile']['type']."\n");
			  fclose($resource);
			 */

			$file_type = $_FILES['upfile']['type']; 
			  $file_name = $_FILES['upfile']['name'];
			  $file_ext = substr($file_name,strrpos($file_name,"."));

			  //文件大小检查
			  if ( $_FILES['upfile']['size'] > $MAX_SIZE) 
				 $message = "上传文件大小超过限制.";
			  //文件类型/扩展名检查
			  else if (!in_array($file_type, $FILE_MIMES) && !in_array($file_ext, $FILE_EXTS) )
				 $message = "$file_name($file_type) 不允许被上传.";
			  else
				 $message = do_upload($upload_dir, $upload_url);
		}
		
		else if (!$_FILES['upfile']);
		else 
		$message = "无效的文件.";

		if($message != "")
			die($message);

		//写数据库
		$cip=getIP();
		$now=date("Y-m-d H:i:s");
		$upload_url = "http://".$_SERVER['HTTP_HOST']."/update/".$schoolid."/".$courseid."/".$client."/".$_FILES['upfile']['name']; 



		$sql="insert into updates(client,schoolid,courseid,version,mode,type,url,log,time,ip) values 
			('$client','$schoolid','$courseid','$version','$mode','$type','$upload_url','$log','$now','$cip')";
		if ($db->Execute($sql) === false) 
		{
			//die('error inserting: '.$db->ErrorMsg().'<BR>');
			die('数据库存储错误');
		}

		//成功上传
		die();

	}

	//结束
	die();



//上传文件
function do_upload($upload_dir, $upload_url) 
{
	$temp_name = $_FILES['upfile']['tmp_name'];
	$file_name = $_FILES['upfile']['name']; 
	$file_name = str_replace("\\","",$file_name);
	$file_name = str_replace("'","",$file_name);
	$file_path = $upload_dir.$file_name;

	//$message = $temp_name;
	//return $message;

	//文件名字检查
	  if ( $file_name =="") { 
		   $message = "无效文件名";
		   return $message;
	  }

	  $result  =  move_uploaded_file($temp_name, $file_path);
	  if (!chmod($file_path,0755))
			$message = "改变文件属性为 755 时失败.";
	  else
			//$message = ($result)?"成功上传文件 $file_name " :
			$message = ($result)?"" :
				"文件上传时出错了.";
	  return $message;
} 





//xml扩展类
class SimpleXMLExtended extends SimpleXMLElement
{
	public function addCData($cdata_text) 
	{
		$node = dom_import_simplexml($this); 
		$no = $node->ownerDocument; 
		$node->appendChild($no->createCDATASection($cdata_text)); 
	} 
}


?>