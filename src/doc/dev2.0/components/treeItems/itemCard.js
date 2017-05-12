/**
 * Created by liyishan on 2017-05-08.
 */
define(['_component',
		'text!components/treeItems/itemCard.html',
		'ecp.service'
	],
	function(component,
		template,
		ecp) {
		return component('itemCard', {
			template: template,
			data() {
				return {
					ywApi: "http://10.52.2.48:9080/grm/ecp/component/bizcontrol/doc/index.html",
					ywURL: ["ecp.core.web.unitOrganize", "ecp.core.web.userSelect", "ecp.core.web.flSelect", "ecp.core.web.dxType", "ecp.core.web.dxSelect", "ecp.core.web.sysenum", "ecp.core.web.enum"]
				}
			},
			props: [
				'colData',
				'pid'
			],
			//组件的跳转href属性
			created: function() {},
			// destroyed: function () {
			// 		this.colData.id = ''
			// },
			methods: {
				showDetailPage: function() {
					var href = 'detailPage.html';
					href += '?typeId=' + this.colData.id;
					href += '&prev=' + this.pid;
					href += '&logo=' + this.colData.logo;
					if (href) {
						for (var i = 0, len = this.ywURL.length; i < len; i++) {
							if (href.indexOf("ecp.core.web.icon") >= 0) {
								href = "/ecp/doc/icon.html";
								break;
							}
							if (href.indexOf(this.ywURL[i]) >= 0) {
								href = this.ywApi;
								break;
							}
						}
						window.open(href);
					}
				}
			}
		});
	});