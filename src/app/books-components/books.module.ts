import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksDetailsComponent} from "./books-details/books-details.component";
import {BooksListComponent} from "./books-list/books-list.component";



@NgModule({
  declarations: [
    BooksDetailsComponent,
    BooksListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
