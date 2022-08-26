// basic sprite animation
// grab canvas from html
const canvas = document.getElementById('canvas0');
// give canvas 2d features
const ctx = canvas.getContext('2d');
// define cavas width and height
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
// create new Image and assign it sprite sheet
const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
// set single sprite width, width of sheet / # of sprites
const spriteWidth = 575;
// set single sprite height, height of sheet / # of sprites
const spriteHeight = 523;

// function to animate the sprite based on which
function animate() {
	// s = image source, d = image destination
	// ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);

	ctx.drawImage(playerImage, 0, 0, 200, 200, 0, 0,  );
	requestAnimationFrame(animate);
};
animate();
