import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { DrawBoardComponent } from './components/draw-board.component';

@NgModule({
  // The set of components, directives, and pipes (declarables) that belong to this module.
  declarations: [
    // AppComponent,
    DrawBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    // AppComponent,
    DrawBoardComponent
  ]
})
export class AppModule { }
