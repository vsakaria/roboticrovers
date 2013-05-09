createPlateau(0,0,5,5);

var input = "LMLMLMLMM";

var rover1 = new rover(1,2,"N");

for( var i = 0, len = input.length; i < len; i++)
{
	if (input[i] == "R" || input[i] == "L")
		rover1.turnRover(input[i]);
	else
		rover1.moveRover();
};


function createPlateau(x,y,a,b){
	var bottomX = x;
	var bottomY = y;
	var topA = a;
	var topB = b;

	console.log("The Plateau" + " " + bottomX + " "  + bottomY + " " + topA + " " + topB);
}







