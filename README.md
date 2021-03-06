#FireWork概述#

##建设背景和目标##

FireWork运营后要解决如下问题：
	加快开发速度。
	增加项目之间公用模块的复用性。
	丰富的文档与学习资料。
	减少基础设计时间增加更多的创意
	业务现状分析
项目从需求开始，原型，设计，切图，构建整合，调试数据接口，发布项目。其中每一个环节都需要一次或者多次的变更。最终导致项目人员疲惫不堪。使得项目从开始设计为精品工程，最后变成了一个原来期望不足50%的项目。

##FireWork功能需求概述##
项目采用可视化方式生成页面集合，构建页面时，拖拽以组件模式开发的控件到页面中，并可以调整控件的属性，页面之间的跳转可以选择跳转方式，效果可以采用任何动画方式，并可以扩展。不支持的采用替代方案或移除。页面生成可以打包页面集合，生成单机版项目。针对每个需要处理数据的页面可以独立去处理，最终发布项目。
分析后具有如下工作点。

##设计原则
快速开发为目标，以组件方式开发控件，统一的调用接口。可扩展的的动画方式。采用浏览器探测技术向下兼容到IE7。以页面模块为单位，自动异步构建程序。

##统一规范
为了保持代码的高效，采用统一文档管理方式，需要统一各个方面的规范。

##文档管理
采用统一的规范，生成对应的文档说明。
构建一个前端网站，把相应的组件，HTML结构等都挂载到该网站上，以便开发者可以快速查询与开发。

##多语言
支持多语言切换。

##主题定制
使用LESS方式切换主题

##组件库
把常用的组件与定制的插件以相同的方式扩展插件库。

##form表单控制
定制常见的form表单元素
表单验证机制

##工具库
常用的代码功能。

##动画库
CSS3建立常用的动画库

##异常管理
统一异常管理，发送到服务器，截图，邮箱。

##可视化生成页面
拖拽页面上要显示的组件
可以设置组件属性
设置页面的跳转方式及连接方式
生成页面

##APP构建
页面调试
路由页面
打包页面发布为项目