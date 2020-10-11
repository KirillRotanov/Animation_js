const box = document.getElementById('box');
const container = document.getElementById('container');
let pos = 1;
setInterval(move, 10);
let width = container.clientWidth - box.clientWidth;
let rev = false;

function move() {
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
    
    if (!rev){
        pos++;
    } else {
        pos--;
    }
    if (pos == width) {
        rev=true;
    } else if (pos ==0) {
        rev=false;
    }
}