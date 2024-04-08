import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDeckComponent } from '../modal-deck/modal-deck.component';


@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent {
  constructor( private dialog: MatDialog){}

  @Input() nameDeck: string = '';
  @Input() cards: Array<any> = [];
  @Input() deck: Array<any> = [];

  miniCards: Array<any> = [];
  returnCard(){
    for(let card of this.cards){
      this.miniCards.push(card.images.small)
    }
    return this.miniCards;
  }

  viewFullDeck(){
    const dialogRef = this.dialog.open(ModalDeckComponent, {
      data: {deck: this.deck},
      height: '800px',
      width: '800px',
    })
  }
}
