const root = document.querySelector('html');
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const zoomReset = document.querySelector('#zoom-reset');
const zoomlarge = document.querySelector('#zoom-large');
const zoomLarger = document.querySelector('#zoom-larger');

burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
})

zoomReset.addEventListener('keyup', event => {
  if (event.code === 'Space' || event.code === 'Enter') {
    root.style.fontSize = 'medium'
  }
})
zoomReset.addEventListener('click', () => {
  root.style.fontSize = 'medium'
})

zoomlarge.addEventListener('keyup', () => {
  if (event.code === 'Space' || event.code === 'Enter') {
    root.style.fontSize = "large";
  }
})
zoomlarge.addEventListener('click', () => {
  root.style.fontSize = 'large';
})

zoomLarger.addEventListener('keyup', () => {
  if (event.code === 'Space' || event.code === 'Enter') {
    root.style.fontSize = "x-large";
  }
})
zoomLarger.addEventListener('click', () => {
  root.style.fontSize = 'x-large'
})