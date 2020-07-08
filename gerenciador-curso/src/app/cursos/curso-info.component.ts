import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Curso} from './curso';
import {CursoService} from './curso.servico';


@Component({
  templateUrl: './curso-info.component.html'
})

export class CursoInfoComponent implements OnInit {

  curse: Curso;

  constructor(private activatedRoute: ActivatedRoute, private cursoService: CursoService) {}

   ngOnInit(): void {
    this.cursoService.recuperarPeloId(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: curse => this.curse = curse,
      error: err => console.error('Error: ', err)
    });
   }
   salvar(): void {
    this.cursoService.salvar(this.curse).subscribe({
      next: curse => console.log('Salvo com sucesso', curse),
      error: err => console.log('Error', err)
    });
   }
}
