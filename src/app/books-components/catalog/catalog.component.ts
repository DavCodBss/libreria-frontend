import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LibroService} from "../libro.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Libro} from "../../model/libro";


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{
  displayedColumns: string[] = [
    'copertina',
    'titolo',
    'autore',
    'isbn',
    'adminActions'
  ];

  dataSource = new MatTableDataSource<Libro>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  innerWidth: any;
  libri:Libro[] = [];

  //mostraCestinoLibri true = tabella mostra libri eliminati
  //mostraCestinoLibri false = tabella mostra libri disponibili
  mostraCestinoLibri = false;

  constructor(private libroService: LibroService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    //this.changeVisibileColumns();
    this.getLibriDisponibili();
  }


  getLibriDisponibili(){
    this.libroService.getLibriDisponibili().subscribe({
      next: (libri) => {
        this.dataSource = new MatTableDataSource(libri.reverse());
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.libri = libri;
      },
    });
    this.mostraCestinoLibri = false;
  }

  getLibriEliminati(){
    this.libroService.getLibriEliminati().subscribe({
      next: (libri) => {
        this.dataSource = new MatTableDataSource(libri.reverse());
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.libri = libri;
      },
    });
    this.mostraCestinoLibri = true;
  }


  //funzione filter della tabella
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  addDataEliminazioneALibro(libro:Libro){

  }

}
