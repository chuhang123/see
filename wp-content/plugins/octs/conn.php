<?php
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

?>