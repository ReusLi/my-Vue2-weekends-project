/**
 * Created by liyishan on 2017-05-08.
 */
define(['./common/__component__',
				'text!./pageTemplate/indexPageTemplate.html',
				'./components/header/header',
				'./components/tree/tree',
				'./components/treeItems/itemFrame'
		],
		function (component,
		          template,
		          headerMenu,
		          tree,
		          itemFrame) {
				return component('Main', {
						data() {
								return {
										treeItemData: {}
								}
						},
						template: template,
						components: {
								'header-menu': headerMenu,
								'tree': tree,
								'item-frame': itemFrame
						},
						methods: {
								renderTreeItem: function (data, hasChild) {
										var tmpData = {
												child: []
										}
										if (typeof data.children === 'undefined') {
												tmpData.child.push(data)
										} else {
												tmpData = data
												tmpData.child = data.children
										}
										this.treeItemData = tmpData
										// console.log(this.treeItemData)
								}
						}
				});
		}
);