  var bottomX;
  var bottomY;
  var topA;
  var topB;

function plateau(x,y,a,b){
  bottomX = parseInt(x);
  bottomY = parseInt(y);
  topA = parseInt(a);
  topB = parseInt(b);

  console.log("The Plateau" + " " + bottomX + " "  + bottomY + " " + topA + " " + topB);
};

plateau.prototype.getPlateau = function()
{
	return "The Plateau is " + topA + " by " + topB + " in size!";
};