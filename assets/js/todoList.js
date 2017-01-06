// Check Off Specific Todos by Clicking
$("li").on("click", function(){
	$(this).toggleClass("completed");
});

// Delete Specific Todos by Clicking X
$("span").on("click", function(event){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();	
	});
	event.stopPropagation();
});