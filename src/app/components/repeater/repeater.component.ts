import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {RepeaterDataInterface} from "../../interfaces/repeater.interface";

@Component({
  selector: 'app-repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.scss']
})
export class RepeaterComponent {
  /**
   * emit the click
   */
  @Output()
  itemClick = new EventEmitter<MouseEvent>();

  /**
   * array of data
   */
  @Input()
  data: RepeaterDataInterface[] = [];

  /**
   * call bakc when item clicked
   */
  @HostListener('click', ['$event'])
  onItemClick(event: MouseEvent) {
    this.itemClick.emit(event);
  }
}
