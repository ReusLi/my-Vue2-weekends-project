/**
 * Created by liyishan on 2017-05-08.
 */
define(['_component', 'text!components/tree/tree.html','../../json/doc/tree'], function(component, template, treeJson) {

		return component('tree', {
				template: template,
				data () {
						return {
								treeData: treeJson.root.json,
								defaultProps: {
										children: 'children',
										label: 'caption'
								}
						}
				},
				methods: {
						treeItemClick (data) {
								this.$emit('add', data)
						}
				}
		})
});