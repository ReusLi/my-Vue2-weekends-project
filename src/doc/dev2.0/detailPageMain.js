/**
 * Created by liyishan on 2017-05-08.
 */
define(['ecp.service',
				'ecp.utils',
				'text!./pageTemplate/detailPageTemplate.html',
				'./common/__component__',
				'./components/header/header',
				'./components/useCase/useCaseFrame',
				'./components/useCase/useCaseTree',
				'qzz.codeview'
		],
		function (ecp,
		          utils,
		          template,//模板
		          component,
		          headerMenu,//公共头部
		          useCaseFrame,//左边展示用例
		          useCaseTree,//右边用例导航树
		          codeView) {
				return component('Main', {
						template: template,
						data() {
								return {
										typeId: utils.getArguments('typeId'),
										prevId: utils.getArguments('prev'),
										logo: utils.getArguments('logo'),
										//tableJson.root.json
										title: '',
										tableData: [],
										exampleJson: [],
										navTree: []
								}
						},
						components: {
								'header-menu': headerMenu,
								'use-case-frame': useCaseFrame,
								'use-case-tree': useCaseTree
						},
						created: function () {
								var that = this;
								this.__getData('getDoc', this.typeId, function (result) {
										var component = result.data;
										if (component.hasExampleIndex == null) {
												component = refreshExampleIndex(component);
										}
										// that.component = data;
										that.doRender(component);
								})
						},
						methods: {
								__getData: function (methods, id, callBack, index, restr) {
										var that = this
										var cat = "[@CUT]";
										var rs = new ecp.Remote("com.ygsoft.ecp.core.web.doc.IDocHelpContext");
										var pref = "";
										if (index == null) {
												index = 0;
										}
										if (restr == null) {
												restr = "";
										}
										if (index > 0) {
												pref = "_" + index;
										}
										var params = [id + pref];
										rs.doGetAsync(methods, params, function (results) {
												var cstr = results.data;
												if (typeof cstr == "string") {
														var ci = cstr.indexOf(cat);
														if (ci >= 0) {
																restr += cstr.substr(1, ci - 1);
																that.__getData(methods, id, callBack, index + 1, restr);
														} else {
																restr += cstr.substr(1, cstr.length);
																if (restr != null && restr !== "") {
																		results.data = $.parseJSON(restr);
																}
																if (typeof callBack == "function") {
																		callBack(results);
																}
														}
												} else {
														if (typeof callBack == "function") {
																callBack(results);
														}
												}
										});
								},
								doRender: function (component) {
										this.title = component.caption
										var tmpNavTree = [],
												navTreeLabel = ['用例', '属性', '方法', '事件', '注意事项', '问题反馈'];
										var example = component.example;
										example = example.filter(function (item) {
												if (isFilter = item.html === "" && item.js === "") {
														return false;
												} else {
														item.label = item.title;
														item.offset = 'codeView' + item.index;
														return true;
												}
										})
										navTreeLabel.each(function (lab) {
												tmpNavTree.push({
														label: lab
												})
										});
										tmpNavTree[0].child = example;
										this.navTree = tmpNavTree;
										this.exampleJson = tmpNavTree[0].child;
										// var code = component.example[3];
										// $("#jsCode").qzzcodeview({"code":code.js.replace(/\\n/ig,"\n").replace(/</g, "&lt;").replace(/>/g,"&gt;")});
								}
						}
				});
		}
)
;