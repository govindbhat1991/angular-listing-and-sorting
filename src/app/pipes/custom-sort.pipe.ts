import {Pipe, PipeTransform} from '@angular/core';
import {SortingDataInterface} from "../interfaces/repeater.interface";

type SortArgsType = 'name' | 'price';

@Pipe({
  name: 'customSort'
})
export class CustomSortPipe implements PipeTransform {

  transform(value: SortingDataInterface[], args: string | string[]): SortingDataInterface[] {
    let configs: string[] = Array.isArray(args) ? args : [args];

    if (!configs.length) {
      return value;
    }

    configs.forEach(config => {
      const sortOrder: 'asc' | 'desc' = config.indexOf('-') === 0 ? 'asc' : 'desc';
      const sortConfig: SortArgsType = config.indexOf('-') === 0 ? config.slice(1) as SortArgsType : config as SortArgsType;
      value.sort((a, b) => {
        return a[sortConfig] > b[sortConfig] ? 1 : b[sortConfig] > a[sortConfig] ? -1 : 0;
      });
      if(sortOrder === 'desc') {
        value.reverse();
      }
    });
    return value;
  }

}
