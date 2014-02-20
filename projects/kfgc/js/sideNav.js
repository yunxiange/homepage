// JavaScript Document

$(document).ready(function(){
	$(".sns>ul>li").each(function(){
		$(this).addClass("snsNormal");
	 });
	$(".sns>ul>li").mouseover(function(){
		$(this).removeClass("snsNormal");
		$(this).addClass("snsActive");
	 });
	$(".sns>ul>li").mouseout(function(){					  
		$(this).removeClass("snsActive");
		$(this).addClass("snsNormal");
	 });
	$(".sns>ul>li").find("ul").prev().mouseover(function(){
		$(this).next().toggle(1000);
	 });
	$(".sns>ul>li:has(ul)").find("ul").hide();
 });