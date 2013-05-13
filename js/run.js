$(function() {

	var
	 rover1, rover2, plateau1;

	$("#plateau").click(function(e)
	{
		plateau1 = new plateau(0,0,$("input#x").val(),$("input#y").val());
		$('h3#plateau_result').html(plateau1.getPlateau());
	});

	
	$("form.rover").submit(function(e)
	{
		e.preventDefault();
		
		var data = $(this).data('rover')

		eval("var " + data + " = new rover()");
		debugger;

		// rover = new rover($("input#roverX").val(), $("input#roverY").val(), $("#roverCompass").val());
		// 	$("h3#rover_result").html(rover1.getBearings());	
	});

	$("#roverDirectionsButton").click(function(e)
	{
		var inputStr = $('#roverDirections').val();

		for( var i = 0, len = inputStr.length; i < len; i++)
		{
			if (inputStr[i] == "R" || inputStr[i] == "L")
				rover1.turnRover(inputStr[i]);
			else
				rover1.moveRover();
		}
		$("h3#rover_dir_result").html(rover1.getBearings());
	});

});


// function createPlateau(x,y,a,b){
// 	var bottomX = parseInt(x);
// 	var bottomY = parseInt(y);
// 	var topA = parseInt(a);
// 	var topB = parseInt(b);

// 	console.log("The Plateau" + " " + bottomX + " "  + bottomY + " " + topA + " " + topB);
// 	return "The Plateau is " + topA + " by " + topB + " in size!";
// }







