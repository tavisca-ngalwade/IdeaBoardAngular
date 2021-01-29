export interface Card {
  id: number;
  content: string;
  likes: number;
  type: CardType;
}

export enum CardType {
  A,
  B,
  C,
}
