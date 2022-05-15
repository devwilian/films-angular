import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const base_url = environment.BASE_URL;
const API_KEY = "3c14946894de1a3e0cceecb0e39d757d";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor(private httpClient:HttpClient) { }
  getFilms(){
    const url = "movie/top_rated";
    const params = new HttpParams().set('api_key', API_KEY);
    return this.httpClient.get(
      `${base_url}${url}`,
      {params});
  }
  getFilm(id:string){
    const url = "movie/"+id;
    const params = new HttpParams().set('api_key', API_KEY);
    return this.httpClient.get(
      `${base_url}${url}`,
      {params});
  }
  getSearch(query:string){ 
    const url = "search/movie";
    const params = new HttpParams().set('api_key', API_KEY).set('query', query);
    return this.httpClient.get(
      `${base_url}${url}`,
      {params});
  }
}
