import {Component, OnInit} from '@angular/core';
import {LibreriaService} from "../../services/libreria.service";
import {UtenteLibro} from "../../model/utenteLibro";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  libreriaUtente: UtenteLibro[] = [];
  pageSlice: UtenteLibro[] = [];
  idUtente:string;
  constructor(private libreriaService:LibreriaService) {
      this.idUtente = localStorage.getItem('idUtente')!;

  }

  ngOnInit() {

      this.libreriaService.getUserLibrary(this.idUtente).subscribe((res) => {
        this.libreriaUtente = res;
        this.pageSlice = res.slice(0, 10);
    })
  }

  OnPageChange(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.libreriaUtente.length) {
      endIndex = this.libreriaUtente.length;
    }
    this.pageSlice = this.libreriaUtente.slice(startIndex, endIndex);

  }
}
