<?php
header('Content-type:text');
define("AppId","wx817ba3768585e931");
define("AppSecret","3d74b0be209046cfe2f78325c49649a1");
$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".AppId."&secret=".AppSecret;

$ip = "202.113.125.121";
//$headers = array("X-FORWARDED-FOR:$ip");
 
$ch = curl_init();
//echo $ch;
curl_setopt($ch, CURLOPT_URL, $url);
//curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
//curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-FORWARDED-FOR:'.$ip, 'CLIENT-IP:'.$ip));  //构造IP
//curl_setopt($ch, CURLOPT_REFERER, "http://octs.scse.hebut.edu.cn");  
//curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); 
//curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE); 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($ch);
curl_close($ch);
$jsoninfo = json_decode($output, true);
print_r($jsoninfo);
$access_token = $jsoninfo["access_token"];
echo $access_token;
?>