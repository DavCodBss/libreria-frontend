import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login.service";
import {Utente} from "../../model/utente";

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit{

  utenti: Utente[] = [];
  constructor(private loginService:LoginService){}

  ngOnInit() {
    this.loginService.getUtenti().subscribe((res) => {
      this.utenti = res;
    });
    console.log("ciao");
  }



}
