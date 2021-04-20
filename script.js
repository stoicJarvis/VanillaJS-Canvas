const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 13;

let isDrawing = false;
let lx = 0;
let ly = 0;
let hue = 0;

function letsDraw(e){
    if(isDrawing){
        ctx.beginPath();
        ctx.moveTo(lx, ly);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.stroke();
        lx = e.offsetX;
        ly = e.offsetY;
        hue++;
    }
}

canvas.addEventListener('mousemove', letsDraw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lx = e.offsetX;
    ly = e.offsetY;
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);