/**
* @author Jade
* @description 弹出层效果
* @version V1.0
*/

$(function(){

var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

$.widget("firework.poplayer", {
	/**
	* @description options为公有参数
	* @claddName为参数实例，对此插件无影响
	*/
	options: {
		/**
		* @description options为公有参数
		* @claddName为参数实例，对此插件无影响
		*/
		defaultStyle:"fadinscale",
		/**
		 * @description 显示结束回调
		 * @method showAnimateEnd
		 * @param {object} event 事件参数
		 */
		showAnimateEnd:function(event){
			//alert("showAnimateEnd");
			//console.log("showAnimateEnd",arguments);
		},
		/**
		 * @description 隐藏结束回调
		 * @method hideAnimateEnd
		 * @param {object} event 事件参数
		 */
		hideAnimateEnd:function(event){
			//alert("hideAnimateEnd");
			//console.log("hideAnimateEnd",arguments);
		}
	},
	/**
	* @description 构建插件 
	* @private
	*/
	_create: function () {},
	_init: function () {},
	/**
	* @description 触发事件showAnimateEnd
	* @method _triggerHideAnimateEnd
	* @private
	*/		
	_triggerHideAnimateEnd:function(){
		this.element.hide().removeClass(this.style+"hide");
		this._trigger("hideAnimateEnd",this.element);
	},
	/**
	* @description 触发事件showAnimateEnd
	* @method _triggerShowAnimateEnd
	* @private
	*/		
	_triggerShowAnimateEnd:function(){
		this._trigger("showAnimateEnd",this.element);
	},
	/**
	* @description show方法用于定义显示特效，
	* @method show
	* @param {string} style 为特效样式名
	* @public
	*/	
	show:function(style){
		var me = this,
			element = me.element;
		
		this.style =style||this.options.defaultStyle;
		style = this.style;
		
		if(style&&element.is(":hidden")){
			element.one(animationend,$.proxy(this._triggerShowAnimateEnd,me));
			element.removeClass(style+"hide")
				   .addClass(style+"show")
				   .css("display","block");
		}else{
			element.show();
			this._triggerShowAnimateEnd();
		}
	},
	/**
	* @description show方法用于定义显示特效，
	* @method hide
	* @public
	*/
	hide:function(){
		var me = this,
			element = me.element,
			style = me.style;

		if(style&&element.is(":visible")){
			element.one(animationend,$.proxy(this._triggerHideAnimateEnd,me));
			element.removeClass(style+"show")
				   .addClass(style+"hide");
		}else {
			element.hide();
			this._triggerHideAnimateEnd();
		}  
	},
	/**
	* @description 销毁，移除相关样式，解除绑定
	* @public
	*/
	destroy: function () {
		this.element.removeClass(className);
		// 默认的destroy 方法会删掉 DOM 元素与插件实例直接的连接
		$.Widget.prototype.destroy.call(this);
	}
});

});