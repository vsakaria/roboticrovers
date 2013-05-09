var compass = ["N", "E", "S", "W"];

function rover(x,y,roverDirection){
	this.x = parseInt(x);
	this.y = parseInt(y);

	//Valiade the compass input
	this.compassNumber = $.inArray(roverDirection, compass);

	if (this.compassNumber == -1)
		console.log("Not a valid Compass Direction");
	else
		this.roverDirection = compass[this.compassNumber];

		console.log("Lets start exploring with" + " " + x + " " + y + " " + this.roverDirection);
}


rover.prototype.turnRover = function(input){

	if (input == "R")
	{
		if (this.compassNumber == compass.length - 1)
		{
			this.roverDirection = compass[this.compassNumber = 0];
		}
		else
		{
			this.roverDirection = compass[this.compassNumber + 1];
			this.compassNumber += 1;
		}
	}

	if (input == "L")
	{
		if (this.compassNumber === 0 )
		{
			this.roverDirection = compass[compass.length - 1];
			this.compassNumber = compass.length - 1;
		}
		else
		{
			this.roverDirection = compass[this.compassNumber - 1];
			this.compassNumber -= 1;
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

