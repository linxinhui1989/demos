$(()=>{
	let id = $("#tab li").eq(0).data('id');

	getPics(id);

	function getPics(id){
		$.ajax({
			url:"/getPics",
			type:"get",
			data:{
				id:id
			},
			success:function(res){
				console.log(res)
				if(res.length<0){return;}
				let str = "";
				let item1 = res[0];
				str +='<li>';
		          str +='<i>';
		            str +='<a href="2.html" target="_blank">';
		              str +='<img src="'+item1.img_src+'" alt="'+item1.title+'" />';
		              str +=item1.title;
		            str +='</a>';
		          str +='</i>';
		          str +='<h2>';
		            str +='<a href="2.html" target="_blank">';
		              str +=item1.title;
		            str +='</a>';
		          str +='</h2>';
		        str +='</li>';
		        for(let i=1;i<res.length;i++){
		        	str +='<li>';
			          str +='<i>';
			            str +='<a href="6.html" target="_blank">';
			              str +='<img src="'+res[i].img_src+'" alt="6月13日的晚餐" />';
			              str +=res[i].title;
			            str +='</a>';
			          str +='</i>';
			          str +='<h2>';
			            str +='<a href="6.html" target="_blank">';
			              str +=res[i].title;
			            str +='</a>';
			          str +='</h2>';
			        str +='</li>';
		        }
		        $("#tab-content .pic-list-img ul").html(str);
			}
		})
	}
	

	$("#tab li").on("click",function(){
		let id = $(this).data('id');
		getPics(id);
	})
})