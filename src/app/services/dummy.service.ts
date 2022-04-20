import {Injectable} from '@angular/core';
import {Observable, of, timer} from "rxjs";
import {RepeaterDataInterface, SortingDataInterface} from "../interfaces/repeater.interface";
import {switchMap} from "rxjs/operators";

@Injectable()
export class DummyService {
  /**
   * dummy data
   */
  private data: RepeaterDataInterface[] = [
    { name: 'A' },
    { name: 'B' },
    { name: 'C' },
    { name: 'D' },
    { name: 'E' }
  ];

  /**
   * dummy data
   */
  private sortingData: SortingDataInterface[] = [
    { name: 'C', price: 200 },
    { name: 'F', price: 400 },
    { name: 'E', price: 300 },
    { name: 'H', price: 100 },
    { name: 'A', price: 200 },
    { name: 'G', price: 300 },
    { name: 'D', price: 100 },
    { name: 'B', price: 400 }
  ];

  /**
   * to get data
   */
  getData():Observable<RepeaterDataInterface[]> {
    return timer(2000).pipe(switchMap(() => of(this.data)));
  }

  /**
   * to get sorting data
   */
  getSortingData():Observable<SortingDataInterface[]> {
    return timer(2000).pipe(switchMap(() => of(this.sortingData)));
  }

}
