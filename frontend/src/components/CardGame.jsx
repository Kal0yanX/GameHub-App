import { useState } from "react";


const gamblingGame = () => {
    class Card {
        constructor(suit, values) {
            this.suit = suit;
            this.values = values;
            this.image = `../public/CardImages/${values}_of_${suit}.png`
            if (suit == 'spades' || suit == 'clubs') {this.color = 'black'}
            else {this.color = 'red'}
        }
    
    }
    class Deck {
        constructor() {
            this.suits = ["spades", "hearts", "diamonds", "clubs"];
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
                "jack",
                "queen",
                "king",
                "ace",
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
    const game = 'gambling game'
    const [score, setScore] = useState(200)
    const dealer = new Deck();
    dealer.shuffleDeck();
    const [hand1, setHand1] = useState([]);
    const [hand2, setHand2] = useState([]);
    const tmp = [];
    
    function deal() {
        setScore(score-2)
        
        while (hand1.length < 3) {
            tmp.push(dealer.deck.splice(Math.floor(Math.random() * dealer.deck.length - 1), 1)[0]);
            let card = tmp.pop()
            console.log(card)
            setHand1(hand1.push(card))
        };
    
        while (hand2.length < 3) {
            tmp.push(dealer.deck.splice(Math.floor(Math.random() * dealer.deck.length - 1), 1)[0]);
            let card = tmp.pop()
            hand2.push(card);
        }

        
        let firstCard = document.getElementById('first card')
        firstCard.src = hand1[0].image
        let secondCard = document.getElementById('second card')
        secondCard.src = hand1[1].image
        let thirdCard = document.getElementById('third card')
        thirdCard.src = hand1[2].image
        document.getElementById('first card').onclick = function(e){
            compareCards(hand1[0], hand2[0], score, setScore)
        }
        document.getElementById('second card').onclick = function(e){
            compareCards(hand1[1], hand2[1], score, setScore)
        }
        document.getElementById('third card').onclick = function(e){
            compareCards(hand1[2], hand2[2], score, setScore)
        }

        document.getElementById('submit score').onclick = function(e){
            console.log(`submitting at ${score}`)
        }
        setHand1([])
        setHand2([])
    }

    function compareCards(visibleCard, hiddenCard, score, setScore) {
        if (visibleCard.values == hiddenCard.value && visibleCard.color == hiddenCard.color) {
            return setScore(Score+18)
        } else if (visibleCard.values == hiddenCard.value) {
            return setScore(score+8)
        } else if (visibleCard.suit == hiddenCard.suit) {
            return setScore(score+3)
        } else if (visibleCard.color == hiddenCard.color) {
            return setScore(score-1)
        } else {
            return setScore(score-2)
        }
        
    }
    
    //need to make game where user starts with $10, each new hand/gamble costs $2 dollars.

    //"cash out" end game to track score.

    return(
        <div>
            <button onClick={deal}>Deal cards</button>
            <h2>{score}</h2>
            <div id="visible cards">
                <button id="first button">
                    <img id="first card" alt="first card" width='150px'/>
                </button>
                <button id="second button">
                    <img id="second card" alt="second card" width='150px'/>
                </button>
                <button id="third button">
                    <img id="third card" alt="third card" width='150px'/>
                </button>
            </div>
            <button id="submit score">Submit score</button>
        </div>
    )
}

export default gamblingGame
