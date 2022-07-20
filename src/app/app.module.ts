import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VvModule } from './vv/vv.module';
import { VvComponent } from './vv/vv/vv.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VvModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
