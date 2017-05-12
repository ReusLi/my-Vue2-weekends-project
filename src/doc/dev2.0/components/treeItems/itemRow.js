/**
 * Created by liyishan on 2017-05-08.
 */
define(['_component', 'text!components/treeItems/itemRow.html', './itemCard'], function(component, template, itemCard) {
		return component('itemRow', {
				template: template,
				props: [
						'rowData'
				],
				components: {
						'item-card': itemCard
				},
				mounted: function () {
						// console.group('row js')
						// console.log(this.rowData)
						// console.groupEnd()
				}
		})
});