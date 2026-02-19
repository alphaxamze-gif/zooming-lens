document.querySelector(''.magnify-content').addEventListener
('mousemove', function(e) {
const glass = this.querySelector('.magnify-glass');
const img = this.querySelector('img');

const pos = getCursorpos(this, e);
const x = pos.x;
const y = pos.y;

glass.style.left = x + 'px';
glass.style.top = y + 'px';

glass.style.backgroundImage = 'url(${img.src})';
glass.style.backgroundsize = '$'{img.width * 1.5}px ${img.height * 1.5}px;
glass.style.backgroundposition = '-${x * 1.5 - glass.offsetHeight/2}px';
});

function getCursorpos(element, e){
    const rect = element.getBoundingClientRect();
    return {
        x: e.clientX - react.left,
        y:e.clientY - react.top
    };
} 
