window.onload = function(){
	let daohang=document.getElementsByClassName('cedaohang');
	let ul1=daohang[0].getElementsByTagName('ul')[0];
	let lis1=ul1.getElementsByTagName('li');
	let items=document.getElementsByClassName('item');
	let bottom=document.getElementsByClassName('bottom-list');
	let lis2=bottom[0].getElementsByTagName('li');
	let imgs=document.getElementsByClassName('img-list');
	let lis3=imgs[0].getElementsByTagName('li');
	let big=document.getElementsByClassName('bigg')[0];
	let search=document.querySelector('.search');
	let di=document.querySelector('.main-right>.li0>.di1');
	let t1=document.querySelector('.main-right>.li0>.t');
	let tuiconright=document.querySelector('.tuiconright');
	let tuiconleft=document.querySelector('.tuiconleft');
	let xiaotu=document.querySelector('.tu1-left-center');
	this.arr=['#e8e8e8','#251345','#7829d0','#e8e8e8','#110c4e','#fea0a4'];
	let its=document.querySelectorAll('.aside1 .its');
	let icons=document.querySelectorAll('.aside1 .icon1');
	let windowW = window.innerHeight; 
	let top=document.querySelector('.icon .icon-huidaodingbu');

	// 侧导航鼠标移入效果
	for(let i=0;i<icons.length;i++){
		icons[i].onmouseover=function(){
			its[i].style.display='block';
		}
		icons[i].onmouseout=function(){
			its[i].style.display='none';
		}
	}

	top.onclick=function(){
		animate(window,{top:0});
	}


	di.onmouseover=function(){
		t1.style.display='block';
		di.style.background='#fff';
	}
	di.onmouseout=function(){
		t1.style.display='none';
		di.style.background='#f2f2f2';
	}

	let next1=0,now1=0;
	tuiconright.onclick=function(){
			if(next1==1){
				return;
			}
        	next1++;
        	xiaotu.style.transform=`translateX(-500px)`;
       		now1=next1; 
	}
	tuiconleft.onclick=function(){
		if(next1==0){
			return;
		}
		if(next1>0){
       		next1--;
			xiaotu.style.transform=`translateX(0px)`;
       		now1=next1;
       }  
	}
	
	//当下拉高度大于等于浏览器高度时显示搜索框  
    window.onscroll = function(){
    	let scrH = document.body.scrollTop;
    	if(scrH>=windowW){
     		search.style.top = '0';
    	}else{
      		search.style.top = '-50px';
    	}
    }

	//自动改变banner图片
	let t=setInterval(move, 5000);
	let num=0;
	function move(){
		num++;
		if(num==lis3.length){
			num=0;
			// imgs[0].style.background=this.arr[0];
		}
		for(let i=0;i<lis3.length;i++){
			lis3[i].style.display='none';
			imgs[0].style.background=this.arr[i];
			lis2[i].style.background='rgba(0, 0, 0, 0.4)';
					
		}
		lis3[num].style.display='block';
		lis2[num].style.background='white';
		imgs[0].style.background=this.arr[num];
	}
 
	//鼠标进入banner，图片停止滚动
	big.onmouseover=function(){
		clearInterval(t);
	}
	big.onmouseout=function(){
		t=setInterval(move,3000);
	}

	//点击轮波改变banner图片
	for(let i=0;i<lis2.length;i++){
		lis2[i].onclick=function(){
			for(let j=0;j<lis3.length;j++){
				lis3[j].style.display='none';
				imgs[0].style.background=this.arr[j];
				lis2[j].style.background='rgba(0, 0, 0, 0.4)';
			}
			lis3[i].style.display='block';
			imgs[0].style.background=this.arr[i];
			lis2[i].style.background='white';
			num=i;
		}				
	}

	//侧导航的鼠标移入的效果
	for(let i=0;i<lis1.length;i++){
		lis1[i].onmouseover=function(){
			items[i].style.display='block';
		}
		lis1[i].onmouseout=function(){
			items[i].style.display='none';
		}
	}

}