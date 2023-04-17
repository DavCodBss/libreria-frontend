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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CatalogComponent } from './catalog-components/catalog/catalog.component';
import { BookAddDialogComponent } from './catalog-components/dialogs/book-add-dialog/book-add-dialog.component';
import { BookEditDialogComponent } from './catalog-components/dialogs/book-edit-dialog/book-edit-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import { DeletedBooksCatalogComponent } from './catalog-components/deleted-books-catalog/deleted-books-catalog.component';
import { CestinoComponent } from './pages/cestino/cestino.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";




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
    BooksDetailsComponent,
    CatalogComponent,
    BookAddDialogComponent,
    BookEditDialogComponent,
    DeletedBooksCatalogComponent,
    CestinoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatPaginatorModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
