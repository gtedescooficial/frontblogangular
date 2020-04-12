import { Component, OnInit, Input } from '@angular/core';
import GLOBAL from '../../services/global';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styles: [
  ]
})
export class PostListItemComponent implements OnInit {
@Input() recente;
urlImages = GLOBAL.urlImages;
title="Post mais recentes"

  constructor() { }

  ngOnInit(): void {
   // console.log(this.recente);
  }

}
