const deckk = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function() {
    return () => {
      const pickedCard = Math.floor(Math.random() * 52);
      const pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

const cardPickerr = deckk.createCardPicker();
const pickedCardd = cardPickerr();
console.log('card: ', pickedCardd.card, ' of ', pickedCardd.suit);

interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
const deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log('card: ', pickedCardd.card, ' of ', pickedCardd.suit);

// interface UIElement {
//   addClickListener(onclick: (this: void, e: Event) => void): void;
// }
// class Handle {
//   info: string;
//   onClickBad(this: Handle, e: Event) {
//     // this.info = e.message;
//     console.log('clicked!');
//   }
// }
// const handle = new Handle();
// uiElement.addClickListener(handle.onClickGood);
