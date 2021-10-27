import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitledDividerComponent } from './titled-divider/titled-divider.component';
import { ParamsListComponent } from './params-list/params-list.component';



@NgModule({
  declarations: [
    TitledDividerComponent,
    ParamsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [    //what's in here is made available to other modules
    TitledDividerComponent,
    ParamsListComponent
  ]
})
export class SharedModule { }
