import { Component, OnInit } from '@angular/core';
import { PostService} from '../../services/post.service';
import GLOBAL from '../../services/global';
import {PostListItemComponent as Post} from '../post-list-item/post-list-item.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
title: string = 'HOME //'
recentes: any[] = [];
ultimo: any;

urlImages = GLOBAL.urlImages;

  constructor( private _ps: PostService) {
    

  }

  ngOnInit(): void {

   this._ps.getRecents().subscribe(  resp =>{
    
        this.recentes = resp ;
     
        if( this.recentes.length > 1){
          this.ultimo = this.recentes.splice(0,1);
          // console.log(this.ultimo);
        }
    
    })
  
    


  }
  

}
