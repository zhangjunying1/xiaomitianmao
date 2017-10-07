window.onload = function(){
	let shop=$('.shop')[0];
	let mask=$('.mask')[0];
	let aside=$('aside')[0];
	let ul1=$('ul',aside)[0];
	let lis1=$('li',ul1);
	let iteams=$('.iteams');
	let navcen=$('.nav-center')[0];
	let a1=$('a',navcen);
	let uls=$('.items',navcen);
	let imgs=$('.img-list')[0];
	let imgli=$('.li-img',imgs);
	let banners=$('.banner')[0];
	let yuans=$('.yuan')[0];
	let smalls=$('.small-yuan',yuans);
	let bannerleft=$('.banner-left',banners)[0];
	let bannerright=$('.banner-right',banners)[0];
	let biaoti1=$('.biaoti1')[0];
	let biaoti6=$('.biaoti6')[0];
	let iconzuo=$('.icon-zuo',biaoti1)[0];
	let iconzuo1=$('.icon-zuo',biaoti6)[0];
	let iconyou=$('.icon-you',biaoti1)[0];
	let iconyou1=$('.icon-you',biaoti6)[0];
	let productbox=$('.productbox')[0];
	let tuijianmain=$('.tuijian-main')[0];
	let productboxli=$('li',productbox);
	let neitu=document.querySelectorAll('.neirong2 .box');
	let neitu1=document.querySelectorAll('.neirong2 .box1');
	let neitu2=document.querySelectorAll('.neirong2 .box2');
	let neitu3=document.querySelectorAll('.neirong2 .box3');
	let neirl=document.querySelectorAll('.neirong2 .icon .iconleft');
	let neirr=document.querySelectorAll('.neirong2 .icon .iconright');
	let yuan1=document.querySelectorAll('.neirong2 .yuan11 .yuan1');
	let yuan2=document.querySelectorAll('.neirong2 .yuan12 .yuan1');
	let yuan3=document.querySelectorAll('.neirong2 .yuan13 .yuan1');
	let yuan4=document.querySelectorAll('.neirong2 .yuan14 .yuan1');

	shop.onmouseover=function(){
		mask.style.display='block';
	}
	shop.onmouseout=function(){
		mask.style.display='none';
	}

	//头部点击下拉出现框
	for(let i=0;i<a1.length;i++){
		a1[i].onmouseover=function(){
			uls[i].style.display='block';
		}
		a1[i].onmouseout=function(){
			uls[i].style.display='none';
		}
	}
	let W=(productboxli[0].offsetWidth+parseInt(getComputedStyle(productboxli[0],null).marginRight
		))*5;

	let now=0,now1=0,now2=0,now3=0,now4=0;
	let next=0,next1=0,next2=0,next3=0,next4=0;
	let flag = true; 
	let n=0;


	//小米明星单品的右滑，左滑
	iconzuo.onclick=function(){	
		if(n==1){
			iconzuo.style.color='#e6e2e0';
			return;
		}
		n++;
		productbox.style.transform=`translateX(-${n*W}px)`;
		iconzuo.style.color='#ff6700';
	}
	iconyou.onclick=function(){
		if(n==0){
			iconyou.style.color='#e6e2e0';
			return;
		}
		n--;
		productbox.style.transform=`translateX(${n*W}px)`;
		iconyou.style.color='#ff6700';
	}
	//小米明星单品自动的右滑，左滑
	let t1=setInterval(fn,300);
	function fn(){
		productbox.style.transform=`translateX(-${n*W}px)`;
	}

	//左右边小箭头鼠标点击移入效果
	bannerleft.onclick=function(){
		if(!flag){
			return;
		}
		movel();
		flag=false;
	}
	bannerright.onclick=function(){
		if(!flag){
			return;
		}	
		move();
		flag=false;
	}
	neirl[0].onclick=function(){
		if(!flag){
			return;
		}
		movel1();
		flag=false;
	}
	neirr[0].onclick=function(){
		if(!flag){
			return;
		}	
		move1();
		flag=false;
	}
	neirl[1].onclick=function(){
		// if(!flag){
		// 	return;
		// }
		movel2();
		flag=false;
	}
	neirr[1].onclick=function(){
		if(!flag){
			return;
		}	
		move2();
		flag=false;
	}
	neirl[2].onclick=function(){
		if(!flag){
			return;
		}
		movel3();
		flag=false;
	}
	neirr[2].onclick=function(){
		if(!flag){
			return;
		}	
		move3();
		flag=false;
	}
	neirl[3].onclick=function(){
		if(!flag){
			return;
		}
		movel4();
		flag=false;
	}
	neirr[3].onclick=function(){
		if(!flag){
			return;
		}	
		move4();
		flag=false;
	}
	//自动改变banner图片
	let t=setInterval(move,3000);
	let num=0;
	let imgW=parseInt(getComputedStyle(imgs,null).width);
	let neituW=parseInt(getComputedStyle(neitu[0],null).width);
	console.log(neituW)
	function move(){
		next++;
		if(next==imgli.length){
	 		next=0;
	 	}
	 	smalls[now].style.background='rgba(0, 0, 0, 0.4)';
		smalls[next].style.background='white';
	 	imgli[next].style.left=`${imgW}px`;
	 	animate(imgli[now],{left:-imgW});
	 	animate(imgli[next],{left:0},function(){
	 		flag=true;
	 	});
	 	now=next;
	}
	function movel(){
		next--;
		if(next<0){
	 		next=imgli.length-1;
	 	}
	 	smalls[now].style.background='rgba(0, 0, 0, 0.4)';
		smalls[next].style.background='white';
	 	imgli[next].style.left=`${-imgW}px`;
	 	animate(imgli[now],{left:imgW});
	 	animate(imgli[next],{left:0},function(){
	 		flag=true;
	 	});
	 	now=next;
	}
	function move1(){
		next1++;
		if(next1==neitu.length){
	 		next1=0;
	 	}
	 	yuan1[now1].style.background='#b0b0b0';
	 	yuan1[now1].style.border='none';
		yuan1[next1].style.border='2px solid #ff6700';
		yuan1[next1].style.background='#fff';
	 	neitu[next1].style.left=`${neituW}px`;
	 	animate(neitu[now1],{left:0});
	 	animate(neitu[next1],{left:-neituW},function(){
	 		flag1=true;
	 	});
	 	now1=next1;
	}
	function movel1(){
		next1--;
		if(next1<0){
	 		next1=neitu.length-1;
	 	}
	 	yuan1[now1].style.background='#b0b0b0';
		yuan1[next1].style.border='2px solid #ff6700';
		yuan1[now1].style.border='none';
		yuan1[next1].style.background='#fff';
	 	neitu[next1].style.left=`${-neituW}px`;
	 	animate(neitu[now1],{left:0});
	 	animate(neitu[next1],{left:neituW},function(){
	 		flag1=true;
	 	});
	 	now1=next1;
	}
	function move2(){
		next2++;
		if(next2==neitu1.length){
	 		next2=0;
	 	}

	 	yuan2[now2].style.background='#b0b0b0';
	 	yuan2[now2].style.border='none';
		yuan2[next2].style.border='2px solid #ff6700';
		yuan2[next2].style.background='#fff';
	 	neitu1[next2].style.left=`${neituW}px`;
	 	animate(neitu1[now2],{left:-neituW});
	 	animate(neitu1[next2],{left:0},function(){
	 		flag1=true;
	 	});
	 	now2=next2;
	 	console.log(neitu1[next2]);
	}
	function movel2(){
		next2--;
		if(next2<0){
	 		next2=neitu1.length-1;
	 	}
	 	yuan2[now2].style.background='#b0b0b0';
		yuan2[next2].style.border='2px solid #ff6700';
		yuan2[now2].style.border='none';
		yuan2[next2].style.background='#fff';
	 	neitu1[next2].style.left=`${-neituW}px`;
	 	animate(neitu1[now2],{left:neituW});
	 	animate(neitu1[next2],{left:0},function(){
	 		flag1=true;
	 	});
	 	now2=next2;
	}
	function move3(){
		next3++;
		if(next3==neitu2.length){
	 		next3=0;
	 	}
	 	yuan3[now3].style.background='#b0b0b0';
	 	yuan3[now3].style.border='none';
		yuan3[next3].style.border='2px solid #ff6700';
		yuan3[next3].style.background='#fff';
	 	neitu2[next3].style.left=`${neituW}px`;
	 	animate(neitu2[now3],{left:-neituW});
	 	animate(neitu2[next3],{left:0},function(){
	 		flag1=true;
	 	});
	 	now3=next3;
	}
	function movel3(){
		next3--;
		if(next3<0){
	 		next3=neitu2.length-1;
	 	}
	 	yuan3[now3].style.background='#b0b0b0';
		yuan3[next3].style.border='2px solid #ff6700';
		yuan3[now3].style.border='none';
		yuan3[next3].style.background='#fff';
	 	neitu2[next3].style.left=`${-neituW}px`;
	 	animate(neitu2[now3],{left:neituW});
	 	animate(neitu2[next3],{left:0},function(){
	 		flag1=true;
	 	});
	 	now3=next3;
	}
	function move4(){
		next4++;
		if(next4==neitu3.length){
	 		next4=0;
	 	}
	 	yuan4[now4].style.background='#b0b0b0';
	 	yuan4[now4].style.border='none';
		yuan4[next4].style.border='2px solid #ff6700';
		yuan4[next4].style.background='#fff';
	 	neitu3[next4].style.left=`${neituW}px`;
	 	animate(neitu3[now4],{left:-neituW});
	 	animate(neitu3[next4],{left:0},function(){
	 		flag1=true;
	 	});
	 	now4=next4;
	}
	function movel4(){
		next4--;
		if(next4<0){
	 		next4=neitu3.length-1;
	 	}
	 	yuan4[now4].style.background='#b0b0b0';
		yuan4[next4].style.border='2px solid #ff6700';
		yuan4[now4].style.border='none';
		yuan4[next4].style.background='#fff';
	 	neitu3[next4].style.left=`${-neituW}px`;
	 	animate(neitu3[now4],{left:neituW});
	 	animate(neitu3[next4],{left:0},function(){
	 		flag1=true;
	 	});
	 	now4=next4;
	}
	

	//点击小圆改变banner图片
	for(let i=0;i<smalls.length;i++){
		smalls[i].onclick=function(){
			if(now==i){
				return;
			}	
			imgli[i].style.left=`${imgW}px`;
	 		animate(imgli[now],{left:-imgW});
	 		animate(imgli[i],{left:0});
	 		smalls[now].style.background='rgba(0, 0, 0, 0.4)';
			smalls[i].style.background='white';
			now=next=i;
		}				
	}
	
	//鼠标进入banner，图片停止滚动
	banners.onmouseover=function(){
		clearInterval(t);
	}
	banners.onmouseout=function(){
		t=setInterval(move,3000);
	}

	//侧导航的鼠标移入的效果
	for(let i=0;i<lis1.length;i++){
		lis1[i].onmouseover=function(){
			iteams[i].style.display='block';
			// animate(iteams[i],{opacity:1});
		}
		lis1[i].onmouseout=function(){
			iteams[i].style.display='none';
			// animate(iteams[i],{opacity:0});
		}
	}

	//为你推荐的右滑，左滑
	iconzuo1.onclick=function(){	
		if(n==1){
			iconzuo1.style.color='#e6e2e0';
			return;
		}
		n++;
		tuijianmain.style.transform=`translateX(-${n*W}px)`;
		iconzuo1.style.color='#ff6700';
	}
	iconyou1.onclick=function(){
		if(n==0){
			iconyou1.style.color='#e6e2e0';
			return;
		}
		n--;
		tuijianmain.style.transform=`translateX(${n*W}px)`;
		iconyou1.style.color='#ff6700';
	}
	

	
	
}