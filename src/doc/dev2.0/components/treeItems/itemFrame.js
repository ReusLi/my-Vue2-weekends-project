/**
 * Created by liyishan on 2017-05-08.
 */
define(['_component',
				'text!components/treeItems/itemFrame.html',
				'./itemRow',
				'ecp.utils.des'],
		function (component,
		          template,
		          itemRow,
		          des) {
				return component('itemFrame', {
						template: template,
						props: [
								'frameData'
						],
						data () {
								return {}
						},
						watch: {
								frameData: function(newVal, oldVal) {
										console.log('oldVal = ' + JSON.stringify(oldVal))
										console.log('newVal =  ' + JSON.stringify(newVal))
								}
						},
						components: {
								'itemRow': itemRow
						},
						mounted: function () {
								// console.group('frame js')
								// console.log(this.frameData)
								// console.groupEnd()
						}
						// beforeUpdate: function () {
						// 		var curContents = this.frameData.child
						// 		if (curContents) {
						// 				curContents.each(function (cur) {
						// 						console.log(cur)
						// 						// $("#" + des.doEncrypt(curContent.id)).addClass("active");
						// 						var itemsArr = cur
						// 						if (itemsArr.items.length > 0) {
						// 								itemsArr.items.each(function (item, i) {
						// 										if (item.support) {
						// 												console.log('in')
						// 												itemsArr.items.unshift(itemsArr.items.splice(i, 1)[0]);
						// 										}
						// 								})
						// 						}
						// 				})
						// 		}
						// }
				})
		});