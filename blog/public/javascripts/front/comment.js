$(function(){
	//从缓存中获取数据并渲染
	let msgBoxList = JSON.parse(window.localStorage.getItem('msgBoxList')) || [];
	innerHTMl(msgBoxList)

	//点击小图片，显示表情
	$(".bq").click(function (e) {
		$(".face").slideDown(50); //慢慢向下展开
		e.stopPropagation(); //阻止冒泡事件
	});

	//在桌面任意地方点击，关闭表情框
	$(document).click(function () {
		$(".face").slideUp(50); //慢慢向上收
	});

	//点击小图标时，添加功能
	$(".face ul li").click(function () {
		let simg = $(this).find("img").clone();
		$(".message").append(simg); //将表情添加到输入框
	});

	//点击发表按扭，发表内容
	$("span.submit").click(function () {
		let nickname = $(".nickname").val();
		if(nickname == "" || nickname == undefined){
			showNotice("请输入昵称");
			return;
		}
		let txt = $(".message").html(); //获取输入框内容

		if (!txt) {
			showNotice("请输入评论内容");
			$('.message').focus(); //自动获取焦点
			return;
		}
		// 此时发送 ajax 请求，将评论的内容以及昵称，评论时间保存到数据表中
		let time = (new Date()).toLocaleString();
		$.ajax({
			url:"/addComment",
			type:"post",
			data:{
				msg:txt,
				nickname:nickname,
				time
			},
			success:function(res){
				if(res.success){
					showNotice("评论成功");
					getAllComments();
				}
			}
		});
		$('.message').html('') // 清空输入框
	});

	function showNotice(msg){
		$(".pl-showinfo").html(msg)
		$(".pl-showinfo").fadeIn();
		setTimeout(()=>{
			$(".pl-showinfo").fadeOut();
		},1000);
	}

	//删除当前数据
	$("body").on('click', '.del', function () {
		let index = $(this).parent().parent().index();
		msgBoxList.splice(index, 1)
		window.localStorage.setItem('msgBoxList', JSON.stringify(msgBoxList)) //将数据保存到缓存
		$(this).parent().parent().remove()
	})

	//渲染html
	function innerHTMl(List) {
		List = List || []
		List.forEach(item => {
			let str =
				`<div class='msgBox'>
					<div class="headUrl">
						<img src='images/tx.jpg' width='50' height='50'/>
						<div>
							<span class="title">木林森里没有木</span>
							<span class="time">2018-01-01</span>
						</div>
						<a class="del">删除</a>
					</div>
					<div class='msgTxt'>
						${item.msg}
					</div>
				</div>`
			$(".msgCon").prepend(str);
		})
	}


	/*发送请求，获取得到所需的对应的评论列表*/
	getAllComments();
	function getAllComments(){
		$.ajax({
			url:"/getComments",
			success:function(res){
				// $("#comments ul")
				let str = "";
				for(var i in res){
					let data = res[i];
					str +='<li>';
		              str +='<div class="info">';
		                 str +='<p class="nickname">'+data.nickname+'</p>';
		                 str +='<p class="time">'+data.time+'</p>';
		              str +='</div>';
		              str +='<div class="comment-msg">'+data.msg+'</div>';
		            str +='</li>';
				}
				$("#comments ul").html(str);
			}
		})
	}
	
});