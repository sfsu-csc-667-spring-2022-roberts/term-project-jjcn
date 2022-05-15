class Player {
    constructor(id, uName, deck, turnNumber) {
        this.userID = id;
        this.username = uName;
        this.deck = deck;
        this.turnNumber = turnNumber;
    }

    isTurn(currTurn) {
        if(currTurn === this.turnNumber) {
            return true;
        }
    }

   
}
