$(()=>{
	$(".item").on("click",function(){
		/*
		通过点击 iframe 页面上的元素，实现对于 index.html页面上元素的属性
		(这个iframe是套在index.html页面上的) 
		*/
		let audio = window.parent.document.getElementById("music-audio");
		let lrcText = window.parent.document.getElementById("lrc-text");
		audio.src = "/musics/gbqq.mp3";
		lrcText.innerHTML = `[ti:告白气球]
							[ar:周杰伦]
							[al:周杰伦的床边故事]
							[offset:0]

							[00:00.98]告白气球
							[00:04.19]词：方文山
							[00:06.29]曲：周杰伦
							[00:07.78]演唱：周杰伦
							[00:17.78]
							[00:23.65]塞纳河畔 左岸的咖啡
							[00:26.45]我手一杯 品尝你的美
							[00:28.94]
							[00:29.49]留下唇印的嘴
							[00:31.89]
							[00:34.42]花店玫瑰 名字写错谁
							[00:37.18]告白气球 风吹到对街
							[00:40.18]微笑在天上飞
							[00:42.59]
							[00:44.27]你说你有点难追 想让我知难而退
							[00:49.40]礼物不需挑最贵 只要香榭的落叶
							[00:54.67]喔 营造浪漫的约会 不害怕搞砸一切
							[01:00.01]拥有你就拥有 全世界
							[01:04.15]
							[01:05.13]亲爱的 爱上你 从那天起
							[01:11.48]甜蜜的很轻易
							[01:14.59]
							[01:15.70]亲爱的 别任性 你的眼睛
							[01:21.36]
							[01:22.08]在说我愿意
							[01:25.42]
							[01:49.14]塞纳河畔 左岸的咖啡
							[01:51.72]我手一杯 品尝你的美
							[01:54.20]
							[01:54.87]留下唇印的嘴
							[01:57.31]
							[01:59.81]花店玫瑰 名字写错谁
							[02:02.39]告白气球 风吹到对街
							[02:04.70]
							[02:05.44]微笑在天上飞
							[02:07.99]
							[02:09.61]你说你有点难追 想让我知难而退
							[02:14.78]礼物不需挑最贵 只要香榭的落叶
							[02:19.65]
							[02:20.18]喔 营造浪漫的约会 不害怕搞砸一切
							[02:25.40]拥有你就拥有 全世界
							[02:29.42]
							[02:30.46]亲爱的 爱上你 从那天起
							[02:36.87]甜蜜的很轻易
							[02:39.98]
							[02:41.01]亲爱的 别任性 你的眼睛
							[02:46.74]
							[02:47.33]在说我愿意
							[02:51.16]
							[02:51.85]亲爱的 爱上你 恋爱日记
							[02:57.46]
							[02:58.06]飘香水的回忆
							[03:01.49]
							[03:02.42]一整瓶 的梦境 全都有你
							[03:08.11]
							[03:08.82]搅拌在一起
							[03:12.29]
							[03:13.16]亲爱的别任性 你的眼睛
							[03:20.01]
							[03:21.37]在说我愿意
`
	});
});