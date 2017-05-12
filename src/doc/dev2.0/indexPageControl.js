/**
 * Created by liyishan on 2017-05-05.
 */
require.config({
		paths: {
				"ELEMENT": "./lib/element-ui.min",
				"vue": "./lib/vue.min",
				"_component": "./common/__component__"
		}
});
require(['vue', 'ELEMENT', './indexPageMain'],
		function (Vue, ELEMENT, Main) {
				Vue.use(ELEMENT);
				new Vue({
						el: '#app',
						template: '<Main/>',
						components: {
								'Main': Main
						}
				})
		}
);