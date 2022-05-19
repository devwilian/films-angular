import { FilmService } from 'src/app/services/film.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/interfaces/film.interface';

@Component({
  selector: 'app-filmdetail',
  templateUrl: './filmdetail.component.html',
  styleUrls: ['./filmdetail.component.css'],
})
export class FilmdetailComponent implements OnInit {
  film: Film = {} as Film;
  constructor(
    private _route: ActivatedRoute,
    private filmService: FilmService
  ) {}
  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      console.log(params['id']);
      this.filmService.getFilm(params['id']).subscribe((film) => {
        this.film = film;
      });
    });
  }
}
