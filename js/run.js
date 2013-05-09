$(function() {

	var rover1, rover2, plateau1;

	$("#plateau").click(function(e)
	{
		plateau1 = new plateau(0,0,$("input#x").val(),$("input#y").val());
		$('h3#plateau_result').html(plateau1.getPlateau());
	});

	$("#rover1button").click(function(e)
	{
		rover1 = new rover($("input#rover1X").val(), $("input#rover1Y").val(), $("#rover1Compass").val());
			$("h3#rover1_result").html(rover1.getBearings());
	});

	$("#rover1DirectionsButton").click(function(e)
	{
		var inputStr = $('#rover1Directions').val();

		for( var i = 0, len = inputStr.length; i < len; i++)
		{
			if (inputStr[i] == "R" || inputStr[i] == "L")
				rover1.turnRover(inputStr[i]);
			else
				rover1.moveRover();
		}
		$("h3#rover1_dir_result").html(rover1.getBearings());
	});

	$("#rover2button").click(function(e)
	{
		rover1 = new rover($("input#rover2X").val(), $("input#rover2Y").val(), $("#rover2Compass").val());
			$("h3#rover2_result").html(rover1.getBearings());
	});

	$("#rover2DirectionsButton").click(function(e)
	{
		var inputStr = $('#rover2Directions').val();

		for( var i = 0, len = inputStr.length; i < len; i++)
		{
			if (inputStr[i] == "R" || inputStr[i] == "L")
				rover1.turnRover(inputStr[i]);
			else
				rover1.moveRover();
		}
		$("h3#rover2_dir_result").html(rover1.getBearings());
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







