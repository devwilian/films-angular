import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FilmsComponent } from './components/films/films.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmdetailComponent } from './components/filmdetail/filmdetail.component';

const routes: Routes = [
  
  { path: 'films', component: FilmsComponent },
  { path: 'filmdetail/:id', component: FilmdetailComponent },
  { path: '',   redirectTo: '/films', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
