//下拉
var box1 = document.getElementById('box1')
var list1 = box1.getElementsByTagName('li')
for(i = 2; i < list1.length; i++) {
	list1[i].index = i
	list1[i].off = false
	list1[i].onclick = function() {
		if(this.off == false) {
			for(i = 2; i < list1.length; i++) {

				var div = list1[i].getElementsByTagName('div')

				div[0].style.display = 'none'
			}
			var div = this.getElementsByTagName('div')
			div[0].style.display = 'block'
			this.off = true
			window.event ? window.event.cancelBubble = true : e.stopPropagation();
		} else {
			var div = this.getElementsByTagName('div')
			div[0].style.display = 'none'
			this.off = false
		}
	}

}
document.onclick = function() {
	for(i = 2; i < list1.length; i++) {
		var div = list1[i].getElementsByTagName('div')
		div[0].style.display = 'none'
		this.off = false
	}
}

//移入移出
var box2=document.getElementById('box2')
var list2=getClass(document,'fl2')

for(i=0;i<list2.length;i++){
	list2[i].onmouseover=function(){
		var ul=this.getElementsByTagName('ul') 
		
		ul[0].style.display ='block'
	}
	list2[i].onmouseout=function(){
		var ul=this.getElementsByTagName('ul') 
		ul[0].style.display='none'
		
	}
}


//轮播图
function a(){
	
var pic=document.getElementById('pic')

var lis=pic.children
var dian=getClass(document,'dian')[0]
var dlis=dian.children
 var oLeft = parseInt(getCss(lis[0],"width"))
 var timer=null
 var nr3=document.getElementById('nr3')
	var num=0;
	var iNum1=0
	pic.innerHTML+=pic.innerHTML;
	pic.style.width = lis[0].offsetWidth*lis.length+'px';
for(i=0;i<dlis.length;i++){
	dlis[i].index=i
	
	dlis[i].onclick=function(){
		for(i=0;i<dlis.length;i++){
			dlis[i].className=''		
		}		  
		dlis[this.index].className='active'
		iNum1=this.index;
		animate(pic,{'left':-oLeft*this.index})
		
	}	
}
		
		timer=setInterval(function(){
			iNum1++;
				if(iNum1==dlis.length){
					iNum1=0;
				}
				for(var i=0;i<dlis.length;i++){
					dlis[i].className='';
				}
				
				dlis[iNum1].className='active';
			num++
			if(num==lis.length/2+1){
				pic.style.left=0;
				num=1
			}
			animate(pic,{'left':-oLeft*num})
		},1000)
		nr3.onmouseover=function(){
			clearInterval(timer)
		}
		nr3.onmouseout=function(){
			timer=setInterval(function(){
			iNum1++;
				if(iNum1==dlis.length){
					iNum1=0;
				}
				for(var i=0;i<dlis.length;i++){
					dlis[i].className='';
				}
				
				dlis[iNum1].className='active';
			num++
			if(num==lis.length/2+1){
				pic.style.left=0;
				num=1
			}
			animate(pic,{'left':-oLeft*num})
		},1000)
		}
		}
a()

//选项卡
var group=document.getElementById('group')
var liss=group.children
var cont=getClass(document,'cont')
for(var i=0;i<liss.length; i++){
		
		liss[i].index=i;
		liss[i].onclick=function(){
			for(var i=0;i<liss.length; i++){
				liss[i].className="";	
				cont[i].style.display="none";
			};
			this.className="ared";
			cont[this.index].style.display="block";
			
		}
	}

//返回顶部

function go(){
	var oBtn = document.getElementById('gotop')
	var oTop = 0;
	var timer=null;
	var off=true;
			window.onscroll=function(){
				oTop = document.documentElement.scrollTop || document.body.scrollTop;
				
				if(oTop>400){
					oBtn.style.display='block'
				}else{
					oBtn.style.display='none'
				};
				
				if(!off){
					clearInterval(timer)
				}
				off=false;
				
			};
			
			oBtn.onclick=function(){
				timer=setInterval(function(){
					var backTop = Math.floor(oTop/7);
					if(backTop == 0){
						clearInterval(timer)
					}else{
						if(document.documentElement.scrollTop){
							document.documentElement.scrollTop-=backTop
						}else{document.body.scrollTop-=backTop;
						}
					off=true;
						
					}

				},30)
				
			}

}
go()



