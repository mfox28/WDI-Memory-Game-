//var cardOne= "queen";
//var cardTwo= "queen";
//var cardThree= "king";
//var cardFour= "king";

//if (cardOne === cardTwo) {
//	alert('You found a match!');
//} else {
//	alert('Sorry, try again.');
//}



var cards = ['queen', 'queen', 'king', 'king'];


var cardsInPlay = [];




var board = document.getElementById('game-board');

function createBoard() {
  
  for (var i=0; i<cards.length; i++) {
   
    var cardElement = document.createElement('div');
   
    cardElement.className = 'card';
		
    cardElement.setAttribute('data-card', cards[i]);
		
    cardElement.addEventListener('click', isTwoCards);

    
    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }

}

function isTwoCards() {
  
  cardsInPlay.push(this.getAttribute('data-card'));
	
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='https://pixabay.com/static/uploads/photo/2015/08/11/11/57/spades-884197_960_720.png'>"; // king
	} else {
		this.innerHTML = "<img src='https://pixabay.com/static/uploads/photo/2015/08/11/11/57/spades-884203_960_720.png'>"; //queen
	}
  
  if (cardsInPlay.length === 2) {
    
    isMatch(cardsInPlay);
    
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();
