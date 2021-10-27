import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

const routes: Routes = [
  {
    path: '',   //this route is *added* to the one already specified in app-routing.module.ts ('/elements')
    component: ElementsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
