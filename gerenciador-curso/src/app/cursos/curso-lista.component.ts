import {Component, OnInit} from '@angular/core';
import {Curso} from './curso';
import {CursoService} from './curso.servico';

@Component({
  templateUrl: './curso-lista.component.html'
})
export class CursoListaComponent implements OnInit {

  filtroCursos: Curso[] = [];

  _cursos: Curso[] = [];

  _filterBy: string;

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
    })
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

  set filter(value: string){
    this._filterBy = value;

    this.filtroCursos = this._cursos.filter((curso: Curso) => curso.nome.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterBy;
  }
}
