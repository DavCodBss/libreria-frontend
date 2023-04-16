import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Utente} from "../model/utente";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = "http://localhost:8080/api/utenti";

  constructor(private http:HttpClient) { }

  getUtenti() : Observable<Utente[]> {
    return this.http.get<Utente[]>(this.apiUrl);
  };


}
