import {Component, OnInit} from '@angular/core';
import {LibroService} from "../libro.service";
import {ActivatedRoute} from "@angular/router";
import {Libro} from "../../model/libro";
import {LibreriaService} from "../libreria.service";
import {UtenteLibro} from "../../model/utenteLibro";

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent implements OnInit{
  libro!:Libro;
  utenteLibro?:UtenteLibro;
  nLetture = 0;
  idLibro: string = "0";
  idUtente:string;

  constructor(private libroService:LibroService,
              private route:ActivatedRoute,
              private libreriaService:LibreriaService) {
    this.idUtente = localStorage.getItem('idUtente')!;
  }

  ngOnInit() {

    this.route.params.subscribe((params) => {
      this.idLibro = params['id'];
    });

    this.libroService.getBookById(this.idLibro).subscribe((res) => {
      this.libro = res;
    })

    this.getUtenteLibro();

  }

  //Verifico se l'utente possiede il libro, ed eventualmente lo salvo
  getUtenteLibro(){
    this.libreriaService.getSingleUtenteLibro(this.idLibro, this.idUtente).subscribe((res) => {
      if(res){
        this.utenteLibro = res;
        this.nLetture = res.nLetture;
      }
    })
  }

  //Funzione per eliminare il libro dalla libreria dell'utente
  onClickDeleteUserBook() {
    this.libreriaService.deleteSingleUtenteLibro(this.idLibro, this.idUtente).subscribe((res) => {
        this.utenteLibro = undefined;
    })
  }

  //Funzione per aggiungere il libro alla libreria dell'utente
  onClickAddUserBook() {

    let json = {
      libro: {id: this.idLibro},
      utente: {id: this.idUtente}
    }

    this.libreriaService.addSingleUtenteLibro(json).subscribe((res) => {
      this.utenteLibro = res;
      this.nLetture = res.nLetture;
    })
  }


  updateNumberOfReads() {
    if(this.nLetture != this.utenteLibro!.nLetture){
      this.utenteLibro!.nLetture = this.nLetture;
      this.libreriaService.updateSingleUtenteLibro(this.utenteLibro!).subscribe((res) => {
        this.utenteLibro = res;
      })
    }
  }



}
