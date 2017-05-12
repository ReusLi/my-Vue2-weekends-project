/**
 * Created by liyishan on 2017-05-12.
 */
define(['_component',
				'text!components/useCase/useCaseTree.html',
				'ecp.service'
		],
		function (component,
		          template,
		          ecp) {
				return component('useCaseTree', {
						template: template,
						data () {
								return {
										defaultProps: {
												children: 'child',
												label: 'label'
										}
								}
						},
						props: [
								'navTree'
						],
						watch: {
								navTreess: function(newVal, oldVal) {
										console.log('oldVal = ' + oldVal)
										console.log('newVal =  ' + newVal)
								}
						},
						methods: {
								navClick: function (data, selfNode, pNode) {
										// $('.is-current').css({
										// 		'font-weight': 'bold',
										// 		'color': 'green'
										// })
										var offset = selfNode.data.offset;
										if (!offset)
												return;
										// location.href = '#'+offset;
										$('html, body').animate({
												scrollTop: $('a[name=' + offset + ']').offset().top
										}, {
												duration: 200,
												easing: "swing"
										});
										// console.log(selfNode)
										// var itemTitleArr = $('.itemTitle');
								},
								scrollToTop: function () {
										$('html,body').animate({scrollTop: '0px'}, 200);
								},
								renderContent: function (h, {node, data, store}) {
										var abc = h('a', {
												attrs: {
														class: 'detailTreeText',
														href: '#' + node.data.offset
												}
										}, [node.label])
										return h('span', {
												attrs: {
														class: 'detailTreeText',
												}
										}, [abc]);
								}
						}
				});
		});