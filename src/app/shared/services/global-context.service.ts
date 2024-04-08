import { Injectable } from '@angular/core';
import { Deck } from '../models/deck';

@Injectable({
  providedIn: 'root'
})
export class GlobalContextService {

  constructor() { }

  Decks: Array<Deck> = [];
  cards: Array<any> = [];

  getDeck(): Array<Deck> {
    return this.Decks;
  }

  removeDeckByName(name: string): void {
    const index = this.Decks.findIndex(deck => deck.name === name);
    if (index !== -1) {
      this.Decks.splice(index, 1);
    }
  }
}
