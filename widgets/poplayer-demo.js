/**
* @author Jade
* @version V1.0
*/
$(function(){
// Demo1
//控件初始化
$("#poplayer-demo").poplayer();

$("#poplayer-show").click(function(){
	//显示
	$("#poplayer-demo").poplayer("show","newspaper"); 
});
$("#poplayer-hide").click(function(){
	//隐藏
	$("#poplayer-demo").poplayer("hide"); 
});
	 
})

$(function(){
// Demo2
//控件初始化
$("#poplayer-demo2").poplayer({
	showAnimateEnd:function(){
		alert("显示");
	}/*,
 	hideAnimateEnd:function(){
		alert("隐藏");
	} */
});
// 监控一个事件要使用如下规则
// 控件名称+事件名字  
// 注意 要全部小写 例如poplayer +hideAnimateEnd  == poplayerhideanimateend
$("#poplayer-demo2").on("poplayerhideanimateend",function(){
	alert("隐藏");
});

$("#poplayer-show2").click(function(){
	//调用显示方法，并传入defaultStyle显示方式
	$("#poplayer-demo2").poplayer("show"); 
});
$("#poplayer-hide2").click(function(){
	//隐藏方式在显示的时候就设置好了，不需要传入defaultStyle值。
	//调用隐藏方法。
	$("#poplayer-demo2").poplayer("hide"); 
});
})