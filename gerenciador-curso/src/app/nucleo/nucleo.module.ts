import {NgModule} from '@angular/core';
import {barraNavegacaoComponent} from './component/barra-navegacao/barra-navegacao.component';
import {RouterModule} from '@angular/router';
import {erro404Component} from './component/erro-404/erro-404.component';

@NgModule({
  declarations: [
    barraNavegacaoComponent,
    erro404Component
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**', component: erro404Component
      }
    ])
  ],
  exports: [
    barraNavegacaoComponent
  ]
})
export class NucleoModule {

}
