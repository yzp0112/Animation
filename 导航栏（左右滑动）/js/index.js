$(function(){
	var $nav_list = $(".nav-list");
	var $nav_list_list = $(".nav-list li");
	//获取sessionStorage中的值
	$nav_list.css("left",sessionStorage.left+"px");
	$nav_list_list.each(function(){
		if($(this).find("a").text() === sessionStorage.pagecount){
			$(this).addClass("nav-detail").siblings().removeClass("nav-detail");
			navName(sessionStorage.pagecount);
			return false;
		}else{
			$nav_list_list.eq(0).addClass("nav-detail").siblings().removeClass("nav-detail");
		}
	});
	//点击选项自动左右滑动 
	var $liW = $nav_list_list.first().width();
	var $navlist = $(".nav-list").width();
	var $navfirst = $(".nav-first").width();
	$nav_list_list.on('click',function(){
		$liW = $(this).width();
		$(this).addClass("nav-detail").siblings().removeClass("nav-detail");
		var $navW = ($(".nav").width() - $liW) / 2;
		var navL;
		var nav_x = parseInt($(this).position().left);
		if(nav_x <= $navW){
			navL = 0;
		}else if($navW - nav_x <= $navfirst - $navlist){
			navL = $navfirst - $navlist;
		}else{
			navL = $navW - nav_x;
		}
		$nav_list.animate({"left":navL},300);
		sessionStorage.left = navL;
		var c_nav = $(this).find("a").text();
		navName(c_nav);
	});
	//左右滑动
	$nav_list.on("touchstart",function(event){
		var touchS = event.originalEvent.targetTouches[0];
		xS = touchS.pageX;
		yS = touchS.pageY;
		ty_left = parseInt($(this).css("left"))
	});
	$nav_list.on("touchmove",function(event){
		var touchE = event.originalEvent.targetTouches[0];
		var xE = touchE.pageX;
		var yE = touchE.pageY;
		if(ty_left + xE - xS >= 0){
			$(this).css("left",0);
		}else if(ty_left + xE - xS<=$navfirst-$navlist){
			$(this).css("left", $navfirst-$navlist);
        }else{
            $(this).css("left", ty_left + xE - xS);
        }
        if(Math.abs(yE - yS) > 0){event.preventDefault();} 
	})
});
function navName(c_nav) {
    switch (c_nav) {
        case "第1项":
            sessionStorage.pagecount = "第1项";
            break;
        case "第2项":
            sessionStorage.pagecount = "第2项";
            break;
        case "第3项":
            sessionStorage.pagecount = "第3项";
            break;
        case "第4项":
            sessionStorage.pagecount = "第4项";
            break;
        case "第5项":
            sessionStorage.pagecount = "第5项";
            break;
        case "第6项":
            sessionStorage.pagecount = "第6项";
            break;
        case "第7项":
            sessionStorage.pagecount = "第7项";
            break;
        case "第8项":
            sessionStorage.pagecount = "第8项";
            break;
        case "第9项":
            sessionStorage.pagecount = "第9项";
            break;
    }
}