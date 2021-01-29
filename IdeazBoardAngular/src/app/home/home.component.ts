import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../shared/app.state';
import { Card, CardType } from '../shared/models/card';
import * as CardActions from './../../app/shared/actions/card.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  _state$: Observable<any>;
  cardId: number;
  constructor(private store: Store<AppState>) {
    this._state$ = store.select('card');
  }

  addCard(type: string) {
    switch (type) {
      case 'A':
        this.store.dispatch(
          new CardActions.AddCard(this.getEmptyCardWithType(type))
        );
        break;
      case 'B':
        this.store.dispatch(
          new CardActions.AddCard(this.getEmptyCardWithType(type))
        );
        break;
      case 'C':
        this.store.dispatch(
          new CardActions.AddCard(this.getEmptyCardWithType(type))
        );
        break;
    }
  }

  private getEmptyCardWithType(type: string) {
    this.store.dispatch(new CardActions.UpdateCardId());
    return {
      id: this.cardId,
      type: CardType[type],
      content: '',
      likes: 0,
    };
  }

  ngOnInit(): void {
    this._state$.subscribe((data) => {
      this.cardId = data.cardId;
    });
  }

  isTypeValid(cardType, type) {
    return cardType == type;
  }

  trackByCardId(index: number, card: any) {
    return card.id;
  }
}
