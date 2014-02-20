function startMove(obj,json,times,fx,fn){
	
	var iCur = {};
	
	var startTime = now();
	
	for(var attr in json){
		iCur[attr] = 0;
		if(attr == 'opacity'){
			
			iCur[attr] = Math.round(getStyle(obj,attr)*100);
			
		}
		else{
			
			iCur[attr] = parseInt(getStyle(obj,attr));
			
		}
	}
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		
		var changeTime = now();
		
		var scale = 1 -  Math.max(0,startTime  -  changeTime + times)/times ; //1000 - 0  ->  1 - 0  -> 0 - 1
		
		for(var attr in json){
			
			var value = Tween[fx]( scale*times ,iCur[attr] , json[attr] - iCur[attr] , times );
			
			if(attr == 'opacity'){
				
				obj.style.filter = 'alpha(opacity='+value+')';
				obj.style.opacity = value/100;
				
			}
			else{
				
				obj.style[attr] = parseInt(value) + 'px';
				
			}
			
		}
		
		if(scale == 1){
			clearInterval(obj.timer);
			if(fn){
				fn.call(obj);
			}
		}
		
	},13);
	
	
	function now(){
		
		return (new Date()).getTime();
		
	}
	
	
}

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
}


var Tween = {
	
	linear: function (t, b, c, d){  //匀速
		return c*t/d + b;
	}
}


function slider_fade(obj,title){
	if(!obj){
		return;
	}
	var obj = document.getElementById(obj);
	var oTitle=document.getElementById(title);
	var sTitle=oTitle.getElementsByTagName('span')[0];
	var iNum=oTitle.getElementsByTagName('span')[1];
	var aLi = obj.getElementsByTagName('li');
	var len = aLi.length;
	var index = 1;
	var timer = null;
	obj.onmouseover=function(){
		clearInterval(timer);
	}
	obj.onmouseout=function(){
		timer=setInterval(tab,3000);
	}
	function tab(){
		oTitle.style.height=0;
		for(var i = 0;i<len;i++){
			aLi[i].style.zIndex=0;
			aLi[i].style.opacity=0;
			aLi[i].style.filter="alpha(opacity=0)";
		}
		aLi[index].style.zIndex=1;
		startMove(aLi[index],{opacity:100},2000,"linear",function(){
			index++;
			if(index>=len){
				index=0;
			}
		});	
		startMove(oTitle,{height:30},300,"linear");
		sTitle.innerHTML = aLi[index].getElementsByTagName('img')[0].title;
		iNum.innerHTML = (index+1)+'/'+len;
	}
	timer=setInterval(tab,3000);	
}

function slider_slide(wrap,obj){
	if(!obj){
		return;
	}
	var obj = document.getElementById(obj);
	var aLi = obj.getElementsByTagName('li');
	var iLength = aLi.length;   //li的总个数
	var index = 0;  //当前索引，用于计数
	var iNow = 0;  //索引，用于无缝滚动
	var speed=parseInt(aLi[0].offsetWidth);  //一个li的宽度
	var timer = null;
	var curNum= Math.round(document.getElementById(wrap).offsetWidth/aLi[0].offsetWidth);  //当前容器显示书本数目
	var iTimes = Math.floor(iLength/curNum);
	var flag = Math.ceil(iLength%curNum);

	setInterval(function(){
		curNum = Math.round(document.getElementById(wrap).offsetWidth/aLi[0].offsetWidth);		
		iTimes = Math.floor(iLength/curNum);
		flag = Math.ceil(iLength%curNum);
	},1000);

	obj.style.width=parseInt(aLi[0].offsetWidth)*iLength+'px';

	obj.onmouseover=function(){
		clearInterval(timer);
	};

	obj.onmouseout=function(){
		timer=setInterval(slide,6000);
	};

	function slide(){
		if(iNow==iTimes){		
			iNow=0;	
			for(var i=0;i<curNum;i++){
				aLi[i].style.position='relative';
				aLi[i].style.left= aLi[0].offsetWidth*(iLength+i)+'px'; 
			}
		}else{
			iNow++;
		}

		index++;

		if(flag !=0 && index == iTimes ){
			startMove(obj,{left:-speed*((index-1)*curNum+flag)},1000,"linear",function(){		
				if(iNow==0){
						for(var i=0;i<curNum;i++){
							aLi[i].style.position='static';
						}
						obj.style.left=0;	
						index=0;
				}
			});
		}else{			
			startMove(obj,{left:-index*speed*curNum},1000,"linear",function(){				
				if(iNow==0){
						for(var i=0;i<curNum;i++){
							aLi[i].style.position='static';
						}
						obj.style.left=0;	
						index=0;	
				}
			});
		}
	};
	timer=setInterval(slide,6000);
}

function popup_dialog(){
	
	var cDiv=document.createElement('div');

	/*创建遮罩层*/
	var oDiv=cDiv.cloneNode(false);
	oDiv.className="popup";
	oDiv.id="popup";

	/*创建遮罩层的内容显示区域*/
	var oDialog=cDiv.cloneNode(false);
	oDialog.className="popup_dialog";
	oDialog.id="popup_dialog";

	document.body.appendChild(oDiv);
	document.body.appendChild(oDialog);
}

function show(obj){
	var oDialog=document.getElementById('popup_dialog');

	oDialog.style.width=0;
	oDialog.style.height='5px';
	oDialog.style.marginLeft=0;
	oDialog.style.marginTop=0;

	startMove(oDialog,{width:500,marginLeft:-250},2000,'linear',function(){
		startMove(oDialog,{height:300,marginTop:-150},2000,'linear',function(){
			oDialog.innerHTML="<p>"+obj+"</p>";
			var oClose=document.createElement('div');
			oClose.className="popup_close";
			oClose.id="popup_close";
			oClose.innerHTML="关闭";
			oClose.onclick=function(){
				var oPop=document.getElementById('popup');
				oDialog.removeChild(oClose);
				oDialog.innerHTML="";
				startMove(oDialog,{height:2,marginTop:0},2000,'linear',function(){
					startMove(oDialog,{width:0,marginLeft:0},2000,'linear',function(){
						document.body.removeChild(oDialog);
						document.body.removeChild(oPop);
					});	
				});
			};
			oDialog.appendChild(oClose);
		});
	});	
};


