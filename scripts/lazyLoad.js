function lazy_load(c){if(!c){return}var d=document.getElementById(c).getElementsByTagName("li");for(var b=0,a=d.length;b<a;b++){(function(h){var j=d[h].getElementsByTagName("img")[0];var e=j.src;var g=/(\/s\/)/g;if(g.test(e)){var k=new Image();var f=e.replace(g,"/n/");k.src=f;k.onload=function(){j.src=f;k=null}}})(b)}};