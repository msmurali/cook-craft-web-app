import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultToPipe } from './pipes/default-to.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';



@NgModule({
  declarations: [
    DefaultToPipe,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DefaultToPipe
  ],
  providers: [SpinnerService]
})
export class SharedModule { }
