<?php

//获取POST过来的原始信息
global $data;
$data = file_get_contents("php://input");

//没数据？不处理
if($data == "")
	die();

//构造XML
$xml = simplexml_load_string($data);

//失败？非法数据，不处理
if(!$xml)
	die();


//临时性调试输出
/*
$file="log.txt";
$f = fopen($file, 'w');  
fwrite($f, $data);  
fclose($f); 
*/

//连接数据库
require_once("adodb5/adodb.inc.php");
require_once("../../../wp-config.php");
/*
$DBHOST="localhost";
$DBUSER="root";
$DBPWD="IBMSystemX3650";
$DBNAME="octs.cn";
*/

global $db;

$db = NewADOConnection('mysql');
$db->Connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
if (!$db)	  die("数据库连接错误！");
$db->Execute("SET NAMES '".DB_CHARSET."'");
$db->SetFetchMode(ADODB_FETCH_ASSOC);


//拿到基本信息
$attrs = $xml -> attributes();
$action = $attrs["Action"];


//具体情况具体分析
switch($action)
{
	case "Email":
		Email($xml);
		break;
}

$db->Close(); # optional
	
die();


//发送电子邮件
function Email($xml)
{
	//do sth

	$attrs = $xml -> attributes();
	$testid = $xml->Test['ID'];
	$examcode = $attrs["ExamCode"];
	$client = $attrs['Client'];
	$version = $attrs['Version'];
	
	$cip=getIP();
	$now=date("Y-m-d H:i:s");

	global $db;
	global $data;

	$sql="insert into tests(ID,examcode,ip,time,client,version,content) values ('$testid','$examcode','$cip','$now','$client','$version','$data')";
	if ($db->Execute($sql) === false) 
	{
		//die('error inserting: '.$db->ErrorMsg().'<BR>');
		die('<PKG Type="Response" Action="Score" Succeed="False" Msg="测试记录已经存在或者数据存储错误" />');
	}

	die('<PKG Type="Response" Action="Score" Succeed="True" Msg="" />');

}

//获取IP
function getIP()
{
	if(!empty($_SERVER["HTTP_CLIENT_IP"])){
  		$cip = $_SERVER["HTTP_CLIENT_IP"];
	}
	elseif(!empty($_SERVER["HTTP_X_FORWARDED_FOR"])){
  		$cip = $_SERVER["HTTP_X_FORWARDED_FOR"];
	}
	elseif(!empty($_SERVER["REMOTE_ADDR"])){
  		$cip = $_SERVER["REMOTE_ADDR"];
	}
	else{
  		$cip = "无法获取！";
	}	
	return $cip;
}
?>