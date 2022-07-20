import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VvComponent } from './vv/vv.component';
import { VvService } from './vv.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [VvComponent],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [VvService],
  exports: [VvComponent]
})
export class VvModule { }
