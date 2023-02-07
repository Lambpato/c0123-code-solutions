/* exported capitalize */

function capitalize(word) {
  var upperCase = [];
  var lowerCase = [];
  var newWord = [];

  upperCase.push(word.charAt(0).toUpperCase());
  lowerCase.push(word.slice(1).toLowerCase());
  newWord = upperCase + lowerCase;
  return newWord;
}

/* create a variable seperating the uppercased character
create a varaible seperating the lowercase variable
create a vaariable concatinating both the upperCase and lowerCase variables
have the value of the first index of the parameter get upperCased then pushed into the empty string
have the string get seperated from the first index and lowercase the rest of the string then push to the other empty string
assign both values with concatination to the empty string
return the concatinated value */
