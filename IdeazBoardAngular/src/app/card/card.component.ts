import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../shared/app.state';
import { Card } from '../shared/models/card';
import * as CardActions from './../../app/shared/actions/card.action';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  content: string;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  updateLikeCount() {
    this.card = { ...this.card, likes: this.card.likes + 1 };
    this.updateCard();
  }

  updateCardText() {
    this.card = { ...this.card, content: this.content };
    this.updateCard();
  }

  updateCard() {
    this.store.dispatch(new CardActions.UpdateCard(this.card));
  }

  deleteCard() {
    this.store.dispatch(new CardActions.RemoveCard(this.card.id));
  }
}
