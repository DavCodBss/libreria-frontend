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

  getAllLibri(): Observable<Libro[]>{
    return this.http.get<Libro[]>(this.apiUrl);
  }

  getLibriDisponibili(): Observable<Libro[]>{
    return this.http.get<Libro[]>(this.apiUrl + '/disponibili');
  }

  getLibriEliminati(): Observable<Libro[]>{
    return this.http.get<Libro[]>(this.apiUrl + '/eliminati');
  }

  addLibro(libro:Libro): Observable<Libro>{
    return this.http.post<Libro>(this.apiUrl, libro);
  }

  updateLibro(libro:Libro): Observable<Libro>{
    return this.http.put<Libro>(this.apiUrl, libro);
  }

  deletePermnanentlyLibro(id:number): Observable<string>{
    return this.http.delete(this.apiUrl + '/' + id,{responseType: 'text'});
  }


}
