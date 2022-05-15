import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films:any;
  query:string="";
  constructor(private filmService: FilmService) { }
  ngOnInit(): void {
    this.filmService.getFilms().subscribe(data => { this.films = data;console.log(this.films); });
  }
  
    getTopFilms(){
      return this.filmService.getFilms();
    }
    verFilmDetails(film:any){
      console.log(film);
    }    
    searchFilm(){
      console.log(this.query);
      return this.filmService.getSearch(this.query).subscribe(data => { this.films = data;console.log(this.films); });
    }
}
