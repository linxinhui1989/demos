$(()=>{
	tabPage({
	    pageMain: '#blogs-list',
	    pageNav: '#pageNav',
	    pagePrev: '#prev',
	    pageNext: '#next',
	    curNum: 6, /*每页显示的条数*/
	    activeClass: 'active', /*高亮显示的class*/
	    ini: 0/*初始化显示的页面*/
	});
})