// // var pics=document.querySelectorAll('.tu');
// // var time;
// // var idx=0;
// // var li=document.querySelectorAll('li');




// // function delCls(e,cls){
// // 	var baseCls=getAttribute('class');
// // 	if(baseCls.indexOf('active')!=1){

// // 	}
// // }

// function int(){

// var pics=document.querySelectorAll('.tu');
// var time;
// var idx=0;
// var li=document.querySelectorAll('li');
// var cover=document.querySelector('#cover');

// function pics_over(i){
// 	var j=i;console.log('j',j);
// 	li[j].onmouseover=function(){
// 		idx=j;
// 		imgChange();
// 	}	
// }

// function imgChange(idx){console.log('imgChange');
// 	for(var i=0;i<pics.length;i++){
// 		pics[i].style.display='none';
// 		li[i].style.background="";
// 	}
// 	pics[idx].style.display='block';
// 	li[idx].style.background="#ffcc00";
// }


// cover.onmouseover=function(){console.log('over');
// 	if(time){
// 		clearTimeout(time);
// 		//console.log('timeover',time);
// 		}
// 	for(var i=0;i<li.length;i++){
// 	pics_over(i);
// 	}
// }


// cover.onmouseout=function(){console.log('out');
// 	time=setInterval(function(){
// 		console.log('timeout',time);
// 		idx++;
// 		if(idx>=pics.length){
// 			idx=0;
// 		}
// 		imgChange(idx);
// 	},2000);
// }



// }

// int();
// //pics.onmouseover();
// //pics.onmouseout();


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