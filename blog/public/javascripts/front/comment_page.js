$(function(){
	/*发送请求，获取得到所需的对应的评论列表*/
	getAllComments();
	function getAllComments(startNum,num){
		$.ajax({
			url:"/getComments",
			data:{
				startNum:startNum,
				num:num
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
				$("#comments ul").html(str);
				tabPage({
				    pageMain: '#comments',
				    pageNav: '#pageNav',
				    pagePrev: '#prev',
				    pageNext: '#next',
				    curNum: 7, /*每页显示的条数*/
				    activeClass: 'active', /*高亮显示的class*/
				    ini: 0/*初始化显示的页面*/
				});
			}
		})
	}
});
