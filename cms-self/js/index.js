$(function(){
	$("#shouye").click(function(){
		$("#body-right").load("pages/shouye.html",{},function(){

		});
	});
	$("#lanmu").click(function(){
		$("#body-right").load("pages/lanmu.html",{},function(){

		});
	});
	$("#zixun").click(function(){
		$("#body-right").load("pages/zixun.html",{},function(){

		});
	});
	$("#user").click(function(){
		$("#body-right").load("pages/user.html",{},function(){
			
		});
	});
	$("#shouye").trigger('click');
});