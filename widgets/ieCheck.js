/**   
 * @fileOverview ie浏览器版本检测
 * @author 王付聪
 * @version V1.0
 */ 
 $(function(){
 
	$.widget("fireWork.ieCheck",{
	/**
	 * @description 公有参数设置
	 * @param urls 浏览器链接
	 * @param imgUrl 图片链接
	 * @since 2014/10/13
	 */
		options:{
			urls:[],
			imgUrl:[]
		},
	/**
	 * @description 创建插件
	 * @method _creat
	 * @since 2014/10/13
	 */
		_create:function(){
			var me = this;
			var doc = me.element;
			var alertDiv ='<div class="loading-mask">'
					+'<div class="wd" >'
					+'<div class="wd_title">您知道您的IE浏览器过时了吗？</div>'
					+'<div class="wd_content">为了得到更好的体验效果，我们建议您升级到最新版本的IE或选择另一个web浏览器，下面是几个最流行的web浏览器。</div>'
					+'<div class="wd_foot" ><a id="goOn">>>>继续访问</a></div>'
					+'<div>'
						+'<a href="https://www.google.com/intl/zh-CN/chrome/browser/" target="_blank"><img src="image/google.jpg" class="img"></a>'
						+'<a href="http://www.firefox.com.cn/" target="_blank"><img src="image/google.jpg" class="img"></a>'
						+'<a href="http://www.microsoft.com/zh-cn/download/default.aspx" target="_blank"><img src="image/google.jpg" class="img"></a>'
					+'</div>'
					+'</div>'
					+'</div>';
		/*判断浏览器是否是ie并且是否是ie6或7*/
			if($.browser.msie  && parseInt($.browser.version, 10) < 8){
			 	this.show(alertDiv);//页面添加ie提示框
				/*绑定继续访问点击事件*/
				$("#goOn").bind("click",function(){
					me.closeDiv();
				});
			 }
			
		},
		/**
		 * @description 页面提示
		 * @method show
		 * @since 2014/10/13
		*/
		show:function(e){
			$("body").append(e);
		},
		/**
		 * @description 继续访问
		 * @method closeDiv
		 * @since 2014/10/13
		*/
		closeDiv:function(){
			$(".loading-mask").remove();
		},
		/**
		 * @description 销毁绑定插件效果，
		 * @method destroy
		 * @since 2014/10/13
		*/
		destroy:function(){
			$.Widget.prototype.destroy.call(this);
		}

	});

 })