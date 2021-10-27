import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [    //imported modules must also be declared here
    BrowserModule,
    AppRoutingModule    //if importing other modules, this needs to be last, or its routing rules (with '**') will apply before those of other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
