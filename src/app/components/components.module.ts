import { PosterimgPipe } from './../pipes/posterimg.pipe';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from '../components/films/films.component';
import { FilmdetailComponent } from '../components/filmdetail/filmdetail.component';
import { PageNotFoundComponent } from '../components/pagenotfound/pagenotfound.component';
import { FilmimgPipe } from '../pipes/filmimg.pipe';
import { ExtendeddatePipe } from '../pipes/extendeddate.pipe';

@NgModule({
  declarations: [
    FilmsComponent,
    FilmdetailComponent,
    PageNotFoundComponent,
    FilmimgPipe,
    ExtendeddatePipe,
    PosterimgPipe,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [
    FilmsComponent,
    FilmdetailComponent,
    PageNotFoundComponent,
    FilmimgPipe,
    ExtendeddatePipe,
    PosterimgPipe,
  ],
})
export class ComponentsModule {}
