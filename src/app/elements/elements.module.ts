import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { MultiplierDirective } from './multiplier.directive';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceholderComponent,
    MultiplierDirective
  ],
  imports: [    //imported modules must be declared also here
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ElementsModule { }
