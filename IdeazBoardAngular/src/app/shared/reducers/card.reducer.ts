import { AppState } from '../app.state';
import { Card } from '../models/card';
import * as CardActions from './../actions/card.action';

const initialState = {
  cardId: 0,
  card: [],
};

export function reducer(
  state: AppState = initialState,
  action: CardActions.Actions
) {
  let cards: Card[] = [];
  switch (action.type) {
    case CardActions.ADD_CARD:
      return { ...state, card: [...state.card, action.card] };
    case CardActions.REMOVE_CARD:
      cards = state.card.filter((card) => card.id != action.id);
      state = { ...state, card: cards };
      return state;
    case CardActions.UPDATE_CARD:
      cards = state.card.map((card) =>
        card.id === action.card.id
          ? { ...card, content: action.card.content, likes: action.card.likes }
          : card
      );
      state = { ...state, card: cards };
      return state;
    case CardActions.UPDATE_CARD_ID:
      state = { ...state, cardId: state.cardId + 1 };
    default:
      return state;
  }
}
