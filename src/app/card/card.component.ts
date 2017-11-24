import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card;
  @Input() slot;
  @Input() shown;
  @Input() last;
  @Input() selected;
  @Output() addSelection = new EventEmitter();
}
