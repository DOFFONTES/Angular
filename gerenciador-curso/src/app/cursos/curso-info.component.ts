import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Curso} from './curso';
import {CursoService} from './curso.servico';


@Component({
  templateUrl: './curso-info.component.html'
})

export class CursoInfoComponent implements OnInit {

  curso: Curso;

  constructor(private activatedRoute: ActivatedRoute, private cursoService: CursoService) {}

   ngOnInit(): void {
    this.cursoService.recuperarPeloId(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: curso => this.curso = curso,
      error: err => console.error('Error: ', err)
    });
   }
   salvar(): void {
    this.cursoService.salvar(this.curso).subscribe({
      next: curso => console.log('Salvo com sucesso', curso),
      error: err => console.log('Error', err)
    });
   }
}
