define({
  "en-us": true,
  "zh-tw": true,
  "root": {
    "json": [{
		    "caption":"组件",
		    "children": [{"id":"eux_framework","caption":"核心框架","des":"描述信息","logo":"0001.jpg","items":[{"id":"ecp.core.web.jsload","logo":"js.png","caption":"JS加载","support":"IE8.0+, chrome+, firefox+","description":"require与define模块加载方式"},
				    {"id":"ecp.core.web.cssload","logo":"css.png","caption":"CSS加载","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+","description":"2222"},
				    {"id":"ecp.core.web.remoteServer","logo":"remote.png","caption":"远程调用","support":"IE8+,Chrome26+,Firefox28+","description":"3333"},
				    {"id":"ecp.core.web.pageLoad","logo":"pageLoad.png","caption":"页面加载","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+","description":""},
				    {"id":"ecp.core.web.security","logo":"security.png","caption":"安全处理","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+","description":""}]},
				    {"id":"eux_baselibrary","caption":"基础类库","des":"","logo":"0002.jpg","items":[{"id":"ecp.core.web.util","caption":"常用工具类","description":"","logo":"commonTool.png","support":"IE8.0+ | chrome+ | firefox+"},
						    {"id":"ecp.core.utils.hz2py","caption":"汉字转拼音工具类","description":"","logo":"hpTool.png","support":"IE8.0+ | chrome+ | firefox+"},
						    {"id":"ecp.core.web.winOpenUtil","caption":"窗口打开工具类","description":"","logo":"winOpenTool.png","support":"IE8.0+ | chrome+ | firefox+"},
						    {"id":"ecp.core.web.desUtil","caption":"加密工具类","description":"","logo":"desTools.png","support":"IE8.0+ | chrome+ | firefox+"},
						    {"id":"ecp.core.web.plugin","logo":"fuzuPlugins.png","caption":"辅助插件","support":"IE8+、Firefox28.0+ 、Chrome 26.0+","description":""},
						    {"id":"ecp.core.web.render","caption":"页面渲染工具类","description":"","logo":"fuzuPlugins.png","support":"IE8+ | FireFox21+ | Chrome28+"}]},
				    {"id":"eux_layout","caption":"布局组件","des":"","logo":"0003.jpg","items":[{"id":"ecp.web.core.layout","logo":"sgsystem.png","caption":"栅格系统","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+","description":"响应式布局"},
						    {"id":"ecp.web.core.tab","logo":"seltab.png","caption":"页签","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+","description":""}]},
				    {"id":"eux_upload","caption":"上传组件","des":"百度上传组件","logo":"importExport.png","items":[{"id":"ecp.core.web.webupload","caption":"百度上传","description":"","logo":"","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+"},
						    {"id":"ecp.core.web.uploadPanel","caption":"上传面板","description":"","logo":"","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+"},
						    {"id":"ecp.core.web.simpleupload","caption":"上传(单个项目)","description":"","logo":"","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+ "},
						    {"id":"ecp.core.web.multipleupload","caption":"附件上传（管理）","description":"","logo":"","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+ "},
						    {"id":"ecp.core.web.fzwebupload","caption":"百度上传封装","description":"","logo":"","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+  "},
						    {"id":"ecp.core.web.mutipleupload","caption":"上传(多个，面板)","description":"","logo":"","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+   "}]},
				    {"id":"eux_fromui","caption":"表单组件","des":"","logo":"0004.jpg","items":[{"id":"ecp.core.web.label","description":"","caption":"标签","support":" IE8+ | Firefox28.0+ | Chrome 26.0+ ","logo":"label.png"},
						    {"id":"ecp.core.web.input","description":"","caption":"输入框","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+ ","logo":"textinput.png"},
						    {"id":"ecp.core.web.radio","description":"","caption":"单选框","support":"IE8+,Chrome26+,Firefox28+","logo":"radio.png"},
						    {"id":"ecp.core.web.checkBox","description":"","caption":"复选框","support":"IE8+,Chrome26+,Firefox28+","logo":"checkbox.png"},
						    {"id":"ecp.core.web.formValidator","description":"","caption":"表单验证(Form Validator)","logo":"fzwin.png","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+"},
						    {"id":"ecp.core.web.datePicker","description":"","caption":"日期","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+","logo":"date.png"},
						    {"id":"ecp.core.web.textArea","description":"","caption":"多文本","support":"IE8+,Chrome26+,Firefox28+","logo":"multext.png"},
						    {"id":"ecp.core.web.UEditor","description":"","caption":"富文本","support":"IE8+,Chrome26+,Firefox28+","logo":"editText.png"},
						    {"id":"ecp.core.web.button","description":"","caption":"按钮","support":" IE8.0+ | chrome+ | firefox+","logo":"btn.png"},
						    {"id":"ecp.core.web.colorPicker","description":"","caption":"取色","support":"IE8+,Chrome26+,Firefox28+","logo":"getColor.png"},
						    {"id":"ecp.core.web.autoComplete","description":"","caption":"自动完成插件","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+ ","logo":"autoComplete.png"},
						    {"id":"ecp.core.web.styleRevise","description":"a","caption":"样式修正","logo":"cssModify.png","support":" IE8+ | Firefox28.0+ | Chrome 26.0+"},
						    {"id":"ecp.core.web.select2","caption":"下拉框","description":"","logo":"label.png","support":"IE8+,Chrome26+,Firefox28+"},
						    {"id":"ecp.core.web.dateRangePicker","caption":"组合日期","description":"组合日期控件","logo":"rangeDate.png","support":"IE8+,Chrome26+,Firefox28+"},
						    {"id":"ecp.core.web.numberBox","caption":"数字输入框","description":"","logo":"textinput.png","support":"IE8+ | Chrome26+ | Firefox28+"},
						    {"id":"ecp.core.web.ecpRangePicker","caption":"组合日期2","description":"组合日期控件","logo":"rangeDate.png","support":"IE8+ | Chrome26+ | Firefox28+"},
						    {"id":"ecp.core.web.qrcode","caption":"二维码","description":"","logo":"cssModify.png","support":" IE8+ | Firefox28.0+ | Chrome 26.0+"},
						    {"id":"ecp.core.web.validateBox","caption":"通用校验框","description":"","logo":"textinput.png","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+"},
						    {"id":"ecp.core.web.mobileDate","caption":"移动端日期","description":"滚动选择日期","logo":"date.png","support":" IE8+ | Firefox28.0+ | Chrome 26.0+"},
						    {"id":"ecp.core.web.jqmobileDate","caption":"jq mobile日期","description":"jquery mobile选择日期","logo":"date.png","support":" IE8+ | Firefox28.0+ | Chrome 26.0+ "}]},
				    {"id":"eux_grid","caption":"表格组件","des":"描述信息","logo":"0005.jpg","items":[{"id":"ecp.core.web.queryGird","caption":"查询表格","logo":"multitle_grid.png","description":"","support":"IE8+ | chrome | firefox"},
						    {"id":"ecp.core.web.editGird","caption":"编辑表格","logo":"grid.png","description":"","support":"IE8+ | chrome | firefox"},
						    {"id":"ecp.core.web.treeGrid","caption":"编辑树表格","logo":"treegrid.png","description":"","support":"IE8+ | chrome | firefox"},
						    {"id":"ecp.core.web.listGrid","caption":"折叠表格","description":"展示数据","logo":"","support":"ie8+ chrome firefox"},
						    {"id":"ecp.core.web.treeQueryGrid","caption":"查询树表格","description":"","logo":"treegrid.png","support":"IE8+、chrome、firefox"}]},
				    {"id":"eux_tree","caption":"树","des":"","logo":"0006.jpg","items":[{"id":"ecp.core.web.tree","caption":"jstree树","logo":"tree_checkbox.png","description":"基于jQuery的Tree控件","support":"Chrome 14+, Firefox 3.5+, Opera 12+, Safari 4+, IE8+"},
						    {"id":"ecp.core.web.dropdownTree","caption":"下拉树","logo":"listTree.png","description":"","support":" IE8.0+ | chrome+ | firefox+"}]},
				    {"id":"eux_chart","caption":"图表","des":"","logo":"0007.jpg","items":[{"id":"ecp.core.web.chart","caption":"echarts","logo":"tubiao.png","description":"","support":"IE6+ ,Firefox20.0+ ,Chrome 20.0+"},
						    {"id":"ecp.core.web.fusionchart","caption":"fusioncharts","description":"","logo":"tubiao.png"}]},
				    {"id":"eux_icolib","caption":"图标","des":"","logo":"0008.jpg","items":[{"id":"ecp.core.web.icon","caption":"图标库","logo":"iconStor.png","description":"","support":"IE8+ | chrome | firefox"}]},
				    {"id":"eux_window","caption":"窗口","des":"","logo":"0009.jpg","items":[{"id":"ecp.core.web.window","caption":"原生模态窗","logo":"modelWindow.png","description":"","support":"IE8+ | Firefox28.0+"},
						    {"id":"ecp.core.web.messageDialog","caption":"消息窗","logo":"infowin.png","description":"","support":"IE8+,Chrome26+,Firefox28+"},
						    {"id":"ecp.core.web.dialog","caption":"对话窗","logo":"infowin_detail.png","description":"","support":"IE8+,Chrome26+,Firefox28+"},
						    {"id":"ecp.core.web.modalWin","caption":"模态窗(bsDialog)","description":"","logo":"modelWindow.png","support":"IE8+,Chrome26+,Firefox28+"},
						    {"id":"ecp.core.web.bsWindow","caption":"模态窗(bsWindow)","description":"","logo":"modelWindow.png"},
						    {"id":"ecp.core.web.extendwindow","caption":"双屏窗口","description":"打开双屏窗口","logo":"modelWindow.png","support":"IE8+ | Firefox28.0+"},
						    {"id":"ecp.core.web.autonotify","caption":"自动消失提示窗","description":"","logo":"","support":" IE8+ | Firefox28.0+ | Chrome 26.0+"}]},
				    {"id":"eux_pagex","caption":"页面交互","des":"","logo":"0010.jpg","items":[{"id":"ecp.core.web.dataModelBind","caption":"双向绑定","description":"","logo":"datalink.png","support":"IE8+ | FireFox21+ | Chrome28+"},
						    {"id":"ecp.core.web.inputmagnifier","caption":"输入放大镜","description":"","logo":"fangdajing.png","support":"IE8+ | FireFox21+ | Chrome28+"},
						    {"id":"ecp.core.web.search","caption":"搜索组件","description":"搜索组件","logo":"","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+"},
						    {"id":"ecp.core.web.locate","caption":"定位组件","logo":"","description":"实现jstree定位","support":"IE8+ | FireFox21+ | Chrome28+"},
						    {"id":"ecp.core.web.hint","caption":"工具提示","logo":"tooltip.png","description":"","support":"IE8+ | FireFox21+ | Chrome28+"},
						    {"id":"ecp.core.web.progressBar","caption":"进度条","logo":"proess.png","description":"","support":"IE8+ | FireFox21+ | Chrome28+"},
						    {"id":"ecp.core.web.imageCarousel","caption":"图片轮播/展示","logo":"imageMovie.png","description":"","support":""},
						    {"id":"ecp.core.web.scrollspy","caption":"滚动侦测(ScrollSpy)","logo":"ScrollSpy.png","description":"","support":""},
						    {"id":"ecp.core.web.slider","caption":"滑动控件","logo":"huadong.png","description":"","support":"IE8+ | FireFox21+ | Chrome28+"},
						    {"id":"ecp.core.web.waterfallFlow","caption":"瀑布流","logo":"pubuliu.png","description":"","support":""},
						    {"id":"ecp.core.web.imageLazyloading","caption":"图片懒加载/加载监听","logo":"imageLazyLoad.png","description":"","support":""},
						    {"id":"ecp.core.web.imageTailor","caption":"图片剪裁/处理","logo":"imageCopy.png","description":"","support":""},
						    {"id":"ecp.core.web.offcancas","caption":"侧滑插件(offcancas)","logo":"offcancas.png","description":"","support":""},
						    {"id":"ecp.core.web.menu","caption":"菜单(Menu)","logo":"menu.png","description":"","support":""},
						    {"id":"ecp.core.web.scrollLoadedMore","caption":"滚动加载更多","logo":"scrollLoadmore.png","description":"","support":""},
						    {"id":"ecp.core.web.smoothScroll","caption":"平滑滚动插件(Smooth Scroll)","logo":"Smoothscroll.png","description":"","support":""},
						    {"id":"ecp.core.web.fullScreenScroll","caption":"全屏滚动","logo":"allScreenScroll.png","description":"","support":""},
						    {"id":"ecp.core.web.splitScreenScroll","caption":"分屏滚动","logo":"screenScroll.png","description":"","support":""},
						    {"id":"ecp.core.web.transitions","caption":"旋转动画","logo":"loaddh.png","description":"","support":"IE8+ | FireFox21+ | Chrome28+"},
						    {"id":"ecp.core.web.sticky","caption":"固定元素(Sticky)","logo":"fixedElement.png","description":"","support":""},
						    {"id":"ecp.core.web.touchEvent","caption":"触控事件","logo":"tartchEvent.png","description":"","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+ "},
						    {"id":"ecp.core.web.dragComponents","caption":"拖拽组件","logo":"dragComponent.png","description":"","support":""},
						    {"id":"ecp.core.web.toggle","caption":"隐藏或展示页面元素","logo":"hideOrShowElement.png","description":"","support":""},
						    {"id":"ecp.core.web.scrollBar","caption":"滚动条","logo":"scrollBar.png","description":"","support":""},
						    {"id":"ecp.core.web.parallaxScrolling","caption":"视差滚动(Parallax Scrolling)","logo":"ParallaxScrolling.png","description":"","support":""},
						    {"id":"ecp.core.web.ecpPopover","caption":"指向型提示","description":"","logo":"tooltip.png"},
						    {"id":"ecp.core.web.functionGuide","caption":"功能向导","description":"","logo":"tartchEvent.png","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+"}]},
				    {"id":"eux_templet","caption":"模板","des":"","logo":"0011.jpg","items":[{"id":"ecp.core.web.singleScreen","caption":"单屏","logo":"singlePage.png","description":""},
						    {"id":"ecp.core.web.list","caption":"列表","logo":"lists.png","description":""},
						    {"id":"ecp.core.web.query","caption":"查询","logo":"query.png","description":""},
						    {"id":"ecp.core.web.errorPage","caption":"404页面","logo":"page404.png","description":""}]},
				    {"id":"eux_tongyongzujian","caption":"通用组件","des":"","logo":"0014.jpg","items":[{"id":"ecp.core.web.treeSelect","caption":"通用树选择","description":"","logo":"treeSelect.png","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+"},
						    {"id":"ecp.core.web.combobox","caption":"通用下拉(select2封装)","description":"","logo":"commoncomboBox.png","support":" IE8+，Chrome26+，FireFox21+"},
						    {"id":"ecp.core.web.entitySelect","caption":"通用选择(树+表格)","logo":"commonSelect.png","description":"","support":" IE8+，Chrome26+，FireFox21+"},
						    {"id":"ecp.core.web.bisTreeSelect","caption":"业务树选择","description":"业务树选择","logo":"treeSelect.png","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+"},
						    {"id":"ecp.core.web.bisEntitySelect","caption":"业务选择(树+表格)","description":"","logo":"commonSelect.png","support":" IE8+，Chrome26+，FireFox21+"}]},
				    {"id":"eux_bizui","caption":"业务组件","des":"","logo":"0012.jpg","items":[{"id":"ecp.core.web.djType","caption":"单据类型","logo":"billType.png","description":""},
						    {"id":"ecp.core.web.dxType","caption":"对象类型","logo":"objectType.png","description":"","support":"IE8+ | Firefox28.0+ | Chrome 26.0+"},
						    {"id":"ecp.core.web.dxSelect","caption":"对象选择","logo":"objectSelect.png","description":"","support":" IE8+，Chrome26+，FireFox21+ "},
						    {"id":"ecp.core.web.djItem","caption":"单据项目","logo":"billItem.png","description":""},
						    {"id":"ecp.core.web.dxItem","caption":"影像系统","logo":"objectItem.png","description":""},
						    {"id":"ecp.core.web.enum","caption":"通用枚举","logo":"enum.png","description":"","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+"},
						    {"id":"ecp.core.web.flSelect","caption":"分类选择","logo":"classSelect.png","description":"","support":" IE8+，Chrome26+，FireFox21+ "},
						    {"id":"ecp.core.web.unitOrganize","caption":"组织选择","logo":"orgSelect.png","description":"","support":"IE8+，Chrome26+，FireFox21+"},
						    {"id":"ecp.core.web.userSelect","caption":"操作员选择","logo":"userSelect.png","description":"","support":" IE8+，Chrome26+，FireFox21+ "},
						    {"id":"ecp.core.web.login","caption":"登录","logo":"login.png","description":""},
						    {"id":"ecp.core.web.wfTodo","caption":"待办","logo":"todo.png","description":""},
						    {"id":"ecp.core.web.wfDone","caption":"已办","logo":"done.png","description":""},
						    {"id":"ecp.core.web.favorite","caption":"收藏夹","logo":"farvor.png","description":""},
						    {"id":"ecp.core.web.sysenum","caption":"系统枚举","description":"","logo":"enum.png","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+"}]},
				    {"id":"eux_print","caption":"打印组件","des":"打印相关组件","logo":"0013.jpg","items":[{"id":"ecp.core.web.print","caption":"打印组件2.0","description":"打印组件相关样例","logo":"print.png","support":"IE9+， Chrome,  firefox"},
						    {"id":"ecp.component.pdf.web","caption":"PDF打印组件","description":"3.0打印控件","logo":"print.png","support":"IE9+， Chrome,  firefox"}]},
				    {"id":"eux_import&export","caption":"导入导出","des":"导入导出","logo":"importExport.png","items":[{"id":"ecp.core.web.import","caption":"导入","description":"","logo":"import.png","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+ "},
						    {"id":"ecp.core.web.export","caption":"导出","description":"","logo":"export.png","support":"IE8+ ,Firefox28.0+ ,Chrome 26.0+ "}]}]
    },{
		    "caption":"模板"
    },{
		    "caption":"第三方文档"
    },{
		    "caption":"单元测试"
    },{
		    "caption":"amdconfig"
    },{
		    "caption":"自动化测试"
    }]
  }
})