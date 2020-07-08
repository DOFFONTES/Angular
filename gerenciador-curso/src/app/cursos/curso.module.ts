import {NgModule} from '@angular/core';
import {CursoListaComponent} from './curso-lista.component';
import {CursoInfoComponent} from './curso-info.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {EstrelaModule} from '../compartilhada/component/estrela/estrela.module';
import {PipeModule} from '../compartilhada/pipe/pipe.module';

@NgModule({
  declarations: [
    CursoListaComponent,
    CursoInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EstrelaModule,
    PipeModule,
    RouterModule.forChild([
      {
        path: 'cursos', component: CursoListaComponent
      },
      {
        path: 'cursos/info/:id', component: CursoInfoComponent
      }
    ])
  ]
})
export class CursoModule {

}
