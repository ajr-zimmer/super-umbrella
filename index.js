console.log('Hello World! 🌎');

let canvas = document.getElementById('portal');
let context = canvas.getContext('2d');

// const innerWidth = window.innerWidth;
const innerWidth = 320;
const devicePixelRatio = window.devicePixelRatio;
canvas.width = innerWidth * devicePixelRatio;
canvas.height = innerWidth * devicePixelRatio;
context.scale(devicePixelRatio, devicePixelRatio);

context.lineCap = 'square';
context.lineWidth = 2;

const manifest = { canvas, context, innerWidth, devicePixelRatio };
console.log('Manifest:', manifest);

const draw = (x, y, width, height) => {
  const leftToRight = Math.random() >= 0.5;

  if (leftToRight) {
    context.moveTo(x, y);
    context.lineTo(x + width, y + height);
  } else {
    context.moveTo(x + width, y);
    context.lineTo(x, y + height);
  }

  context.strokeStyle = '#5C72B0';
  context.stroke();
};

const step = 25;

for (let x = 0; x < innerWidth; x += step) {
  for (let y = 0; y < innerWidth; y += step) {
    draw(x, y, step, step);
  }
}

// draw(0, 0, innerWidth, innerWidth);
