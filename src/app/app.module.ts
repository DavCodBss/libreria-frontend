import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserSelectionComponent } from './login-components/user-selection/user-selection.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HomeComponent } from './pages/home/home.component';
import { LibroComponent } from './pages/libro/libro.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from "@angular/material/list";
import {BooksDetailsComponent} from "./books-components/books-details/books-details.component";
import {BooksListComponent} from "./books-components/books-list/books-list.component";
import {MatPaginatorModule} from "@angular/material/paginator";




@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    CatalogoComponent,
    HomeComponent,
    LibroComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    BooksListComponent,
    BooksDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatPaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
