import { Card } from './models/card';

export interface AppState {
  cardId: number;
  card: Card[];
}
