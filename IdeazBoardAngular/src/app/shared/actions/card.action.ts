import { Action } from '@ngrx/store';
import { Card } from '../models/card';

export const ADD_CARD = '[CARD] Add';

export const REMOVE_CARD = '[CARD] Remove';

export const UPDATE_CARD = '[CARD] Update';

export const UPDATE_CARD_ID = '[CARD] Update Card ID';

export class AddCard implements Action {
  readonly type = ADD_CARD;
  constructor(public card: Card) {}
}

export class RemoveCard implements Action {
  readonly type = REMOVE_CARD;
  constructor(public id: number) {}
}
export class UpdateCard implements Action {
  readonly type = UPDATE_CARD;
  constructor(public card: Card) {}
}

export class UpdateCardId implements Action {
  readonly type = UPDATE_CARD_ID;
  constructor() {}
}

export type Actions = AddCard | RemoveCard | UpdateCard | UpdateCardId;
