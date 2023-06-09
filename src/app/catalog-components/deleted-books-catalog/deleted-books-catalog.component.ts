import {Component, HostListener, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Libro} from "../../model/libro";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {LibriService} from "../../services/libri.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-deleted-books-catalog',
  templateUrl: './deleted-books-catalog.component.html',
  styleUrls: ['./deleted-books-catalog.component.css']
})
export class DeletedBooksCatalogComponent {
  displayedColumns: string[] = [
    'copertina',
    'titolo',
    'isbn',
    'dataEliminazione',
    'adminActions'
  ];

  dataSource = new MatTableDataSource<Libro>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  innerWidth: any;
  libri:Libro[] = [];

  constructor(private libroService: LibriService) {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.changeVisibileColumns();
    this.getLibriEliminati();
  }

  //Listener che tiene traccia delle dimensioni dello schermo in seguito a un window resize
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    this.innerWidth = event.target.innerWidth;
    this.changeVisibileColumns();
  }

  //Funzione per nascondere colonne in base alle dimensioni dello schermo
  changeVisibileColumns() {
    if (this.innerWidth > 750) {
      this.displayedColumns = [
        'copertina',
        'titolo',
        'isbn',
        'dataEliminazione',
        'adminActions',
      ];
    } else {
      this.displayedColumns = [
        'titolo',
        'dataEliminazione',
        'adminActions',
      ];
    }
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
  }


  //funzione filter della tabella
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  onClickRemoveDataEliminazione(libro:Libro) {
    libro.dataEliminazione = '';
    this.libroService.updateLibro(libro).subscribe((res) => {
      this.getLibriEliminati();
    })
  }

  onClickPermanentlyDelete(id:number) {
    this.libroService.deletePermnanentlyLibro(id).subscribe((res) => {
      this.getLibriEliminati();
    })
  }
}
