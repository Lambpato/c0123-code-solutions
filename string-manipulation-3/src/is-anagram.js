/* exported isAnagram */

function isAnagram(firstString, secondString) {
  const fString = firstString.split('').sort();
  const sString = secondString.split('').sort();
  console.log(fString);
  console.log(sString);
  for (let i = 0; i < fString.length; i++) {
    if (fString[i] !== sString[i]) {
      return false;
    }
  }
  return true;
}
