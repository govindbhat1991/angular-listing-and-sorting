import {Component} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {SortingDataInterface} from "../interfaces/repeater.interface";
import {DummyService} from "../services/dummy.service";

@Component({
  selector: 'app-list-sorting',
  templateUrl: './list-sorting.component.html',
  styleUrls: ['./list-sorting.component.scss']
})
export class ListSortingComponent {
  /**
   * to destroy the subscription when component destroyed
   */
  private destroyed$ = new Subject<string>();

  /**
   * repeater data
   */
  data$: Observable<SortingDataInterface[]> = this.dummyService.getSortingData();

  constructor(private dummyService: DummyService) {}

  /**
   * on input value changes
   */
  onInputChange(event: unknown) {

  }
}
