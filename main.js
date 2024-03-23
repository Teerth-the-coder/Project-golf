canvas = new fabric.Canvas("myCanvas");
// Create canvas variable

//Set initial positions for ball and hole images.
ballX = 10;
ballY = 10;

holeX = 800;
holeY = 400;

HoleObj = "";
ballObj = "";


block_image_width = 5;
block_image_height = 5;

function load_img() {
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png", function (img) {
		HoleObj = img;
		HoleObj.scaleToWidth(50);
		HoleObj.scaleToHeight(50);
		HoleObj.set(
			{
				top: holeY, left: holeX
			}
		)
		canvas.add(HoleObj)
	})
	new_image();
}

function new_image() {
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png", function (img) {
		ballObj = img;
		ballObj.scaleToWidth(50);
		ballObj.scaleToHeight(50);
		ballObj.set(
			{
				top: ballY, left: ballX
			}
		)
		canvas.add(ballObj);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And if coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if (ballX == holeX && ballY == holeY) {
		document.getElementById("hd3"). innerHTML = `you Won`;
		canvas.remove(ballObj);
	} else {
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}

	function up() {
		// Write a code to move ball upward.
		if (ballY > 0) {
			ballY -= 10;
			canvas.remove(ballObj);
			new_image();
		}
	}

	function down() {
		// Write a code to move ball downward.
		if (ballY < canvas.height - 50) {
			ballY += 10;
			canvas.remove(ballObj);
			new_image();
		}
	}

	function left() {
		if (ballX > 5) {
			// Write a code to move ball left side.
				ballX -= 10;
				canvas.remove(ballObj);
				new_image();
		}
	}

	function right() {
		if (ballX <= 1050) {
			// Write a code to move ball right side.
				ballX += 10;
				canvas.remove(ballObj);
				new_image();
		}
	}

}

