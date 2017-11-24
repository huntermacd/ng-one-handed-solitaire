import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  deck = [];
  hand = [];
  selected = [];
  showGameEnd = false;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.newGame();
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

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  newGame() {
    this.selected.length = 0;
    this.appService.loadDeck()
    .subscribe(deck => {
      this.deck = this.shuffle(deck);
      this.hand.length = 0;
      this.showGameEnd = false;
      this.draw(4);
    });
  }

  async draw(num = 1) {
    this.selected.length = 0;
    await this.sleep(500);
    this.hand = [...this.hand, this.deck.shift()];

    if (num > 1) {
      for (let i = 1; i < num; i++) {
        await this.sleep(500);
        this.hand = [...this.hand, this.deck.shift()];
      }
    }
  }

  checkFill() {
    switch(this.hand.length) {
      case 3:
        this.draw(1);
        break;
      case 2:
        this.draw(2);
        break;
      case 1:
        this.draw(3);
        break;
      case 0:
        this.draw(4);
        break;
      default:
        return;
    }
  }

  score() {
    const len = this.hand.length;
    const cardA = this.hand[len - 1];
    const cardB = this.hand[len - 2];
    const cardC = this.hand[len - 3];
    const cardD = this.hand[len - 4];
    if (this.selected.length === 2) {
      if (cardA.suit === cardD.suit) {
        this.hand.splice(this.hand.indexOf(cardC), 2);
        this.checkFill();
      }
    } else {
      if (cardA.rank === cardD.rank) {
        this.hand.splice(len - 4);
        this.checkFill();
      }
    }
    this.selected.length = 0;
  }

  addSelection(card) {
    if (this.selected.includes(card)) {
      this.selected.splice(this.selected.indexOf(card), 1);
    } else {
      this.selected.push(card);
    }
  }

  endGame() {
    this.showGameEnd = true;
  }
}
