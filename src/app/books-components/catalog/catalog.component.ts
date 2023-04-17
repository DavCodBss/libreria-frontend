import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LibroService} from "../libro.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Libro} from "../../model/libro";
import {BookAddDialogComponent} from "../dialogs/book-add-dialog/book-add-dialog.component";
import {BookEditDialogComponent} from "../dialogs/book-edit-dialog/book-edit-dialog.component";


class Data {
}

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

  libri:Libro[] = [];


  constructor(private libroService: LibroService,
              private dialog: MatDialog) {}

  ngOnInit() {

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
  }



  //funzione filter della tabella
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onClickAddDataEliminazione(libro:Libro) {
    libro.dataEliminazione =  this.getData();
    console.log(libro.dataEliminazione);
    this.libroService.updateLibro(libro).subscribe((res) => {
      this.getLibriDisponibili();
    })
  }

  //funzione per apertura del dialog dedicato all'inserimento di un libro
  addDialog() {
    this.dialog
      .open(BookAddDialogComponent, {
        panelClass: 'book-add-dialog',
      })
      .afterClosed()
      .subscribe((value) => {
        if (value === 'save') {
          this.getLibriDisponibili();
        }
      });
  }

  editDialog(row: any) {
    this.dialog
      .open(BookEditDialogComponent, {
        panelClass: 'book-edit-dialog',
        data: row,
      })
      .afterClosed()
      .subscribe((value) => {
        if (value === 'edit') {
          this.getLibriDisponibili();
        }
      });
  }


  //funzione per ottenere la data odierna in formato yyyy-mm-dd
  getData(){
    const date = new Date();
    const year = '' + date.getFullYear();
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return year + '-' + month + '-' + day;
  };
}
