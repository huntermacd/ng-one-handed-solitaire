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
  selected = [];

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
    this.selected.length = 0;
    this.hand = [...this.hand, this.deck.shift()];
  }

  score() {}

  addSelection(card) {
    if (this.selected.includes(card)) {
      this.selected.splice(this.selected.indexOf(card), 1);
    } else {
      this.selected.push(card);
    }
  }
}
