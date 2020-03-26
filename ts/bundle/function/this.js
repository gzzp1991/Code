const deckk = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
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
const deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker() {
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
