/**
 * Created by liyishan on 2017-05-12.
 */
define(['_component',
				'text!components/useCase/useCaseCode.html'
		],
		function (component,
		          template) {
				return component('useCaseCode', {
						template: template,
						data() {
								return {
										activeName: '1'
								};
						},
						props: [
							'code'
						],
						mounted: function () {
								$(this.$refs.htmlCode).qzzcodeview({"code":this.code.html.replace(/\\n/ig,"\n").replace(/</g, "&lt;").replace(/>/g,"&gt;")});
								$(this.$refs.jsCode).qzzcodeview({"code":this.code.js.replace(/\\n/ig,"\n").replace(/</g, "&lt;").replace(/>/g,"&gt;")});
								$(this.$refs.pp).trigger('change');
								$(this.$refs.htmlCode).trigger('change');
						},
						updated: function () {
								$(this.$refs.pp).trigger('change');
								$(this.$refs.htmlCode).trigger('change');
						},
						watch: {
								code: function(newVal, oldVal) {
								}
						}
				})
		});