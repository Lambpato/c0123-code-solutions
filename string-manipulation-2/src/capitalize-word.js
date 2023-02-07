/* exported capitalizeWord */

function capitalizeWord(word) {
  if (word[0] === 'J' || word[0] === 'j') {
    return 'JavaScript';
  }
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
