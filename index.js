//Coding Steps:
//For the final project you will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. In this version there are only 2 players.
//You do not need to do anything special when there is a tie in a round.
//Think about how you would build this project and write your plan down. Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.
//You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input inside of your browser's console.
//objcetive of the game is to win all of the cards 

// game
// playRound {
//     * check and compare the 2 cardds
//     * Add points based on outcome
//     * play next round
//     () //after all rounds - determine winner
// }
// //end game () {
//     play again?
//     congratulate winner
// }










//create cards components


class Card {
  constructor(face,suit,value) {
      this.face = face;
      this.suit = suit;
      this.value = value;
  }
}



//using OBJECT ORIENTED PROGRAMING TO CREATE GAME 
class Game {
  constructor() {
      this.player1 = {
          score: 0,
          hand: []
      },
      this.player2 = {
          score: 0,
          hand: []
      }
      this.prepareGame();
      this.playGame();
      this.endGAME();
  }

  //DYNAMIC METHOD TO CREATE DECK
  prepareGame() {
      let deck = [];
      let suits = [':heart:',':four_leaf_clover:',':gem:',':hocho:'];
      let faces = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];

      //this nested for loop method iterates between the two arrays above and 
      //dynamically creates a deck containing a product for each possible outcome 
      // a deck of 52 cards. 
      for (let x = 0; x < faces.length; x++) {
          for (let s = 0; s < suits.length; s++) {
              let card = new Card(faces[x],suits[s],x + 2)
              deck.push(card);
          }
      }

      // THIS METHOD SHUFFLES THE CARDS 
      //THSI IS ANOTHER FORloop method 
      for (let i = deck.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      //these two lines of code deal the deck of cards basically splits the deck
      //into two so that each player has a hand of cards 
      this.player1.hand = deck.splice(0,26);
      this.player2.hand = deck.splice(0,26);
  }
  //this method starts the game after the game is set up 
  playGame() {
    //THIS SECTION SETS THE CONDITIONS FOR THE GAME 
    //p1 and p2 for short 
    let p1 = this.player1;
    let p2 = this.player2;
    //FOR LOOP 
    // iterates through each object creating rounds 
    for (let x = 0; x < 26; x++) {
     console.log('player1', p1.hand[x].face,'vs',  'player2', p2.hand[x].face);
     //setting the rules for the game conditons using an if statement and adding up scores for each 
     //.... round.....
    if(p1.hand[x].value > p2.hand[x].value){
  p1.score += 1;
  console.log(`PLAYER 1 WINS THIS ROUND with a score of ${p1.score}`);
} else if (p2.hand[x].value > p1.hand[x].value){
 p2.score += 1;
 console.log(`PLAYER 2 WINS THIS ROUND witha score of ${p2.score}`);
} else {
  console.log('THIS ROUND IS A TIE');
}
 }
// DETERMINE FINAL WINNER..........

  if(p1.score > p2.score){
    console.log(`CONGRATS PLAYER 1!!!!${p1.score}`);
  }
else {
  console.log(`CONGRATS PLAYER 2!! ${p2.score}`);
}
}
endGAME(){console.log('GAME OVER ')
}
}






//invoke the function to run bellow 



let war = new Game();





