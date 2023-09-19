class Card {
    constructor(suit, values) {
        this.suit = suit;
        this.values = values;
    }

}
class Deck {
    constructor() {
        this.suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
        this.values = [
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King",
            "Ace",
        ];
        this.deck = [];
        this.suits.forEach((suit) => {
            this.values.forEach((value) => {
                const card = new Card(suit, value);
                this.deck.push(card);
            });
        });

    }

    shuffleDeck() {
        let currentIndex = this.deck.length,
          randomIndex;
    
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
    
          // And swap it with the current element.
          [this.deck[currentIndex], this.deck[randomIndex]] = [
            this.deck[randomIndex],
            this.deck[currentIndex],
          ];
        }
    }
}
const dealer = new Deck();
dealer.shuffleDeck();


const hand1 = [];
const hand2 = [];
const tmp = [];
const myHand = document.querySelector(".hd1 > .cards")
const otherHand = document.querySelector(".hd2 > .cards")
const request = document.querySelector("#request")

function deal() {
    while (hand1.length < 3) {
        tmp.push(dealer.deck.splice(Math.floor(Math.random() * dealer.deck.length - 1), 1)[0]);
        let card = tmp.pop()
        hand1.push(card);
        let fileName = `${card.values.toLowerCase()}_of_${card.suit.toLowerCase()}.png`
        let image = document.createElement("img")
        image.src = "assets/" + fileName
        image.setAttribute('value', card.values)
        image.setAttribute('suit', card.suit)
        addToHand(myHand, image)
        // if (!request.querySelector(`[value="${card.values}"]`)) {
        //     let option = document.createElement('option')
        //     option.value = card.values
        //     option.innerHTML = card.values
        //     request.appendChild(option)
        // }
    };

    while (hand2.length < 3) {
        tmp.push(dealer.deck.splice(Math.floor(Math.random() * dealer.deck.length - 1), 1)[0]);
        let card = tmp.pop()
        hand2.push(card);
        let fileName = `cardBack.png`
        let image = document.createElement("img")
        image.src = "assets/" + fileName
        image.setAttribute('value', card.values)
        image.setAttribute('suit', card.suit)
        otherHand.appendChild(image)
        // check4Set(card.values, otherHand)
    }
}

const btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    dealer.shuffleDeck()
    deal()
})



function addToHand(hand, image) {
    let value = image.getAttribute('value')
    let sameValue = hand.querySelector(`[value="${value}"]`)
    if (sameValue) {
        hand.insertBefore(image, sameValue)
    } else {
        hand.appendChild(image)
    }
}
//need to make game where user starts with $10, each new hand/gamble costs $2 dollars.
//player picks from 3 cards player owns, and 3 face down cards to try and match based
//off card color and number (+$20), same number (+$10), same suit (+$5),
//or same color (+$1)
//"cash out" end game to track score.