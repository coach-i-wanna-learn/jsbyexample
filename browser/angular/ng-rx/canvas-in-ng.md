# why angular requestAnimationFrame will trigger ngDoCheck

To answer your question, ngDoCheck is called whenever the change detection mechanism of the Angular framework detects changes in the component. This means that ngDoCheck will be called whenever there is a change in the component's input properties, output properties, or any other property that is being watched by Angular's change detection mechanism.

If you have a canvas element in your Angular component and its properties are being watched by Angular's change detection mechanism, then any change to those properties will trigger ngDoCheck. This is because Angular's change detection mechanism will detect the change and call ngDoCheck to allow the component to react to the change.

requestAnimationFrame is a method that schedules a function to be executed before the next repaint of the browser. When you use requestAnimationFrame to update the canvas element in your Angular component, it will trigger a repaint of the canvas element, which will cause a change in the canvas element's properties. This change will be detected by Angular's change detection mechanism, which will call ngDoCheck to allow the component to react to the change.

Here is an example of how requestAnimationFrame can be used to update a canvas element in an Angular component:

import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    <canvas #canvas></canvas>
  `
})
export class MyComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');

    const draw = () => {
      // Draw on the canvas here
      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);
  }
}
In this example, requestAnimationFrame is used to schedule the draw function to be executed before the next repaint of the browser. The draw function is responsible for drawing on the canvas element. Whenever draw is executed, it will trigger a repaint of the canvas element, which will cause a change in the canvas element's properties. This change will be detected by Angular's change detection mechanism, which will call ngDoCheck to allow the component to react to the change.

I hope this helps! Let me know if you have any further questions.


# how to avoid trigger ngDoCheck when use requestAnimationFrame


To avoid triggering ngDoCheck when using requestAnimationFrame in an Angular component, you can use the NgZone service provided by Angular. The NgZone service allows you to run code outside of Angular's change detection mechanism, which means that changes made within that code will not trigger ngDoCheck.

Here is an example of how to use NgZone to run code outside of Angular's change detection mechanism:

import { Component, NgZone, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    <canvas #canvas></canvas>
  `
})
export class MyComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef: ElementRef<HTMLCanvasElement>;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');

    const draw = () => {
      // Draw on the canvas here
      this.ngZone.runOutsideAngular(() => {
        requestAnimationFrame(draw);
      });
    };

    requestAnimationFrame(draw);
  }
}
In this example, the ngZone.runOutsideAngular() method is used to run the requestAnimationFrame function outside of Angular's change detection mechanism. This means that changes made within the requestAnimationFrame function will not trigger ngDoCheck.

I hope this helps! Let me know if you have any further questions.

