$(function(){
	let musicAudio = document.querySelector("#music-audio")
	let isFirst = true;
	let startOffset = parseInt($(".lyrics").css("height")) / 2 - 20;
	/*点击音乐播放*/
	$(".play").on("click",function(){
		if(musicAudio.paused){
			if(isFirst){
				musicPlay(musicAudio)
				isFirst = false
			}else{
				musicContinue(musicAudio)
			}
			$(".play").attr("src","/images/pause.png")
			rotate()
		}else{
			musicPause(musicAudio);
			$(".play").attr("src","/images/play.png")
			stopRotate()
		}
	});

	/*点击滑块上实现音乐播放*/
	$(".progress .prog").on("click",function(e){
		let offset = parseInt(e.offsetX)
		let duration = parseInt(musicAudio.duration)
		let allLen = parseInt($(".progress .prog").css("width"))
		let currentTime = parseInt(duration*offset / allLen)
		console.log("currentTime = " + currentTime)
		musicAudio.currentTime = currentTime
		update(currentTime)
	});

	/*对于进度的更新*/
	musicAudio.ontimeupdate = function(){
		console.log("更新中..." + musicAudio.currentTime)
		update();
	}

	musicAudio.addEventListener("play",function(){
		showLrc();
	})

	/*关于播放模式的控制*/
	let playModel = 0;
	let imgLst = ["/images/single_repeat.png","/images/random.png","/images/sequence.png"]
	$(".play_model").on("click",function(){
		playModel++
		playModel %= imgLst.length
		$(".play_model").attr("src",imgLst[playModel])
	})

	/*实现黑胶唱片的运动*/
	function rotate(){
		// 先要使得 正在播放音乐的 iframe 上的元素属性发生变化
		let gan = document.getElementById('music_content').contentWindow.document.getElementsByClassName('gan')[0]; 
		let pan = document.getElementById('music_content').contentWindow.document.getElementsByClassName('pan')[0]; 
		$(gan).css({
			"animation":"mymove 1s",
			"animation-fill-mode": "forwards"
		});
		gan.addEventListener("webkitAnimationEnd", function() {
		   // 设置盘的转动
			$(pan).css({
				"animation":"panmove 6s",
				"animation-iteration-count": "infinite",
				"animation-timing-function": "linear"
			});
		})
	}
	
	/*停止黑胶唱片*/
	function stopRotate(){
		// 先要使得 正在播放音乐的 iframe 上的元素属性发生变化
		let gan = document.getElementById('music_content')
		.contentWindow.document.getElementsByClassName('gan')[0]; 
		let pan = document.getElementById('music_content').contentWindow.document.getElementsByClassName('pan')[0]; 
		$(gan).css({
			"animation":"stoprotate 1s",
			"animation-fill-mode": "forwards"
		});
		gan.addEventListener("webkitAnimationEnd", function() {
			let r = $(pan).css("transform");
			$(pan).css({
				"animation":"",
				"transform":r
			});
		})
	}

	function update(current){
		// 对于音乐的实时监听
		duration = parseInt(musicAudio.duration)
		// 获取得到音乐播放的当前时间
		let currentTime = current || parseInt(musicAudio.currentTime)
		let allLen = parseInt($(".progress .prog").css("width"))
		let len = parseInt(allLen*currentTime/duration)
		$(".progress .bar").css({left:len})
		$(".progress .current_prog").css({width:len})
		// 使得指定行的歌词变亮色
		let currentLi = $(".lyrics .lrc").find('li[time="'+currentTime+'"]');
		if(currentLi.length == 0){return}
		currentLi.addClass("active")
			.siblings('li[time!="'+currentTime+'"]').removeClass("active");
		// 使得 #lrc 进行向上滚动滚动
		let top = startOffset + parseInt($(".lyrics .lrc").offset().top)
			 - parseInt(currentLi.offset().top);
		$(".lyrics .lrc").animate({
			top:top
		},"slow");
	}

	/*音乐的播放*/
	function musicPlay(){
		console.log("重新加载音乐");
		musicAudio.load()// 重新加载音乐
		let duration
		musicAudio.oncanplay = function(){
			console.log("musicAudio.paused = " + musicAudio.paused);
			console.log("播放音乐11");
			if(musicAudio.paused){
				musicAudio.play()
			}
			// 播放时，获取音乐的总时间
			duration = parseInt(musicAudio.duration)
			$(".all-time").html(timeFormat(duration))
		}
	}

	/*音乐暂停*/
	function musicPause(audio){
		audio.pause()
	}

	/*音乐继续*/
	function musicContinue(audio){
		audio.play()
	}

	/*音乐播放进度的格式*/
	function timeFormat(time){
		let min = parseInt(time/60)
		let sec = time%60
		min = min>10?min:("0"+min)
		sec = sec>10?sec:("0"+sec)
		return min+":"+sec
	}
	
	/*歌词显示*/
	function showLrc(){
		let lrcList = [];
		$(".lyrics .lrc").html("");
		let textArea = document.querySelector("#lrc-text");
		let txt = textArea.innerHTML;
		let lrcs = txt.split("\n");
		lrcs.forEach(function(item){
			// 正则表达式
			let reg = /\[(\d{2}):(\d{2})\.(\d{2})\](.{0,})/;
			let str = item.replace(reg,"$4");
			let result = reg.exec(item);
			if(result!=null){
				let time = parseInt(result[1])*60 + parseInt(result[2]);
				lrcList.push({
					time:time,
					msg:result[4]
				});
			}
		});
		let str = "";
		// 通过字符串拼接，来实现歌词的显示
		for(let i=0;i<lrcList.length;i++){
			str += '<li time="'+lrcList[i].time+'">'+lrcList[i].msg+'</li>'
		}
		$(".lyrics .lrc").html(str);
		$(".lyrics .lrc").css({
			top:startOffset
		});
	}
})