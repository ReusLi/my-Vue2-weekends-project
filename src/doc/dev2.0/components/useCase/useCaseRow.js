/**
 * Created by liyishan on 2017-05-12.
 */
define(['_component',
		'text!components/useCase/useCaseRow.html',
		'ecp.service'
	],
	function(component,
		template,
		ecp) {
			return component('useCaseRow', {
					template: template
			});
	});