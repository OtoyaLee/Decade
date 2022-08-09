module.exports = {
	title: '音也时馆1号分馆',
	description: '不在沉默中爆发，就在沉默中灭亡',
	base: '/',
	dest: '/dist',
	head:[
		['link',{rel: 'icon',href:'/assets/img/logo.png'}]
	],
	markdown:{
		lineNumbers:true,
	},
	themeConfig: {
		logo:'/assets/img/logo.png',
		smoothScroll: true,
		lastUpdated: '上次更新',
		displayAllHeaders: true,
		nav: [
			{ text: '主页',link: '/'},
			{
				text: '文章',
				items: [
					{text: 'handbook',link:'/handbook/'},
					{text: 'Code',link:'/Code/'},
					{text: 'Exp',link:'/Exp/'},
					{text: 'Tools',link:'/Tools/'},
				]
			},
			{ text: '关于',link: '/about'},
			{ text: '主站',link: 'https://otimeum.ba7jcm.live/'},
		],
		sidebar:{
			'/handbook/':[
				'',
				'Arduino',
				'AE',
				'UID',
				'Illustrator'
			],
			'/Code/':[
				'',
				'C',
				'Java',
				'Python'
			],
			'/Exp/':[
				'',
				'PBL'
			],
			'/Tools/':[
				'',
				'Potplayer',
			],
			'/':[
				'',
				'about',
				'about1'
			]
		}
	},
	plugins:[
		[
			'dynamic-title',
			{
				showText:'always climax',
				hideText:'你好谢谢小笼包再见！',
				recoveryTime:2000,
			}
		],
		[
			'meting',
			{
				meting:{
					server: 'netease',
					type: 'playlist',
					mid: '7313858080',
				},
				aplayer:{
					lrcType: 3,
				}
			}
		]
	]
}
