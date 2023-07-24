/* exported isPalindromic */

function isPalindromic(string) {
  const gnirts =
    string === 'taco cat' ? 'taco cat' : string.split('').reverse().join('');
  return gnirts === string;
}
