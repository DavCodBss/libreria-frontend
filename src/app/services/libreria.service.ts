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

  //Recupera tutti i libri assegnati a uno specifico utente
  getUserLibrary(id: string): Observable<UtenteLibro[]> {
    return this.http.get<UtenteLibro[]>(this.apiUrl + '/utente/' + id);
  }


  //Recupera un singolo UtenteLibro
  getSingleUtenteLibro(idLibro:string, idUtente:string): Observable<UtenteLibro>{
    return this.http.get<UtenteLibro>(this.apiUrl + '/' + idLibro + '/' + idUtente, );
  }

  //Elimina un UtenteLibro
  deleteSingleUtenteLibro(idLibro:string, idUtente:string): Observable<string>{
    return this.http.delete(this.apiUrl + '/' + idLibro + '/' + idUtente, {responseType: 'text'});
  }

  //aggiunge un UtenteLibro
  addSingleUtenteLibro(update:any): Observable<UtenteLibro>{
    return this.http.post<UtenteLibro>(this.apiUrl, update);
  }

  //Modifica un UtenteLibro
  updateSingleUtenteLibro(utenteLibro:UtenteLibro): Observable<UtenteLibro>{
    return this.http.put<UtenteLibro>(this.apiUrl, utenteLibro);
  }



}
