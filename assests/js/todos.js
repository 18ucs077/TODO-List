$("ul").on("click", "li", function(){
       //1st method to toggle
		// if($(this).css("color") === "rgb(128, 128, 128)")
		// {  
		// 	$(this).css({
		// 		color:"black",
		//         textDecoration: "none"
		// 	})
			

		// }
		// else
		// {   $(this).css({
		// 	color:"gray",
		// 	textDecoration:"line-through"

		// });
			
		// }
		 //2nd method to toggle
		 $(this).toggleClass("completed");
	});
    
    // click on XX to delete todo
	$("ul").on("click", "span", function(event){
		//it stops execution of function speicified for ul,container,body
		$(this).parent().fadeOut(500,function(){
			$(this).remove();
		})
		event.stopPropagation();
		
	})
	$("input[type='text'").keypress(function(event){
		if(event.which === 13)
		{
			var todo = $(this).val();
			//to clear text box after adding new todo
			$(this).val("");
			$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todo + "</li>")
		}

	})
	$(".fa-pencil-square-o").click(function(){
		$("input[type='text'").fadeToggle()
	});
	// $("i").click(function(){
	// 	alert("icon clicked")
	
	
	// $("ul").click(function(){
	// 	alert("clicked ul");
	// })
	// $("#container").click(function(){
	// 	alert("clicked container");
	// })
	// $("body").click(function(){
	// 	alert("clicked body");
	// })
