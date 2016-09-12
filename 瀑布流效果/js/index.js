window.onload = function(){
	imgLocation("container","box")
     var imgData = {"data":[{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"}]};
	// 监听滚动条(实现自动加载数据)
	window.onscroll = function(){
		if(checkFlog()){
			var cparent = document.getElementById("container");
			for(var i=0;i<imgData.data.length;i++){
				var ccontent = document.createElement("div");
				ccontent.className = "box";
				cparent.appendChild(ccontent);
				var boximg = document.createElement("div");
				boximg.className = "box_img";
				ccontent.appendChild(boximg);
				var img = document.createElement("img");
				img.src = "images/"+imgData.data[i].src;
				boximg.appendChild(img);
			}
			imgLocation("container","box");
		};
	}
}
function checkFlog(){
	// 得到最后一张图片
	var cparent = document.getElementById("container");
	var ccontent = getChildElement(cparent,"box");
	var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;//最后一张图片据顶部的高度
    //谷歌浏览器支持document.body.scrollTop。
	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
	var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;
	if(lastContentHeight<scrollTop+pageHeight){
		return true;
	}
}

function imgLocation(parent,content){
	//将parent(父级控件)下多有的content全部取出
	var cparent = document.getElementById(parent);
	var ccontent = getChildElement(cparent,content);
	var imgWidth = ccontent[0].offsetWidth;
	var num = Math.floor(document.documentElement.clientWidth/imgWidth);
	cparent.style.cssText = "width:"+imgWidth*num+"px;margin:0 auto";

	var BoxHeightArr = [];
	for(var i=0;i<ccontent.length;i++){
		if(i<num){
			BoxHeightArr[i] = ccontent[i].offsetHeight;
		}else{
			var minHeight = Math.min.apply(null,BoxHeightArr);
			var minIndex = getminheightLocation(BoxHeightArr,minHeight);
			ccontent[i].style.position = "absolute";
			ccontent[i].style.top = minHeight+"px";
			ccontent[i].style.left = ccontent[minIndex].offsetLeft+"px";
			BoxHeightArr[minIndex] = BoxHeightArr[minIndex]+ccontent[i].offsetHeight;
		}
	}
}
function getminheightLocation(BoxHeightArr,minHeight){
	for(var i in BoxHeightArr){
		if(BoxHeightArr[i] == minHeight){
			return i;
		}
	}
}

function getChildElement(parent,content){
	var contentArr=[];
	var allcontent=parent.getElementsByTagName("*");
	for(var i = 0;i<allcontent.length;i++){
		if(allcontent[i].className==content){
			contentArr.push(allcontent[i])
		}
	}
	return contentArr;
}