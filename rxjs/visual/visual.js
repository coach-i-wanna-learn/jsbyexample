// import rxjs from 'https://cdn.jsdelivr.net/npm/rxjs@7.8.0/+esm'
import { fromEvent ,map, throttleTime } from 'https://cdn.jsdelivr.net/npm/rxjs@7.8.0/+esm';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const mouseMove$ = fromEvent(canvas, 'mousemove').pipe(
 throttleTime(16),
  map((event) => ({
    x: event.offsetX,
    y: event.offsetY,
  }))
);

mouseMove$.subscribe(({ x, y }) => {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fillStyle = 'blue';
  ctx.fill();
});
