import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login.service";
import {Utente} from "../../model/utente";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit{

  utenti: Utente[] = [];
  constructor(private loginService:LoginService,
              private router:Router){}

  ngOnInit() {
    this.loginService.getUtenti().subscribe((res) => {
      this.utenti = res;
    });
  }


  login(utente:Utente){
      localStorage.setItem("idUtente",utente.id + '');
      localStorage.setItem("nomeUtente", utente.nome)
      localStorage.setItem("cognomeUtente", utente.cognome)
      localStorage.setItem("fotoUtente", utente.fotoProfilo)

      if(utente.id > 0){
        this.router.navigateByUrl('/home')
        console.log(localStorage.getItem("fotoUtente"))
      }

  }



}
