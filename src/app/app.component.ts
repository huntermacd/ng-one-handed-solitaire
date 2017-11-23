import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  deck = [];
  hand = [];

  constructor(private appService: AppService) { }

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
    this.appService.loadDeck()
      .subscribe(deck => {
        this.deck = this.shuffle(deck);
        this.hand = this.deck.slice(0, 4);
        this.deck = this.deck.slice(4);
      });
  }

  draw() {
    this.hand = [...this.hand, this.deck.shift()];
  }

  score() {}
}
