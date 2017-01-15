// Check Off Specific Todos by Clicking
// "li" in on() below means that "when an li is clicked from within the ul, run the function"
// this is done so that the listener is added to the entire ul--that way, when new li's are added, they are included in the listener
// if we had simply written the line below with $("li"),  new li's added by the user would miss being assigned a listener
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Delete Specific Todos by Clicking X
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(400, function(){
		// remove todo 
		$(this).remove();	
	});
	// stop bubbling of click event
	event.stopPropagation();
});

// Add New Todo from Text Input
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// get new todo text
		var newTodo = $(this).val();
		// clear text input
		$(this).val("");
		// append newTodo to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i> </span>" + newTodo + "</li>");
	}
});

// Toggle input When Clicking the Plus
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});