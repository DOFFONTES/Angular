import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {CursoListaComponent} from './cursos/curso-lista.component';
import {EstrelaComponent} from './estrela/estrela.component';
import {SubstituiPipe} from './pipe/substitui.pipe';
import {barraNavegacaoComponent} from './barra-navegacao/barra-navegacao.component';
import {RouterModule} from '@angular/router';
import {erro404Component} from './erro-404/erro-404.component';
import {CursoInfoComponent} from './cursos/curso-info.component';
import {HttpClientModule} from '@angular/common/http';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    CursoListaComponent,
    EstrelaComponent,
    SubstituiPipe,
    barraNavegacaoComponent,
    erro404Component,
    CursoInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'inicio', pathMatch: 'full'
      },
      {
        path: 'curso/info/:id', component: CursoInfoComponent
      },
      {
        path: 'inicio', component: CursoListaComponent
      },
      {
        path: '**', component: erro404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
