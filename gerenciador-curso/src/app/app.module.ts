import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {CursoModule} from './cursos/curso.module';
import {NucleoModule} from './nucleo/nucleo.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'cursos', pathMatch: 'full'
      }
    ]),
    CursoModule,
    NucleoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
