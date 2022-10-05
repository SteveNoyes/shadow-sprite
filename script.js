// create playerState for initial animation
let playerState = 'idle';
// dropdown menu
const dropdown = document.getElementById('animations');
// update playerState variable on change of dropdown menu
// to the selected item
dropdown.addEventListener('change', function(e){
	playerState = e.target.value;
})
// grab canvas from html file, apply 2d and give width and height
const canvas = document.getElementById('canvas0');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
// add sprite sheet to new image variable
const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
// set sprite width by dividing full width of sheet by how many rows of sprites
const spriteWidth = 575;
// set sprite height by dividing full height of sheet by how many columns of sprites
const spriteHeight = 523;

let gameFrame = 0;

const staggerFrames = 5;

const spriteAnimations = [];
// an array of objects, name of animation and how many frames it has
const animationStates = [
	{
		name: 'idle',
		frames: 7,
	},
	{
		name: 'jump',
		frames: 7,
	},
	{
		name: 'fall',
		frames: 7,
	},
	{
		name: 'run',
		frames: 9,
	},
	{
		name: 'dizzy',
		frames: 11,
	},
	{
		name: 'sit',
		frames: 5,
	},
	{
		name: 'roll',
		frames: 7,
	},
	{
		name: 'bite',
		frames: 7,
	},
	{
		name: 'ko',
		frames: 12,
	},
	{
		name: 'gethit',
		frames: 4,
	}
];

// state of each animation matched to loc object
animationStates.forEach((state, index) => {	
	let frames = {
		loc: [],
	}
	for (let i = 0; i < state.frames; i++){
		let positionX = i * spriteWidth;
		let positionY = index * spriteHeight;
		frames.loc.push({x: positionX, y: positionY});
	}
	spriteAnimations[state.name] = frames;
});

function animate() {
	// reset canvas each time function is called
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	// this staggers the frames by a fifth
	let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
	let frameX = spriteWidth * position;
	let frameY = spriteAnimations[playerState].loc[position].y;
	// this takes 3, 5 or 9 parameters
	// source image, source coordinates, desination coordinates
	// anything.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
	ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
	// update gameFrame by one each iteration
	gameFrame++;
	requestAnimationFrame(animate);
};
animate();
