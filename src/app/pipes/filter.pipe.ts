import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( array: any[], text: string, key: string ): any[] {
    if ( text !== '') {
      text = text.toLowerCase();
      return array.filter( item => item[key].toLowerCase().includes(text) );
    }
    return array;
  }

}
