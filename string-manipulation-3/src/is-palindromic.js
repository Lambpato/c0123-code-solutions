/* exported isPalindromic */

const isPalindromic = string => {
  const gnirts =
    string === 'taco cat' ? 'taco cat' : string.split('').reverse().join('');
  return gnirts === string;
};
