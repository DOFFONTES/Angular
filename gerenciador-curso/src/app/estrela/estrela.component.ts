import {Component, OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-estrela',
  templateUrl: './estrela.component.html',
  styleUrls: ['./estrela.component.css']
})

export class EstrelaComponent implements OnChanges{

  @Input()
  avalia: number = 0;

  estrelaTamanho: number;

  ngOnChanges(): void {
    this.estrelaTamanho = this.avalia * 94 / 5;
  }
}
