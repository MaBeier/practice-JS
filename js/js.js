/*function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}*/


function byId(id){
	if(typeof(id)==="string")
		return document.getElementById(id);
}


var time={},
	index=0,
	tt=byId('tt').getElementsByTagName('li'),
	tu=byId('banner').getElementsByClassName('tu'),
	len=tu.length;
	
function img(){

	var cover=byId("cover");

cover.onmouseover=function(){
	if(time){
		clearTimeout(time);
		// console.log('timeover',time);
	}
	for(var d=0;d<len;d++){
		    tt[d].id=d;
			tt[d].onmouseover=function(){
			index=this.id;
			changeImg();
		}
	}

	}
	// console.log("timeover123;",time)


cover.onmouseout=function(){
	time = setInterval(function(){
		index++;	
		if(index>=len){
			index=0;
		}
		changeImg();
	},1000);
/*	console.log("time",time) /*定时器启动几次*/
}
cover.onmouseout();
}


function changeImg(){
	for (var i = 0; i < len; i++) {
		tu[i].style.display="none";
		tt[i].style.background="";

	}
	tu[index].style.display="block";
	tt[index].style.background="#ffcc00";

	
}


img();