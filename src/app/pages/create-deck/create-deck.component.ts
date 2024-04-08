import { Deck } from './../../shared/models/deck';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CardDeckComponent } from 'src/app/shared/components/card-deck/card-deck.component';
import { ModalCardVisualizeComponent } from 'src/app/shared/components/modal-card-visualize/modal-card-visualize.component';
import { Card } from 'src/app/shared/models/deck';
import { IGetCardsResponse } from 'src/app/shared/models/response';
import { GetCardsService } from 'src/app/shared/services/get-cards.services';
import { GlobalContextService } from 'src/app/shared/services/global-context.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.scss']
})
export class CreateDeckComponent implements OnInit {

  public cards: Card[] = [];
  public newDeck: Deck = {
    name: '',
    cards: []
  };
  public loadingCards = false;
  page = 1;
  pageSize = 50;

  valueFilterName!: string;

  cardsSelected: number = 0;

  formCards!: FormGroup;

  private unsubscribe$ = new Subject<void>();

  constructor(private fb: FormBuilder,private getCardsService: GetCardsService,private router: Router, private dialog: MatDialog, private globalContext: GlobalContextService) { }

  ngOnInit() {
    this.buildForm();
    this.getList();
    this.filterByName();

  }

  verfificaSePodeVisualizar(){
    if(this.cardsSelected === 0 && this.newDeck.cards.length === 0
       && (this.formCards.get('fullName1')?.value === null ||this.formCards.get('fullName1')?.value === '')){
        return true;
       }else{
        return false;
       }
  }

  public getList(name?: any) {
    this.loadingCards = true;
    if(name !== null && name !== ''){
      this.getCardsService.getCards(this.pageSize, this.page,name).subscribe((response: IGetCardsResponse) => {
        this.cards = response.data;
        this.loadingCards = false;
      });
    }else{
      this.getCardsService.getCards(this.pageSize, this.page).subscribe((response: IGetCardsResponse) => {
        this.cards = response.data;
        this.loadingCards = false;
      });
    }

  }

  onScroll() {
    console.log('Entrou no scroll')
    this.page++;
    this.loadingCards = true;
    if(this.valueFilterName !== null && this.valueFilterName !== ''){
      this.getCardsService.getCards(this.pageSize, this.page, this.valueFilterName).subscribe((response: IGetCardsResponse) => {
        this.cards.push(...response.data);
        this.loadingCards = false;
      });
    }else{
      this.getCardsService.getCards(this.pageSize, this.page).subscribe((response: IGetCardsResponse) => {
        this.cards.push(...response.data);
        this.loadingCards = false;
      });
    }
  }

  filterByName(){
    this.formCards.get('input1')?.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe( values =>{

      if(values.length > 3){
        console.log('values change: ', values);
        this.valueFilterName = values;
        this.getList(values);
      }

    })
  }

  addCard(card: any){
    const dialogRef = this.dialog.open(CardDeckComponent, {
      data: {img: card.images?.small},
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result === "add"){
        const cardWithSameName = this.newDeck.cards.filter(
          (c) => c.name === card.name
        );

        //Comparando com a lista de Cards, para validar e não permitir passar de 4 cards com o mesmo nome.
        if (cardWithSameName.length <= 3) {
          this.newDeck.cards.push(card);
          this.cardsSelected = this.cardsSelected + 1;
        } else{
          Swal.fire({
            icon: "error",
            title: "Você já atingiu o limite de 4 cartas com o mesmo nome neste deck!",
            timer: 1500,
            showConfirmButton: false,
          })
        }
      }
    })
  }

  buildForm(){
    this.formCards = this.fb.group({
      input1: [''],
      fullName1: ['']
    })
  }

  visualizarBaralho(){
    if(this.formCards.get('fullName1')?.value){
      this.newDeck.name = this.formCards.get('fullName1')?.value;
    const dialogRef = this.dialog.open(ModalCardVisualizeComponent, {
      height: '600px',
      width: '800px',
      data: {newDeck: this.newDeck},
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(result === "saveDeck"){
        this.createDeck();
      }
      if(result === 'excluirDeck'){
        this.formCards.get('fullName1')?.setValue(null);
        this.cardsSelected = 0;
        this.newDeck = {
          name: '',
          cards: []
        };
      }
    });

    }else{
      Swal.fire({
        icon: "error",
        title: "Você precisa criar nome do seu baralho!",
        timer: 3000,
        showConfirmButton: false,
      })
    }

  }

  validateDeckName(){
    return (this.newDeck.name != "");
  }

  createDeck(){
    if((this.newDeck.cards.length >= 4 && this.newDeck.cards.length <= 60) && this.validateDeckName()){
        let handlerDeck: Deck = {
          name: this.newDeck.name,
          cards: this.newDeck.cards
        }
        console.log('handlerDeck: ', handlerDeck)
        this.globalContext.Decks.push(handlerDeck);
        console.log('this.globalContext.Decks: ', this.globalContext.Decks)
        Swal.fire({
          icon: "success",
          title: "Deck criado com sucesso!",
          showConfirmButton: true,
          confirmButtonColor: '#004a94'
        }).then((result)=>{
          if(result.isConfirmed){
            this.router.navigate(['list-deck']);
          }
        });
    }else{
      Swal.fire({
        icon: "error",
        title: "O Deck deve possuir um nome e ter de 24 á 60 cartas!",
        confirmButtonColor: '#004a94'
      });
    }
  }
}
