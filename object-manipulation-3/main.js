console.log('Lodash is loaded:', typeof _ !== 'undefined');
function play(newPlayers, handSize) {
  const players = [];
  //  Making the deck
  const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  const deck = [];
  for (let i = 0; i < ranks.length; i++) {
    for (let o = 0; o < suits.length; o++) {
      deck.push({ rank: ranks[i], suit: suits[o] });
    }
  }
  //  Shuffling the deck
  let shuffledDeck = _.shuffle(deck);
  //  Updating players array with an object for each player. Each object has a name and hand property.
  for (let k = 0; k < newPlayers.length; k++) {
    players.push({ name: newPlayers[k], hand: [] });
  }
  //  Dealing cards to players 1 at a time to avoid 52 card hand infinite tie
  for (let u = 0; u < handSize; u++) {
    for (let g = 0; g < players.length; g++) {
      players[g].hand.push(shuffledDeck.shift());
      //  Shuffle new deck when deck runs out of cards
      if (shuffledDeck.length === 0) {
        shuffledDeck = _.shuffle(deck);
      }
    }
  }
  //  Calculating hand value of each player
  const final = [];
  let handValue = 0;
  for (let b = 0; b < players.length; b++) {
    for (let c = 0; c < players[b].hand.length; c++) {
      if (
        players[b].hand[c].rank === 'Jack' ||
        players[b].hand[c].rank === 'Queen' ||
        players[b].hand[c].rank === 'King'
      ) {
        handValue += 10;
      }
      if (players[b].hand[c].rank === 'Ace') {
        handValue += 11;
      }
      if (typeof players[b].hand[c].rank === 'number') {
        handValue += players[b].hand[c].rank;
      }
    }
    final.push(handValue);
    handValue = 0;
  }
  console.log('players and hands', players);
  console.log('score', final);
  //  Calculating winner
  let bigNum = 0;
  for (let f = 0; f < final.length; f++) {
    if (final[f] > bigNum) {
      bigNum = final[f];
    }
  }
  //  Takes care of tie breaker and announces winner
  let count = 0;
  const tiedPlayers = [];
  for (let t = 0; t < final.length; t++) {
    if (final[t] === bigNum) {
      count++;
      tiedPlayers.push(newPlayers[t]);
    }
  }
  if (count > 1) {
    console.log('tie between', tiedPlayers.join(' and '), 'with', bigNum);
    play(tiedPlayers, handSize);
  } else {
    const winner = final.indexOf(bigNum);
    console.log('The winner is', newPlayers[winner], 'with', bigNum + '!');
  }
}
play(['Spring', 'Summer', 'Fall', 'Winter'], 2);
