var direction = ["N", "E", "S", "W"];

function rover(x,y,roverDirection){
	this.x = x;
	this.y = y;

	//Valiade the direction input
	this.directionNumber = $.inArray(roverDirection, direction);

	if (this.directionNumber == -1)
		console.log("Not a valid direction");
	else
		this.roverDirection = direction[this.directionNumber];
		console.log("Lets start exploring with" + " " + x + " " + y + " " + this.roverDirection);
}


rover.prototype.turnRover = function(input){

	if (input == "R")
	{
		if (this.directionNumber == direction.length - 1)
		{
			this.roverDirection = direction[this.directionNumber = 0];
		}
		else
		{
			this.roverDirection = direction[this.directionNumber + 1];
			this.directionNumber += 1;
		}
	}

	if (input == "L")
	{
		if (this.directionNumber === 0 )
		{
			this.roverDirection = direction[direction.length - 1];
			this.directionNumber = direction.length - 1;
		}
		else
		{
			this.roverDirection = direction[this.directionNumber - 1];
			this.directionNumber -= 1;
		}
	}
		console.log("Rover turned to" + " " + this.x + " " + this.y + " " + this.roverDirection);
};

rover.prototype.moveRover = function()
{
	if(this.roverDirection == "N")
		this.y += 1;
	if(this.roverDirection == "E")
		this.x += 1;
	if(this.roverDirection == "S")
		this.y -= 1;
		if(this.roverDirection == "W")
		this.x -= 1;

	console.log("Rover moved to" + " " + this.x + " " + this.y + " " + this.roverDirection);
};