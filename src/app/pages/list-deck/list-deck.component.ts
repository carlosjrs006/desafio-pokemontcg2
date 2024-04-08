import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalContextService } from 'src/app/shared/services/global-context.service';

@Component({
  selector: 'app-list-deck',
  templateUrl: './list-deck.component.html',
  styleUrls: ['./list-deck.component.scss']
})
export class ListDeckComponent {

  constructor(public globalContext: GlobalContextService, private router: Router){}
  decks: any = [];
  exibeMsg = false;
  public loadingCards = false;

  ngOnInit(){
  this.decks = this.globalContext.getDeck();
 }


}
