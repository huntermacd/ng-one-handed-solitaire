import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  deck = [];
  tableau = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.loadDeck()
      .subscribe(deck => this.deck = deck);
  }

  shuffle(deck) {
    let m = deck.length, t, i;

      while (m) {
        i = Math.floor(Math.random() * m--);

        t = deck[m];
        deck[m] = deck[i];
        deck[i] = t;
      }

      return deck;
  }

  newGame() {
    this.deck = this.shuffle(this.deck);
    this.tableau = this.deck.slice(0, 4);
    this.deck = this.deck.slice(4);
  }
}
