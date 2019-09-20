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


	
});