import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-ultimo',
  templateUrl: './post-ultimo.component.html',
  styles: [
  ]
})
export class PostUltimoComponent implements OnInit {
@Input() recente;
titulo = 'Ultimo post';
@Input() urlImages;

  constructor() { 
    
  }

  ngOnInit(): void {
    console.log( this.recente);
  }

}
