import { Component } from '@angular/core';

@Component({
  // 官方称这个为 components css selector，但是是在 html（entry html or components html）中做便签使用的
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ng-canvas-demo';
}
