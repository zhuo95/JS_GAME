$("ul").on("click" , "li", function(){
	$(this).toggleClass("done");
});

$("ul").on("click","li span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("#add").keypress(function(event){
	if(event.which===13){
		var newText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span>"+ newText +"</li>");
	}
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});