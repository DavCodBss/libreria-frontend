import {Utente} from "./utente";
import {Libro} from "./libro";

export interface UtenteLibro {
  id: Id
  utente: Utente
  libro: Libro
  dataAggiunta: string
  nLetture: number
}

export interface Id {
  idLibro: number
  idUtente: number
}
