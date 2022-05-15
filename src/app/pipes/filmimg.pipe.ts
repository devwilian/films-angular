import { Pipe, PipeTransform } from '@angular/core';
const URL_IMG = "http://image.tmdb.org/t/p/w500";
@Pipe({
  name: 'filmimg'
})
export class FilmimgPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    
    if(value.backdrop_path){
      return URL_IMG + value.backdrop_path;
    }else{
      if(value.poster_path){
        return URL_IMG + value.poster_path;
      }else{
        return  "https://www.gasso.com/wp-content/uploads/2017/04/noimage.jpg";
      }
    }
  }
}
