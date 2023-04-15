import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // The subset of declarations that should be visible and usable in the component templates of other NgModules.
  exports: [RouterModule],
})
export class AppRoutingModule { }
