<?php 
//本页面主要设置数据库连接

require_once("config.php");
require_once("adodb5/adodb.inc.php");
global $db;
$db = NewADOConnection('mysql');
$db->Connect($DBHOST, $DBUSER, $DBPWD, $DBNAME);
if (!$db)	  die("数据库连接错误！");
$db->Execute("SET NAMES 'utf8'");
$db->SetFetchMode(ADODB_FETCH_ASSOC);

?>