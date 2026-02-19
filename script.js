document.querySelector(''.magnify-content').addEventListener
('mousemove', function(e) {
const glass = this.querySelector('.magnify-glass');
const img = this.querySelector('img');

const pos = getCursorpos(this, e);
const x = pos.x;
const y = pos.y;

glass.style.left = x + 'px';
glass.style.top = y + 'px';

glass.style.backgroundImage = 'url($(img.src'});
glass.style
}