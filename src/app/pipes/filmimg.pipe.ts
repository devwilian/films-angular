import { environment } from './../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';
import { FilmResult } from '../interfaces/listfilms.interface';
const URL_IMG = environment.BASE_URL_IMG;
@Pipe({
  name: 'filmimg',
})
export class FilmimgPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): any {
    if (value) {
      return URL_IMG + value;
    } else {
      return 'https://www.gasso.com/wp-content/uploads/2017/04/noimage.jpg';
    }
  }
}
