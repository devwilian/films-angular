import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extendeddate',
})
export class ExtendeddatePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let newDate = new Date(value);
    let mes_num = newDate.getMonth() + 1;
    var mes = '';
    switch (mes_num) {
      case 1: {
        mes = 'Enero';
        break;
      }
      case 2: {
        //statements;
        mes = 'Febrero';
        break;
      }
      case 3: {
        //statements;
        mes = 'Marzo';
        break;
      }
      case 4: {
        //statements;
        mes = 'Abril';
        break;
      }
      case 5: {
        //statements;
        mes = 'Mayo';
        break;
      }
      case 6: {
        //statements;
        mes = 'Junio';
        break;
      }
      case 7: {
        //statements;
        mes = 'Julio';
        break;
      }
      case 8: {
        //statements;
        mes = 'Agosto';
        break;
      }
      case 9: {
        //statements;
        mes = 'Septiembre';
        break;
      }
      case 10: {
        //statements;
        mes = 'Octubre';
        break;
      }
      case 11: {
        //statements;
        mes = 'Noviembre';
        break;
      }
      case 12: {
        //statements;
        mes = 'Diciembre';
        break;
      }
    }
    return newDate.getDate() + ' de ' + mes + ' de ' + newDate.getFullYear();
  }
}
