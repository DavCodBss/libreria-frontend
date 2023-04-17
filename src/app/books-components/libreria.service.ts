import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UtenteLibro} from "../model/utenteLibro";

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {

  apiUrl = 'http://localhost:8080/api/libreria';
  constructor(private http: HttpClient) {}

  getUserLibrary(id: string): Observable<UtenteLibro[]> {
    return this.http.get<UtenteLibro[]>(this.apiUrl + '/utente/' + id);
  }


}
