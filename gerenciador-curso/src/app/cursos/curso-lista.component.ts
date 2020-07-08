import {Component, OnInit} from '@angular/core';
import {Curso} from './curso';
import {CursoService} from './curso.servico';

@Component({
  templateUrl: './curso-lista.component.html'
})
export class CursoListaComponent implements OnInit {

  filtroCursos: Curso[] = [];

  // tslint:disable-next-line:variable-name
  _cursos: Curso[] = [];


  // tslint:disable-next-line:variable-name
  _filtrar: string;

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.retrieveAll();

  }

  retrieveAll(): void {
    this.cursoService.retrieveAll().subscribe({
      next: cursos => {
        this._cursos = cursos;
        this.filtroCursos = this._cursos;
      },
      error: err => console.log('Error', err)
    });
  }

  deletar(cursoId: number): void {
    this.cursoService.deletarPorId(cursoId).subscribe({
      next: () => {
        console.log('Deletado com sucesso!');
        this.retrieveAll();
      },
      error: err => console.log('Error: ', err)
    })
  }

  set filtro(value: string){
    this._filtrar = value;

    this.filtroCursos = this._cursos.filter((curso: Curso) => curso.nome.toLocaleLowerCase().indexOf(this._filtrar.toLocaleLowerCase()) > -1);
  }

  // tslint:disable-next-line:typedef
  get filtro(){
    return this._filtrar;
  }
}
