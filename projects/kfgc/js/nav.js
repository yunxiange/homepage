// JavaScript Document
	$(document).ready(function(){
	  $(".nav ul li a").mouseover(function(){
		$(".nav ul li a").attr("class","");
		$("#"+this.id).attr("class","current");
		var curNum=this.id;
		$(".mlist").each(function(){
			$(this).hide();
			$(".sub"+curNum).show();
		});
	});
  });