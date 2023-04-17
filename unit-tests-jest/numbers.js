/**
 * Returns a new array that contains only the even numbers in the given array.
 */
export function evenNumbers(numbers) {
  return numbers.filter(n => !(n % 2));
}

/**
 * Returns a number formatted in dollars and cents.
 */
export function toDollars(amount) {
  return `$${amount.toFixed(2)}`;
}

/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 * @param {Array} numbers The array of numbers to be divided by the divisor.
 * @param {number} divisor The number to divide into each element of `numbers`.
 * @returns a new array.
 */
export function divideBy(numbers, divisor) {
  const ans = numbers.map(num => num / divisor);
  return ans;
}

/**
 * Modifies an object by multiplying the value of each key, but only if that
 * value is a number. Key names are arbitrary.
 * @param {Object} obj The object to modify.
 * @param {number} multiplier The number to multiply by.
 * @returns the input object.
 */
export function multiplyBy(obj, multiplier) {
  const result = {};
  Object.entries(obj).forEach(([key, value]) => {
    result[key] = value * multiplier;
  });
  return result;
}
