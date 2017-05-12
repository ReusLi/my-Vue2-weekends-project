/**
 * Created by liyishan on 2017-05-12.
 */
define(['_component',
		'text!components/useCase/useCaseFrame.html',
		'./useCaseCode'
	],
	function(component,
		template,
		useCaseCode) {
			return component('useCaseFrame', {
					template: template,
					data () {
							tableData: []
					},
					props: [
							'title',//组件名称
							'exampleJson'//用例html和js代码
					],
					components: {
							'use-case-code': useCaseCode
					},
					watch: {
							exampleJson: function(newVal, oldVal) {
							}
					}
			});
	});