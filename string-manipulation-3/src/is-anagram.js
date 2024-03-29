/* exported isAnagram */

function isAnagram(firstString, secondString) {
  const arr1 = firstString.replaceAll(' ', '').split('').sort();
  const arr2 = secondString.replaceAll(' ', '').split('').sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
