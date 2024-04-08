import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss']
})
export class CardDeckComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {img: string}, private dialogRef: MatDialogRef<CardDeckComponent>) {

  }
  ngOninit(){
    console.warn(this.data.img)
  }

  addCard(){
    this.dialogRef.close("add");
  }
}
