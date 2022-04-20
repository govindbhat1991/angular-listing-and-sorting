import {Component} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {RepeaterDataInterface} from "../interfaces/repeater.interface";
import {DummyService} from "../services/dummy.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  /**
   * to destroy the subscription when component destroyed
   */
  private destroyed$ = new Subject<string>();

  /**
   * repeater data
   */
  data$: Observable<RepeaterDataInterface[]> = this.dummyService.getData();

  constructor(private dummyService: DummyService) {}

  /**
   * click method
   */
  showClicked(event: any) {
    alert(event.target.innerText);
  }
}
