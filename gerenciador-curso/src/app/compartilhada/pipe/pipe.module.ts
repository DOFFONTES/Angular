import {NgModule} from '@angular/core';
import {SubstituiPipe} from './substitui.pipe';

@NgModule({
  declarations: [
    SubstituiPipe
  ],
  exports: [
    SubstituiPipe
  ]
})
export class PipeModule {

}
