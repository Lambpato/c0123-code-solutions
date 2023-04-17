
import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {

  it('returns the even numbers', () => {
    const input = [1, 4, 5, 10, 0];
    const result = evenNumbers(input);
    expect(result).toEqual([4, 10, 0]);
  });

  it('works with an empty array', () => {
    const input = [];
    const result = evenNumbers(input);
    expect(result).toEqual([]);
  });
});

describe('toDollars', () => {

  it('formats integers to dollars', () => {
    const result = toDollars(3);
    expect(result).toEqual('$3.00');
  });

  it('formats decimals with just two digits, rounding up', () => {
    const result = toDollars(5.399333);
    expect(result).toEqual('$5.40');
  });
});

describe('divideBy', () => {

  it('divides each element by the divisor', () => {
    const result = divideBy([2, 4, 6, 8], 2);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('does not modify the original array', () => {
    const nums = [3, 6, 2, 420];
    const result = divideBy(nums, 2);
    expect(result).toEqual([1.5, 3, 1, 210]);
    expect(nums).toEqual([3, 6, 2, 420]);
  });
});

describe('multiplyBy', () => {

  it('multiplies each number by the multiplier', () => {
    const obj = { joe: 1, mama: 2 };
    const result = multiplyBy(obj, 2);
    expect(result).toEqual({ joe: 2, mama: 4 });
  });

  it('does not modify the original object', () => {
    const obj = { one: 420, piece: 210 };
    const result = multiplyBy(obj, 2);
    expect(result).toEqual({ one: 840, piece: 420 });
    expect(obj).toEqual({ one: 420, piece: 210 });
  });
});
