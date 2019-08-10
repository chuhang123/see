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
require_once("../../../wp-config.php");


//拿到基本信息
$attrs = $xml -> attributes();
$action = $attrs["Action"];


//具体情况具体分析
switch($action)
{
	case "Test":
		Test($xml);
		break;
	case "Verify":
		Verify($xml);
		break;
}

	
die();

//系统测试
function Test($xml)
{
	die('<PKG Type="Response" Action="Test" Succeed="True" Msg="服务器运行正常" />');
}
//用户认证
function Verify($xml)
{
	$attrs = $xml -> attributes();
	$examcode = $attrs["ExamCode"];
	$password = $attrs["Password"];
	
	if($password  == "")
	{
		die('<PKG Type="Response" Action="Verify" Succeed="False" Msg="请输入密码" />');
	}
	
	
	$creds = array();
	$creds['user_login'] = $examcode;  //wordperss后台用户名称
	$creds['user_password'] = $password; //wordperss后台用户密码
	$creds['remember'] = false;
	$user = wp_signon( $creds, false );
	if ( is_wp_error($user) )
	{
		$rmsg = $user->get_error_message();

		if(strpos($rmsg,"无效用户名") != false)
		{
			die('<PKG Type="Response" Action="Verify" Succeed="False" Msg="无效的用户名" />');
		}
		
		if(strpos($rmsg,"密码不正确") != false)
		{
			die('<PKG Type="Response" Action="Verify" Succeed="False" Msg="密码不正确" />');
		}
	}
	else
	{
		//继续验证是否在有效期，是否VIP等
		//$u = get_userdatabylogin($examcode);
	
		//user_login, user_pass, user_nicename, user_email, user_url, user_registered, user_activation_key, user_status, display_name
		//$u = get_user_meta($user->ID);
		$ud = get_userdata($user->ID);
		$u = array_map( function( $a ){ return $a[0]; }, get_user_meta( $user->ID ) );
		$role = $ud->roles[0];

		if($role == "disabled")
			die('<PKG Type="Response" Action="Verify" Succeed="False" Msg="账户已被禁用" />');

		if($role == "expired")
			die('<PKG Type="Response" Action="Verify" Succeed="False" Msg="账户已过期" />');


		$xmlback = new SimpleXMLElement('<PKG />');
	
		$xmlback->addAttribute('Type', 'Response');
		$xmlback->addAttribute('Action', 'Verify');
		$xmlback->addAttribute('Succeed', 'True');
		$xmlback->addAttribute('Msg', '');
	
		$xmlback->addAttribute('ExamCode', $examcode);

		/*
		$name = $ud->display_name;
		if(empty($name))
			$name = $u['nickname'];
		if(empty($name))
			$name = $u['last_name'].$u['first_name'];
		*/
		$name = $u['last_name'].$u['first_name'];
		if(empty($name))
			$name = $ud->display_name;
		if(empty($name))
			$name = $u['nickname'];			
			

		$xmlback->addAttribute('Name', $name);
		$xmlback->addAttribute('Sex', $u['sex']);
	
		$xmlback->addAttribute('University', $u['university']);
		$xmlback->addAttribute('School', $u['school']);
		$xmlback->addAttribute('Major',$u['major']);
		$xmlback->addAttribute('Class', $u['class']);
	
		$xmlback->addAttribute('No',  $u['no']);
		$xmlback->addAttribute('IDCard', $u['idcard']);
	
		$xmlback->addAttribute('Room', '');
		$xmlback->addAttribute('Session', '');
		$xmlback->addAttribute('Seat', '');

		$xmlback->addAttribute('Mobile', $u['mobile']);
		$xmlback->addAttribute('Email', $ud->user_email);
		$xmlback->addAttribute('IM', $u['im']);		
		
		$xmlback->addAttribute('Role', $role);
		$xmlback->addAttribute('Remark', $u['remark']);

		$avatar = get_avatar($user->ID);
		preg_match( '#src=["|\'](.+)["|\']#Uuis', $avatar, $matches );
		$avatarurl = ( isset( $matches[1] ) && ! empty( $matches[1]) ) ?
				(string) $matches[1] : '';  

		$xmlback->addAttribute('Avatar', $avatarurl);
		
	
		die($xmlback->asXML());

	}


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