import { Component, OnInit } from '@angular/core';
import { FilmResult } from 'src/app/interfaces/listfilms.interface';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  films: FilmResult[] = [];
  query: string = '';
  constructor(private filmService: FilmService) {}
  ngOnInit(): void {
    this.filmService.getFilms().subscribe((films) => {
      this.films = films;
      console.log(this.films);
    });
  }

  getTopFilms() {
    return this.filmService.getFilms();
  }
  searchFilm() {
    console.log(this.query);
    return this.filmService.getSearch(this.query).subscribe((films) => {
      this.films = films;
      console.log(this.films);
    });
  }
}
