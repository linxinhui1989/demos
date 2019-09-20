$(()=>{
	//点击发表按扭，发表内容
	$("span.submit").click(function () {
		let id = $(".tucao").eq(0).data('id');
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
			url:"/add_article_comment",
			type:"post",
			data:{
				msg:txt,
				nickname:nickname,
				time,
				id
			},
			success:function(res){
				if(res.success){
					showNotice("评论成功");
					// getAllComments();
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

	/*发送请求，获取得到所需的对应的评论列表*/
	getAllComments(0,5);
	function getAllComments(startNum,num){
		let id = $(".tucao").eq(0).data('id');
		$.ajax({
			url:"/getArticleComments",
			data:{
				startNum:startNum,
				num:num,
				id:id
			},
			success:function(res){
				$('.load').hide();
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
				$("#comments ul").append(str);
			}
		})
	}
	
	/*点击查看更多*/
	$(".see-more").on("click",function(){
		$(".see-more").hide();
		$('.load').show();
		setTimeout(()=>{
			getAllComments(5,15);
			$('.other-comment-page').css({"display":"block"});
		},1000)
	});

	addBrowse();
	/*发送请求，对于当前文章访问量的修改*/
	function addBrowse(){
		let id = $(".tucao").eq(0).data('id');
		$.ajax({
			url:"/add_browse",
			data:{
				id:id
			},
			type:"post",
			success:function(res){}
		});
	}
})