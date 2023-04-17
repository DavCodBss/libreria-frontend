import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  nomeUtente?:string | null;
  cognomeUtente?:string | null;
  fotoUtente?:string | null;


  show = false;
  constructor( router: Router) {

    //Nasconde l'header nella schermata di login
    //E raccoglie i dati utente per mostrarli nella navbar
    router.events.subscribe(val => {
      if (router.url == "/login") {
        this.show = false;
      } else {
        this.show = true;
        this.nomeUtente = localStorage.getItem('nomeUtente');
        this.cognomeUtente = localStorage.getItem('cognomeUtente');
        this.fotoUtente = localStorage.getItem('fotoUtente');
      }
    });
  }

  logout() {
    localStorage.clear();
  }
}
