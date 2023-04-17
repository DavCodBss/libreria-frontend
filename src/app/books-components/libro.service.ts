import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Libro} from "../model/libro";

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  apiUrl = 'http://localhost:8080/api/libri';
  constructor(private http: HttpClient) {}

  getBookById(id: string): Observable<Libro> {
    return this.http.get<Libro>(this.apiUrl + "/" + id);
  }

}
