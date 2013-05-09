createPlateau(0,0,5,5);

var rover1 = new rover(3,3,"E");

rover1.moveRover();
rover1.moveRover();
rover1.turnRover("R");
rover1.moveRover();
rover1.moveRover();
rover1.turnRover("R");
rover1.moveRover();
rover1.turnRover("R");
rover1.turnRover("R");
rover1.moveRover();





// rover1.turnRover("L");
// rover1.moveRover();
// rover1.turnRover("R");
// rover1.moveRover();
// rover1.turnRover("L");
// rover1.moveRover();
// rover1.moveRover();


function createPlateau(x,y,a,b){
	var bottomX = x;
	var bottomY = y;
	var topA = a;
	var topB = b;

	console.log("The Plateau" + " " + bottomX + " "  + bottomY + " " + topA + " " + topB);
}







