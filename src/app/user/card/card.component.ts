import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../shared/user';

@Component({
  selector: 'user-card',
    templateUrl: './card.component.html'
  
})
export class CardComponent {
  @Input() user;
  @Input() isComplete = false;
  // @Output() isCompleteChange = new EventEmitter<boolean>();

  // onClick() {
  //   this.isCompleteChange.emit(false);
  // }
}

