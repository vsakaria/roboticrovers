$(function() {

	var rover1, rover2;

	$("#plateau").click(function(e)
	{
		createPlateau(0,0,$("input#x").val(), $("input#y").val());
	});

	$("#rover1button").click(function(e)
	{
		rover1 = new rover($("input#rover1X").val(), $("input#rover1Y").val(), $("#rover1Compass").val());
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
	});

});


function createPlateau(x,y,a,b){
	var bottomX = x;
	var bottomY = y;
	var topA = a;
	var topB = b;

	console.log("The Plateau" + " " + bottomX + " "  + bottomY + " " + topA + " " + topB);
}







