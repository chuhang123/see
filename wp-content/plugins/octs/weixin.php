<?php
header('Content-type:text');
define("TOKEN", "zhz");	//与服务器设置的要一致
define("AppId","wx817ba3768585e931");
define("AppSecret","3d74b0be209046cfe2f78325c49649a1");

require_once("config.php");
require_once("connweixin.php");

global $db;


$wechatObj = new wechatCallbackapiTest();



if (!isset($_GET['echostr'])) {	//从微信服务器得到echostr,isset是判断一个变量是否定义过 即使它没有值,返回值也是true
	$wechatObj->responseMsg();
}else{
	$wechatObj->valid();
}

class wechatCallbackapiTest
{
	//名称：valid()
	//功能：验证微信服务器发送的消息，并发送给$echoStr
	//返回：从微信服务器发送过来的echostr
	public function valid()
	{
		$echoStr = $_GET["echostr"];	//从微信服务器得到echostr
		if($this->checkSignature()){	//验证通过，则返回$echoStr
			echo $echoStr;
			exit;
		}
	}
	

	public function getaccesstoken()
	{
		$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".AppId."&secret=".AppSecret;
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); 
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE); 
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		$output = curl_exec($ch);
		curl_close($ch);
		$jsoninfo = json_decode($output, true);
		$access_token = $jsoninfo["access_token"];
		return $access_token;
	}

	//名称：responseMsg()
	//功能：根据接收的消息类型（文本、事件等），分别回复消息
	//返回：返回消息结果
	public function responseMsg()
	{
		$postStr = $GLOBALS["HTTP_RAW_POST_DATA"];//用$GLOBALS['HTTP_RAW_POST_DATA']来接收数据
		
		if (!empty($postStr)){

			//$this->recordLog("R ".$postStr);	//记录读取的信息

			$postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);//解析xml数据到object
			$RX_TYPE = trim($postObj->MsgType);//接收消息类型text/event
			
			switch ($RX_TYPE)
			{
				case "event":	//事件
					$result = $this->receiveEvent($postObj);
					break;
				case "text":	//文本
					$result = $this->receiveText($postObj);
					break;
				case "image":	//图片
					$result = $this->receiveImage($postObj);
					break;
				case "voice":	//语音
					$result = $this->receiveVoice($postObj);
					break;
				case "video":	//视频
					$result = $this->receiveVideo($postObj);
					break;
				case "shortvideo":	//小视频
					$result = $this->receiveShortVideo($postObj);
					break;
				case "location":	//位置
					$result = $this->receiveLocation($postObj);
					break;
				case "link":	//链接
					$result = $this->receiveLink($postObj);
					break;
			}
			//$this->recordLog("T ".$result);	//记录发送的信息
			echo $result;
		}else {
			echo "";
			exit;
		}
	}
	
	//名称：checkSignature()
	//功能：验证微信服务器发送过来的signature与加密数据(timestamp\nonce\TOKEN)是否一致
	//返回：true：验证通过；false：验证失败
	private function checkSignature()
	{
		$signature = $_GET["signature"];//从微信服务器得到signature
		$timestamp = $_GET["timestamp"];//从微信服务器得到timestamp
		$nonce = $_GET["nonce"];		//从微信服务器得到nonce
		$token = TOKEN;					//从微信管理员设置的TOKEN
		$tmpArr = array($token, $timestamp, $nonce);//建立数组tmpArr
		sort($tmpArr);					//将token、timestamp、nonce三个参数进行字典序排序；
		$tmpStr = implode($tmpArr);		//将数组的内容连接成一个字符串
		$tmpStr = sha1($tmpStr);		//将三个参数字符串拼接成一个字符串进行sha1加密；
		
		if($tmpStr == $signature){		//验证加密后的字符串与signature对比，相等则说明验证通过
			return true;
		}else{
			return false;
		}
	}
	
	//名称：receiveEvent()
	//功能：根据事务类型，构造回发消息
	//返回：回发消息
	private function receiveEvent($object)
	{
		$content = "";
		if($object->Event == "subscribe"){
			//1.关注公众号；2. 扫描带参数二维码事件（用户未关注时，进行关注后的事件推送）
			if(var_dump(property_exists('$object', 'EventKey'))){
				//2. 扫描带参数二维码事件（用户未关注时，进行关注后的事件推送）
				$content = "未关注时扫描二维码关注事件：".strval($object->EventKey).strval($object->Ticket); 
			} else {
				//1.关注公众号
				$content = "你好，欢迎关注，本订阅号会不定时发布各种各样的不扰民消息。";
			}
		} else if($object->Event == "SCAN"){
			//扫描带参数二维码事件(扫描带参数二维码事件,用户已关注时的事件推送)
			$content = "关注时扫描二维码关注事件：".strval($object->EventKey).strval($object->Ticket);
		} else if($object->Event == "unsubscribe"){
			//取消关注公众号
			$content = "取消关注 再见！";
		} else if($object->Event == "CLICK"){
			//自定义菜单：用户点击自定义菜单后，微信会把点击事件推送给开发者，注意，点击菜单弹出子菜单，不会产生上报。
			$content = "点击菜单拉取消息时的事件推送:".strval($object->EventKey);
		} else if($object->Event == "LOCATION"){
			//上报地理位置事件:维度、经度、精度
			$content = "上报地理位置：".strval($object->Latitude).",".strval($object->Longitude).",".strval($object->Precision);//
		} else if($object->Event == "VIEW"){
			//点击菜单跳转链接时的事件推送
			$content = "点击菜单跳转链接时的事件推送：".strval($object->EventKey);
		}
		$result = $this->transmitText($object, $content);
		return $result;
	}
	
	//名称：receiveText()
	//功能：接收文本消息
	//返回：回发消息
	private function receiveText($object)
	{
		$c = trim($object->Content);

		$content = "公众号功能如下：\n1. 输入 \"考试 学号\" 返回考试安排";
		$content = $content."\n2. 输入 \"成绩 学号\" 返回考试成绩";
		$content = $content."\n3. 输入 \"通知\" 返回最新通知";

		if(strstr($c,'考试'))
		{
			$words = explode(" ", $c);
			$content = $this->queryexam(end($words));
		}
		if(strstr($c,'成绩'))
		{
			$words = explode(" ", $c);
			$content = $this->queryscore(end($words));
		}		
		/*
		if(strstr($c,'token'))
		{
			$content = $this->getaccesstoken();
		}
		*/
		if($c =="通知")
		{
			$content = "请尽快查询考试安排，留级的同学如果没有查到考试信息请联系任课教师。";
		}
		/*
		if(is_array($content)){
			if (isset($content[0]['PicUrl'])){
				$result = $this->transmitNews($object, $content);
			}else if (isset($content['MusicUrl'])){
				$result = $this->transmitMusic($object, $content);
			}
		}else{
			$result = $this->transmitText($object, $content);
		}
		*/

		$result = $this->transmitText($object, $content);
		return $result;
	}
	
	//名称：receiveImage()
	//功能：接收图片消息
	//返回：回发消息
	private function receiveImage($object)
	{
		/*
		$keyword = trim($object->Content);
		$content = date("Y-m-d H:i:s",time())."\n本公众号正在进行测试：";
		$content = $content."\n您发送的消息PicUrl:".$object->PicUrl." MediaId:".$object->MediaId;
		
		if(is_array($content)){
			if (isset($content[0]['PicUrl'])){
				$result = $this->transmitNews($object, $content);
			}else if (isset($content['MusicUrl'])){
				$result = $this->transmitMusic($object, $content);
			}
		}else{
			$result = $this->transmitText($object, $content);
		}
		
		return $result;
		*/
	}
	
	//名称：receiveVoice()
	//功能：接收语音消息
	//返回：回发消息
	private function receiveVoice($object)
	{
		/*
		if (isset($object->Recognition) && !empty($object->Recognition)){
			$contentStr = "你发送的是语音，内容为：".$object->Recognition.".".$object->MediaId;
			//$resultStr = $this->transmitNews($object, $contentStr);
		}else{
			$contentStr = "未开启语音识别功能或者识别内容为空.".$object->MediaId;
			//$resultStr = $this->transmitText($object, $contentStr);
		}
		
		if (is_array($contentStr)){
			$resultStr = $this->transmitNews($object, $contentStr);
		}else{
			$resultStr = $this->transmitText($object, $contentStr);
		}
	
		return $resultStr;
		
		
		//$result = tranceSmartMachineStr($object,$object->Recognition);
		//return $result;
		*/
	}
	
	//名称：receiveVideo()
	//功能：接收视频消息
	//返回：回发消息
	private function receiveVideo($object)
	{
		/*
		$keyword = trim($object->Content);
		$content = date("Y-m-d H:i:s",time())."\n本公众号正在进行测试：";
		$content = $content."\n您发送的消息ThumbMediaId:".$object->ThumbMediaId." MediaId:".$object->MediaId;
		
		if(is_array($content)){
			if (isset($content[0]['PicUrl'])){
				$result = $this->transmitNews($object, $content);
			}else if (isset($content['MusicUrl'])){
				$result = $this->transmitMusic($object, $content);
			}
		}else{
			$result = $this->transmitText($object, $content);
		}
		
		return $result;
		*/
	}
	
	//名称：receiveShortVideo()
	//功能：接收小视频消息
	//返回：回发消息
	private function receiveShortVideo($object)
	{
		/*
		$keyword = trim($object->Content);
		$content = date("Y-m-d H:i:s",time())."\n本公众号正在进行测试：";
		$content = $content."\n您发送的消息ThumbMediaId:".$object->ThumbMediaId." MediaId:".$object->MediaId;
		
		if(is_array($content)){
			if (isset($content[0]['PicUrl'])){
				$result = $this->transmitNews($object, $content);
			}else if (isset($content['MusicUrl'])){
				$result = $this->transmitMusic($object, $content);
			}
		}else{
			$result = $this->transmitText($object, $content);
		}
		
		return $result;
		*/
	}
	
	//名称：receiveLocation()
	//功能：接收地理位置消息
	//返回：回发消息
	private function receiveLocation($object)
	{
		/*
		$keyword = trim($object->Content);
		$content = date("Y-m-d H:i:s",time())."\n本公众号正在进行测试：";
		$content = $content."\n您发送的消息Location_X:".$object->Location_X." Location_Y:".$object->Location_Y;
		$content = $content."\n您发送的消息Scale:".$object->Scale." Label:".$object->Label;
		
		if(is_array($content)){
			if (isset($content[0]['PicUrl'])){
				$result = $this->transmitNews($object, $content);
			}else if (isset($content['MusicUrl'])){
				$result = $this->transmitMusic($object, $content);
			}
		}else{
			$result = $this->transmitText($object, $content);
		}
		
		return $result;
		*/
	}
	
	//名称：receiveLink()
	//功能：接收链接消息
	//返回：回发消息
	private function receiveLink($object)
	{
		/*
		$keyword = trim($object->Content);
		$content = date("Y-m-d H:i:s",time())."\n本公众号正在进行测试：";
		$content = $content."\n您发送的消息Title:".$object->Title." Description:".$object->Description;
		$content = $content."\n您发送的消息Url:".$object->Url;
		
		if(is_array($content)){
			if (isset($content[0]['PicUrl'])){
				$result = $this->transmitNews($object, $content);
			}else if (isset($content['MusicUrl'])){
				$result = $this->transmitMusic($object, $content);
			}
		}else{
			$result = $this->transmitText($object, $content);
		}
		
		return $result;
		*/
	}
	
	
	//名称：transmitText()
	//功能：发送文本消息
	//返回：回发消息
	private function transmitText($object, $content)
	{
		$textTpl = "<xml>
<ToUserName><![CDATA[%s]]></ToUserName>
<FromUserName><![CDATA[%s]]></FromUserName> 
<CreateTime>%s</CreateTime>
<MsgType><![CDATA[text]]></MsgType>
<Content><![CDATA[%s]]></Content>
</xml>";
		$result = sprintf($textTpl, $object->FromUserName, $object->ToUserName, time(), $content);
		return $result;
	}
	
	//名称：transmitNews()
	//功能：回复图文消息
	//返回：图文消息
	private function transmitNews($object, $arr_item)
	{
		if(!is_array($arr_item))
			return;
			
			$itemTpl = "    <item>
        <Title><![CDATA[%s]]></Title>
        <Description><![CDATA[%s]]></Description>
        <PicUrl><![CDATA[%s]]></PicUrl>
        <Url><![CDATA[%s]]></Url>
    </item>
";
			$item_str = "";
			foreach ($arr_item as $item)
				$item_str .= sprintf($itemTpl, $item['Title'], $item['Description'], $item['PicUrl'], $item['Url']);
				
				$newsTpl = "<xml>
				<ToUserName><![CDATA[%s]]></ToUserName>
				<FromUserName><![CDATA[%s]]></FromUserName>
				<CreateTime>%s</CreateTime>
				<MsgType><![CDATA[news]]></MsgType>
				<Content><![CDATA[]]></Content>
				<ArticleCount>%s</ArticleCount>
				<Articles>
				$item_str</Articles>
				</xml>";
				
				$result = sprintf($newsTpl, $object->FromUserName, $object->ToUserName, time(), count($arr_item));
				return $result;
	}
	
	//名称：transmitMusic()
	//功能：回复音乐消息
	//返回：音乐消息
	private function transmitMusic($object, $musicArray)
	{
		
		$itemTpl = "<Music>
    <Title><![CDATA[%s]]></Title>
    <Description><![CDATA[%s]]></Description>
    <MusicUrl><![CDATA[%s]]></MusicUrl>
    <HQMusicUrl><![CDATA[%s]]></HQMusicUrl>
</Music>";
		/*
		$itemTpl = "<Music>
    <Title><![CDATA[%s]]></Title>
    <Description><![CDATA[%s]]></Description>
    <MusicUrl><![CDATA[%s]]></MusicUrl>
    <HQMusicUrl><![CDATA[%s]]></HQMusicUrl>
    <ThumbMediaId><![CDATA[%s]]></ThumbMediaId>
</Music>";
		
		$itemTpl = "<Music>
    <Title><![CDATA[%s]]></Title>
    <Description><![CDATA[%s]]></Description>
    <MusicUrl><![CDATA[%s]]></MusicUrl>
    <HQMusicUrl><![CDATA[%s]]></HQMusicUrl>
	<ThumbMediaId><![CDATA[%s]]></ThumbMediaId>
</Music>";*/
		
		$item_str = sprintf($itemTpl, $musicArray['Title'], $musicArray['Description'], $musicArray['MusicUrl'], $musicArray['HQMusicUrl'], $musicArray['ThumbMediaId']);
		
		$textTpl = "<xml>
		<ToUserName><![CDATA[%s]]></ToUserName>
		<FromUserName><![CDATA[%s]]></FromUserName>
		<CreateTime>%s</CreateTime>
		<MsgType><![CDATA[music]]></MsgType>
		$item_str
		</xml>";
		
		$result = sprintf($textTpl, $object->FromUserName, $object->ToUserName, time());
		return $result;
	}
	
	//名称：recordLog()
	//功能：记录日志
	//返回：
	private function recordLog($log_content)
	{
		$file  = 'log.txt';//要写入文件的文件名（可以是任意文件名），如果文件不存在，将会创建一个
		if($f  = file_put_contents($file, $log_content.'\n',FILE_APPEND)){// 这个函数支持版本(PHP 5)
			//echo "写入成功。<br />";
		}
	}
	//名称：logger()
	//功能：记录日志
	//返回：
	private function logger($log_content)
	{
		if(isset($_SERVER['HTTP_APPNAME'])){   //SAE
			sae_set_display_errors(false);
			sae_debug($log_content);
			sae_set_display_errors(true);
		}else if($_SERVER['REMOTE_ADDR'] != "127.0.0.1"){ //LOCAL
			$max_size = 10000;
			$log_filename = "log.xml";
			if(file_exists($log_filename) and (abs(filesize($log_filename)) > $max_size)){unlink($log_filename);}
			file_put_contents($log_filename, date('H:i:s')." ".$log_content."\r\n", FILE_APPEND);
		}
	}


	private function queryexam($examid)
	{
		global $db;
		$r = "";
	   	$sql="select * from exam_arrange_2017Spring where 学号='".$examid."'";
	   	$rs=$db->Execute($sql);
		while(!$rs->EOF)
		{
			$r = "学号:".$rs->fields["学号"]." ";
			$r = $r."姓名:".$rs->fields["姓名"]." ";
			$r = $r."性别:".$rs->fields["性别"]." ";
			$r = $r."班级:".$rs->fields["班级"]." ";
			$r = $r."考试性质:".$rs->fields["状态"]." ";
			$r = $r."语言种类:".$rs->fields["考试语种"]." ";
			//echo "考试场次：".$rs->fields["考试场次"]." ";
			$r = $r."考试时间:".$rs->fields["考试时间"]." ";
			$r = $r."考试机房:".$rs->fields["考试机房"]." ";
			$r = $r."座位号:".$rs->fields["座位号"]." ";
			$r = $r."校区:".$rs->fields["校区"]." ";
			//echo "备注：<b>".$rs->fields["备注"]." </b>";

			$rs->MoveNext();
		}
		return $r;
	}

	private function queryscore($examid)
	{
		return '暂无成绩';
	}	

}


?>