
var validDirection = ["N", "S", "E", "W"]

createPlateau(0,0,5,5);

createRover(1,2,"N");

function createPlateau(x,y,a,b){
  var bottomX = x;
  var bottomY = y;
  var topA = a;
  var topB = b;

  console.log("The Plateau" + " " + bottomX + " "  + bottomY + " " + topA + " " + topB)
}

function createRover(x,y,d){
  var x = x;
  var y = y;
  var direction;

  //Valiade the direction input
	if ( $.inArray(d, validDirection) == -1)
		console.log("Not a valid direction")
	else
		direction = d;
		console.log("Lets start exploring with" + " " + x + " " + y + " " + direction )

}




