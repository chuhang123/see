<?php


if(!current_user_can('view_das_system'))
{
	die("您无权查看此页面");
}

echo "<link rel='stylesheet' type='text/css' href='".plugin_dir_url( __FILE__ )."css/das.css'>";
echo "<script type='text/javascript' src='".plugin_dir_url( __FILE__ )."js/util.js' ></script>";

echo "<script type='text/javascript' src='".get_bloginfo('wpurl')."/wp-includes/js/jquery/jquery.js?ver=1.7.2'></script>";
echo "<script type='text/javascript' src='".plugin_dir_url( __FILE__ )."js/highcharts.js' ></script>";
echo "<script type='text/javascript' src='".plugin_dir_url( __FILE__ )."js/exporting.js' ></script>";


echo "<script type='text/javascript' src='".plugin_dir_url( __FILE__ )."js/jquery-ui-1.10.3.custom.min.js' ></script>";
echo "<link rel='stylesheet' type='text/css' href='".plugin_dir_url( __FILE__ )."css/jquery-ui-1.10.3.custom.min.css'>";


echo "<script type='text/javascript' src='".plugin_dir_url( __FILE__ )."js/datepicker.js'></script>";
echo "<link rel='stylesheet' type='text/css' href='".plugin_dir_url( __FILE__ )."css/datepicker.css'>";
/*
echo "<script type='text/javascript' src='".plugin_dir_url( __FILE__ )."/js/bootstrap.min.js'></script>";
echo "<link rel='stylesheet' type='text/css' href='".plugin_dir_url( __FILE__ )."/css/bootstrap.min.css'>";
echo "<link rel='stylesheet' type='text/css' href='".plugin_dir_url( __FILE__ )."/css/bootstrap-theme.min.css'>";
*/

echo "<link rel='stylesheet' type='text/css' href='".plugin_dir_url( __FILE__ )."css/ui.jqgrid.css'>";
echo "<script type='text/javascript' src='".plugin_dir_url( __FILE__ )."js/jquery.jqGrid.min.js'></script>";
echo "<script type='text/javascript' src='".plugin_dir_url( __FILE__ )."js/i18n/grid.locale-cn.js'></script>";

/*
echo "<script type='text/javascript' src='".plugin_dir_url( __FILE__ )."/js/flexigrid.pack.js'></script>";
echo "<link rel='stylesheet' type='text/css' href='".plugin_dir_url( __FILE__ )."/css/flexigrid.pack.css'>";
*/

?>

<div id="wrap">
	<div id='idbar'>
		<form method="post" action="">

		
		    <select id="idsystem">
		    </select>

		    <select id="iddevice">
		    </select>

		    <select id="idtype">
		    </select>

		    <select id="idstate">
		    </select>

		    <select id="idfault">
		    </select>

		    <select id="idquickdate">
		        <option value="-1"  selected="selected" data-skip="1">自定范围</option>
		    	<option value="0">今天</option>
		    	<option value="1">昨天</option>
		    	<option value="2">前天</option>
		    	<option value="3">本周</option>	    	
		    	<option value="4">上周</option>
		    	<option value="5">本月</option>
		    	<option value="6">上月</option>
		    </select>	  	
		    <!--
			<input class="inputDate" id="inputDate" value="2012-06-14" />
			-->

			<span class="widgetDatePicker">
				<span class="widgetField">
					<span id="iddatetime"></span>　　　<a href="#">选择日期</a>
				</span>
				<span class="widgetCalendar"></span>
			</span>
			
			<span id="msg">正在加载数据 ... </span>

		</form>
	</div>

	
	<div id="graph"></div>
	<div id="grid">
		<table id="list"></table>
		<div id="pager"></div>
	</div>

</div>


<script type="text/javascript">
	var grid;	//表格对象
	var chart;	//图表对象
	var pkg;	//数据
	var options = {
	    chart: {
	        renderTo: 'graph',
	        //defaultSeriesType: 'spline',
			type: 'spline',
			reflow:true
			/*margin:0*/
	    },
	    title: {
	        text: '监测系统图表'
	    },
	    subtitle:{
	    	text:'今日数据'
	    },
	    xAxis: {
		    type: 'datetime',
	        dateTimeLabelFormats: { // don't display the dummy year
					second: '%H:%M:%S',  
	                minute: '%H:%M',  
	                hour: '%H:%M',
	                day:'%m/%d',
	                month:'%Y/%m',
	                year:'%Y'
	                }
	    },
		yAxis: {
			title: {
				text: '度量单位：'
			}
		},
		tooltip: {
			formatter: function() {
					return '<b>'+ this.series.name +'</b><br/>'+
					Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +' '+ this.y +' ';
			}
		},
		series: [{
				name: '未知参数',
				// Define the data points. All series have a dummy year
				// of 1971/71 in order to be compared on the same x axis. Note
				// that in JavaScript, months start at 0 for January, 1 for February etc.
				data: [
				/*
					[Date.UTC(1971,  9, 27,13,22,22), 0   ],
					[Date.UTC(1971,  9, 27,13,25,22), 0.6 ],
					[Date.UTC(1971,  9, 27,13,28,22), 0.7 ],
					[Date.UTC(1971,  9, 27,13,32,11), 0.8 ],
					[Date.UTC(1971,  9, 27,14,35,22), 0.6 ]
				*/
				]
			}],
		exporting: {
            width: 1200,
            sourceHeight:250,
            scale: 2
        },
        lang:{
        	printChart:'打印图表',
        	downloadJPEG:'保存为 JPG 图片',
        	downloadPNG:'保存为 PNG 图片',
        	downloadPDF:'保存为 PDF 文件',
        	downloadSVG:'保存为 SVG 文件'
        }

	};


    //将类似 1972-2-18 11:11:11 的字符串转化为UTC时间戳
	function strtotime(strings)
	{ 
	    var arr = strings.split(" "); 
	    var arr1 = arr[0].split("-"); 
	    var arr2 = arr[1].split(":"); 
	    var year = arr1[0]; 
	    var month = arr1[1]-1; 
	    var day = arr1[2]; 
	    var hour = arr2[0]; 
	    var mon = arr2[1]; 
	    var sec = arr2[2];
	    //var timestamp = new Date(year,month,day,hour,mon).getTime()/1000; 
	    var timestamp = Date.UTC(year,month,day,hour,mon,sec);
	    return timestamp;
	}

	function reloaddata()
	{
		//获取参数
		var psystem = jQuery('#idsystem').val();
		var pdevice = jQuery('#iddevice').val();
		var ptype = jQuery('#idtype').val();
		var pstate =jQuery('#idstate').val();
		var pfault =jQuery('#idfault').val();

		var pdatetime = jQuery('#iddatetime').text();
		var dates = pdatetime.split(' 至 ');	
		var pstart = dates[0];
		var pend = dates[1];

		//alert('action=querydata&system='+psystem+'&device='+pdevice+'&type='+ptype+'&state='+pstate+'&fault='+pfault+'&start='+pstart+'&end='+pend);

		//先清空数据
		options.series[0].data.length = 0;
		//if(chart!=null)
		//	chart.redraw();

		if(psystem==-1)
			return;

		//alert('system='+psystem+'&device='+pdevice+'&type='+ptype+'&datetime='+pdatetime);

	    jQuery('#msg').css('display','inline');
		//加载数据
		jQuery.ajax({
		type:'post',
		url:'/wp-content/plugins/das/procview.php',
		data:'action=querydata&system='+psystem+'&device='+pdevice+'&type='+ptype+'&state='+pstate+'&fault='+pfault+'&start='+pstart+'&end='+pend,
		dataType:'html',
		success:function(rdata){
			//alert(rdata);
			//转化为json对象
			pkg = eval('('+rdata+')'); 
			if(!pkg.succeed)
			{
				alert(pkg.msg);
				return;				
			}

			//更新grid
			jQuery("#list").jqGrid("clearGridData");
			for(var i=0;i<pkg.rows.length;i++){  
        		jQuery("#list").jqGrid('addRowData',i+1,pkg.rows[i]);  
   			} 
   			
			jQuery("#list").closest(".ui-jqgrid-bdiv").css({'overflow-x':'hidden'});
			

			//设置显示参数
			options.title.text = jQuery('#idsystem').find("option:selected").text() + " - " + 
				jQuery('#iddevice').find("option:selected").text();
			options.subtitle.text = jQuery('#iddatetime').text();
			options.series[0].name = jQuery('#idtype').find("option:selected").text();
			options.yAxis.title.text = "度量单位: " + jQuery('#idtype').find("option:selected").attr("unit");
			
			//构造数组
			for(var i=0;i<pkg.rows.length;i++)
			{	
				var onedata=[];
				var isoDate = strtotime(pkg.rows[i].datetime);

				onedata.push(isoDate);
				onedata.push(pkg.rows[i].value);
				//加入数据列表
				options.series[0].data.push(onedata);	
			}

	    	//更新图表
	    	chart = new Highcharts.Chart(options);

	    	jQuery('#msg').css('display','none');

			
	    	//更新表格
	    	//grid.clearGridData();
	    	
	    	//var str = '{"records":1,"total":1,"rows":[{"datetime":"2013-1-1 11:00:00","system":"bj","device":"ddd","type":"wendu","state":"normal","fault":"normal","value":11}],"page":1}';
	    	//pkg = eval('('+str+')'); 
	    	







		},
		error:function(){
			alert("加载数据出错");
			jQuery('#msg').css('display','none');
		}

		})

	}

	

//装载数据类型
	function reloadtype()
	{
		jQuery.ajax({
		type:'post',
		url:'/wp-content/plugins/das/procview.php',
		data:'action=querytype',
		dataType:'html',
		success:function(rdata){
			var pkg = eval('('+rdata+')'); 
			for(var i=0;i<pkg.data.length;i++)
				jQuery("#idtype").append("<option value='"+pkg.data[i].id+"' unit='"+pkg.data[i].unit+"'>"+pkg.data[i].name+"</option>");
			jQuery("#idtype").get(0).selectedIndex=0;//设置第一项选中		

		},
		error:function(){
			alert("加载数据出错");
		}
		})
	}

	//装载系统参数
	function reloadsystem()
	{
		jQuery.ajax({
		type:'post',
		url:'/wp-content/plugins/das/procview.php',
		data:'action=querysystem',
		dataType:'html',
		success:function(rdata){
			//转化为json对象
			//alert(rdata);
			var pkg = eval('('+rdata+')'); 
			if(pkg.data.length == 0)
			{
				jQuery("#idsystem").append("<option value=-1>没有系统属于此用户</option>");
				return;
			}
			//else
			//	jQuery("#idsystem").append("<option value=-1>选择要查看的系统</option>");
			for(var i=0;i<pkg.data.length;i++)
				jQuery("#idsystem").append("<option value='"+pkg.data[i].id+"'>"+pkg.data[i].name+"</option>");	
			
			jQuery("#idsystem").get(0).selectedIndex=0;//设置第一项选中
			jQuery("#idsystem").change();//必须主动触发下

		},
		error:function(){
			alert("加载数据出错");
		}
		})

	}

	//重新加载设备
	function reloaddevice()
	{
		var psystem = jQuery('#idsystem').val();

		if(psystem == -1)
			return;

		jQuery("#iddevice").empty();

		jQuery.ajax({
		type:'post',
		url:'/wp-content/plugins/das/procview.php',
		data:'action=querydevice&system=' + psystem,
		dataType:'html',
		success:function(rdata){
			//转化为json对象
			var pkg = eval('('+rdata+')');  

			if(pkg.data.length == 0)
			{
				jQuery("#iddevice").append("<option value=-2>没有控制器设备</option>");
				return;
			}
			else
				jQuery("#iddevice").append("<option value=-1>所有的控制器</option>");

			for(var i=0;i<pkg.data.length;i++)
				jQuery("#iddevice").append("<option value='"+pkg.data[i].id+"'>"+pkg.data[i].name+"</option>");

			jQuery("#iddevice").get(0).selectedIndex=0;//设置第一项选中
			jQuery("#iddevice").change();//必须主动触发下

		},
		error:function(){
			alert("加载数据出错");
		}
		})

	}

	function initdatepicker()
	{
		var now3 = new Date();
		//now3.addDays(-4);
		var now4 = new Date()
		jQuery('.widgetCalendar').DatePicker({
			flat: true,
			format: 'Y-m-d',
			date: [new Date(now3), new Date(now4)],
			calendars: 3,
			mode: 'range',
			starts: 1,
			onChange: function(formated) {
				jQuery('.widgetField span').get(0).innerHTML = formated.join(' 至 ');
			}
		});
		var state = false;
		jQuery('.widgetField>a').bind('click', function(){
			jQuery('.widgetCalendar').stop().animate({height: state ? 0 : jQuery('.widgetCalendar div.datepicker').get(0).offsetHeight}, 500);
			if(state)
			{
				jQuery("#idquickdate").get(0).selectedIndex=0;
				reloaddata();				
			}

				//alert("closed");
			state = !state;
			return false;
		});

		jQuery('#iddatetime').html(new Date().format("yyyy-MM-dd") + " 至 " + new Date().format("yyyy-MM-dd"));

		/*
		var now3 = new Date();
		//now3.addDays(-4);
		var now4 = new Date()
		jQuery('#widgetCalendar').DatePicker({
			flat: true,
			format: 'Y/m/d',
			date: [new Date(now3), new Date(now4)],
			calendars: 3,
			mode: 'range',
			starts: 1,
			onChange: function(formated) {
				jQuery('#widgetField span').get(0).innerHTML = formated.join(' — ');
			}
		});
		var state = false;
		jQuery('#widgetField>a').bind('click', function(){
			jQuery('#widgetCalendar').stop().animate({height: state ? 0 : jQuery('#widgetCalendar div.datepicker').get(0).offsetHeight}, 500);
			state = !state;
			return false;
		});
		*/
		
		/*
		jQuery('.inputDate').DatePicker({
			format:'Y-m-d',
			date: jQuery('#inputDate').val(),
			current: jQuery('#inputDate').val(),
			calendars: 2,
			mode: 'multiple',			
			starts: 1,
			position: 'r',
			onBeforeShow: function(){
				jQuery('#inputDate').DatePickerSetDate(jQuery('#inputDate').val(), true);
			},
			onChange: function(formated, dates){
				jQuery('#inputDate').val(formated);
				jQuery('#inputDate').DatePickerHide();
			}
		});
		*/
	}

	//加载状态
	function reloadstate()
	{
		jQuery.ajax({
		type:'post',
		url:'/wp-content/plugins/das/procview.php',
		data:'action=querystate',
		dataType:'html',
		success:function(rdata){
			var pkg = eval('('+rdata+')'); 
			for(var i=0;i<pkg.data.length;i++)
				jQuery("#idstate").append("<option value='"+pkg.data[i].id+"'>"+pkg.data[i].name+"</option>");
			jQuery("#idstate").get(0).selectedIndex=0;//设置第一项选中		

		},
		error:function(){
			alert("加载数据出错");
		}
		})
	}

	//加载错误
	function reloadfault()
	{
		jQuery.ajax({
		type:'post',
		url:'/wp-content/plugins/das/procview.php',
		data:'action=queryfault',
		dataType:'html',
		success:function(rdata){
			var pkg = eval('('+rdata+')'); 
			for(var i=0;i<pkg.data.length;i++)
				jQuery("#idfault").append("<option value='"+pkg.data[i].id+"'>"+pkg.data[i].name+"</option>");
			jQuery("#idfault").get(0).selectedIndex=0;//设置第一项选中		

		},
		error:function(){
			alert("加载数据出错");
		}
		})
	}

	//快速设置日期
	function quickdate()
	{
		var daterange;
		var today = new Date();	
		var strtoday = new Date().format("yyyy-MM-dd");	
		switch(jQuery('#idquickdate').val())
		{
			/*
		    	<option value="0">今天</option>
		    	<option value="1">昨天</option>
		    	<option value="2">前天</option>
		    	<option value="3">本周</option>	    	
		    	<option value="4">上周</option>
		    	<option value="5">本月</option>
		    	<option value="6">上月</option>
			*/
			case "-1":
			case "0":
				daterange = strtoday + " 至 " + strtoday;
				break;
			case "1":
				AddDays(today,-1);
				strtoday = today.format("yyyy-MM-dd");
				daterange = strtoday + " 至 " + strtoday;
				break;
			case "2":
				AddDays(today,-2);
				strtoday = today.format("yyyy-MM-dd");
				daterange = strtoday + " 至 " + strtoday;
				break;
			case "3":
				var nowDayOfWeek = today.getDay();
				var nowDay = today.getDate();
				var nowMonth = today.getMonth();
				var nowYear = today.getYear();
				nowYear += (nowYear < 2000) ? 1900 : 0;
				var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
				var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
				AddDays(weekStartDate,1);//从周一开始，算法有问题，仍需改进
				var strmonday = weekStartDate.format("yyyy-MM-dd");
				daterange = strmonday + " 至 " + strtoday;
				break;						
			default:
				break;
		}

		jQuery('#iddatetime').html(daterange);
		//更新数据
		reloaddata();
	}

	//初始化图表
	function initgraph()
	{
	    chart = new Highcharts.Chart(options);
	}
	//初始化表格
	function initgrid()
	{

		
    	gid = jQuery("#list").jqGrid({
			datatype: "local",
			data:pkg,
		   	colNames:['时间','系统','设备','参数','状态','错误','值'],
		   	colModel:[
		   		{name:'datetime',index:'datetime',width:40},
		   		{name:'system',index:'system',width:40},
		   		{name:'device',index:'device',width:40},
		   		{name:'type',index:'type',width:20},
		   		{name:'state',index:'state',width:20},
		 		{name:'fault',index:'fault',width:20},  		
		   		{name:'value',index:'value',width:10}	
		   	],
		   	jsonReader: {
                 root: "rows",
                 page: "page",
                 total: "total",
                 records: "records",
                 repeatitems: false
         	},
		   	rowNum:20,
		   	rowList:[10,20,30,50],
		   	pager: '#pager',
		   	pginput:false,
		   	sortname: 'datetime',
		    viewrecords: true,
		    sortorder: "desc",
		    loadonce: true,
		    caption: "数据列表",
		    autowidth:true,
		    height:'auto'
		});

		
	}

	//页面加载完成后开始装载数据
	jQuery(function() 
	{
		//初始化日期选择
		initdatepicker();

		//初始化图表
		initgraph();

		//初始化表格
		initgrid();

		//装载类型
		reloadtype();

		//装载状态
		reloadstate();

		//装载错误
		reloadfault();

		//为system绑定事件
		jQuery("#idsystem").change(function(){
			reloaddevice();
		});
		//为device绑定事件
		jQuery("#iddevice").change(function(){
			reloaddata();
		});
		//为type绑定事件
		jQuery("#idtype").change(function(){
			reloaddata();
		});
		//为state绑定事件
		jQuery("#idstate").change(function(){
			reloaddata();
		});
		//为fault绑定事件
		jQuery("#idfault").change(function(){
			reloaddata();
		});
		//为quicksetdate绑定事件
		jQuery("#idquickdate").change(function(){
			quickdate();
		});

		//开始装载系统选项
		reloadsystem();

	});

</script>

