import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import { FilmdetailComponent } from './components/filmdetail/filmdetail.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FilmimgPipe } from './pipes/filmimg.pipe';
import { FormsModule } from '@angular/forms';
import { ExtendeddatePipe } from './pipes/extendeddate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmdetailComponent,
    PageNotFoundComponent,
    FilmimgPipe,
    ExtendeddatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
