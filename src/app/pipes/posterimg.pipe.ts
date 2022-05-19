import { environment } from './../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';
import { FilmResult } from '../interfaces/listfilms.interface';

const URL_IMG = environment.BASE_URL_IMG;

@Pipe({
  name: 'posterimg',
})
export class PosterimgPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    console.log(value);
    if (value) {
      return URL_IMG + value;
    } else {
      return 'https://www.gasso.com/wp-content/uploads/2017/04/noimage.jpg';
    }
  }
}
