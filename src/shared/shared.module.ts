import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultToPipe } from './pipes/default-to.pipe';



@NgModule({
  declarations: [
    DefaultToPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DefaultToPipe
  ]
})
export class SharedModule { }
