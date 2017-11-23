import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppService } from './app.service';

/*

properties:

- deck
- numSelected
- tableau

UI:

- new game
- score
- end game

methods:

- newGame
- score
- endGame

*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  deck$: Observable<any>;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.deck$ = this.appService.loadDeck();
  }
}
