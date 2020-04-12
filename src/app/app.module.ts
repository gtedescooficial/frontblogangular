import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostUltimoComponent } from './components/post-ultimo/post-ultimo.component';
import { MomentModule } from 'ngx-moment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostListItemComponent,
    PostUltimoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
