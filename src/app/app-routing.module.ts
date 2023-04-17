import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {LibroComponent} from "./pages/libro/libro.component";
import {CatalogoComponent} from "./pages/catalogo/catalogo.component";
import {DeletedBooksCatalogComponent} from "./books-components/deleted-books-catalog/deleted-books-catalog.component";
import {CestinoComponent} from "./pages/cestino/cestino.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dettaglio/:id',
    component: LibroComponent
  },
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'catalogo/cestino',
    component: CestinoComponent
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
