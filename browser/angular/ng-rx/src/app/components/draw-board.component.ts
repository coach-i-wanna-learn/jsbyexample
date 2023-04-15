import {
  NgZone,
  Component, ElementRef, ViewChild, AfterViewInit, Renderer2, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './draw-board.component.html',
  styleUrls: ['./draw-board.component.sass']
})
export class DrawBoardComponent implements AfterViewInit, DoCheck {

  painting = false;

  startPoint?: {x: number, y: number};

  ctx: CanvasRenderingContext2D | null = null

  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('clock') clock!: ElementRef<HTMLCanvasElement>;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    // outside of Angular's change detection mechanism
    this.ngZone.runOutsideAngular(() => {
      console.log(this.canvas);
      this.ctx = this.canvas.nativeElement.getContext('2d');

      this.canvas.nativeElement.onmousedown = (e: MouseEvent) => {
        let x = e.offsetX;
        let y = e.offsetY;
        this.startPoint = {x, y};
        this.painting = true;
      }

      this.canvas.nativeElement.onmousemove = (e: MouseEvent) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let newPoint = {x, y};
        if (this.painting) {
          this.drawLine(this.startPoint!.x, this.startPoint!.y, newPoint.x, newPoint.y);
          this.startPoint = newPoint;
        }
      }

      this.canvas.nativeElement.onmouseup = () => {
        this.painting = false;
      }
    })


    // clock
    window.requestAnimationFrame(this.animate.bind(this))
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  drawLine(xStart: number, yStart: number, xEnd: number, yEnd: number) {
    this.ctx!.beginPath();
    this.ctx!.lineWidth = 3;
    this.ctx!.moveTo(xStart, yStart);
    this.ctx!.lineTo(xEnd, yEnd);
    this.ctx!.stroke();
    this.ctx!.closePath();
  }

  reset() {
    if (this.ctx) {
      this.ctx.fillStyle = '#FFFFFF'
      this.ctx.fillRect(0,0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    }
  }

  downloadImage() {
    const link = document.createElement('a');
    link.download = 'my-drawing.png';
    link.href = this.canvas.nativeElement.toDataURL('image/png');
    link.click();
  }

  animate() {
    this.ngZone.runOutsideAngular(() => {
      const now = new Date();
      const sec = now.getSeconds();
      const min = now.getMinutes();
      const hr = now.getHours();
      const ctx = this.clock.nativeElement.getContext('2d');
      let radius = this.clock.nativeElement.height / 2;
      ctx!.save()
      ctx!.translate(radius, radius);
      radius = radius * 0.90;
      this.drawClock(ctx!, radius, hr, min, sec);
      ctx!.restore()
      // window.requestAnimationFrame(() => {
      // })
      window.requestAnimationFrame(this.animate.bind(this))
    })

  }



  drawClock(ctx: CanvasRenderingContext2D, radius: number, hr: number, min: number, sec: number) {
    this.drawFace(ctx, radius);
    this.drawNumbers(ctx, radius);
    this.drawTime(ctx, radius, hr, min, sec);
  }

  drawFace(ctx: CanvasRenderingContext2D, radius: number) {
    let grad;
    // beginPath is used to start a new path// It is used to clear any previous path and start a new one
    // This is useful when you want to draw multiple shapes on the same canvas
    ctx.beginPath();
    // 清空
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    // 1. 创建渐变对象
    // createRadialGradient(x0, y0, r0, x1, y1, r1)
    // x0, y0, r0: 渐变的起始圆
    // x1, y1, r1: 渐变的结束圆
    // 2. 添加颜色
    // addColorStop(position, color)
    // position: 0-1 之间的值，表示渐变的位置
    // color: 渐变的颜色
    // 这里使用了 translate 移动了坐标的位置
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
  }

  drawNumbers(ctx: CanvasRenderingContext2D, radius: number) {
    let ang;
    let num;
    ctx.font = radius*0.15 + "px arial";
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    for(num = 1; num < 13; num++){
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius*0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius*0.85);
      ctx.rotate(-ang);
    }
  }

  drawTime(ctx: CanvasRenderingContext2D, radius: number, hr: number, min: number, sec: number){
      //hour
      hr = hr % 12;
      hr = (hr * Math.PI / 6) +
      (min * Math.PI / (6 * 60)) +
      (sec * Math.PI / (360 * 60));
      this.drawHand(ctx, hr, radius*0.5, radius*0.07);
      //minute
      min = (min * Math.PI / 30) + (sec * Math.PI / (30 * 60));
      this.drawHand(ctx, min, radius*0.8, radius*0.07);
      // second
      sec = (sec * Math.PI / 30);
      this.drawHand(ctx, sec, radius*0.9, radius*0.02);
  }

  drawHand(ctx: CanvasRenderingContext2D, pos: number, length: number, width: number) {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.moveTo(0,0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
  }
}





