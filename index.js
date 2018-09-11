console.log('Hello World! 🌎');

let canvas = document.getElementById('portal');
let context = canvas.getContext('2d');

let innerWidth = window.innerWidth;
let devicePixelRatio = window.devicePixelRatio;
canvas.width = innerWidth * devicePixelRatio;
canvas.height = innerWidth * devicePixelRatio;
context.scale(devicePixelRatio, devicePixelRatio);

context.lineCap = 'square';
context.lineWidth = 2;

let manifest = { canvas, context, innerWidth, devicePixelRatio };
console.log('Manifest:', manifest);

const draw = (x, y, width, height) => {
  context.moveTo(x, y);
  context.lineTo(x + width, y + height);
  context.stroke();
};

draw(0, 0, innerWidth, innerWidth);
