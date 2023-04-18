import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Utente} from "../model/utente";

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  apiUrl = "http://159.69.189.243:8080/api/utenti";

  constructor(private http:HttpClient) { }

  getUtenti() : Observable<Utente[]> {
    return this.http.get<Utente[]>(this.apiUrl);
  };


}
