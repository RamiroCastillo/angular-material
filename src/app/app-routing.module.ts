import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { ButtonComponent } from './components/button/button.component';
import { AddWordComponent } from './components/add-word/add-word.component';
import { SeeWordComponent } from './components/see-word/see-word.component';
import { HttpRequestComponent } from './components/http-request/http-request.component';

// Rutas del proyecto
// cata ruta se define mediante la palabra path
// una vez q la url haga un match con el path
// entonces redenrizara el componente asignado en la propiedad component

const routes: Routes = [
  {
    path: 'autocomplete-material', component: AutocompleteComponent
  },
  {
    path: 'button-material', component: ButtonComponent
  },
  {
    path: 'add-words', component: AddWordComponent
  },
  {
    path: 'see-words', component: SeeWordComponent
  },
  {
    path: 'http-client', component: HttpRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
