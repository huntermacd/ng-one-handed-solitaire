import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DeckComponent } from './deck/deck.component';
import { CardComponent } from './card/card.component';
import { HandComponent } from './hand/hand.component';


@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    CardComponent,
    HandComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
