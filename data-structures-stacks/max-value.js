export default function maxValue(stack) {
  const top = stack.pop();
  let maxNum = top;
  if (top === undefined) {
    return -Infinity;
  }
  while (stack.peek() !== undefined) {
    if (stack.peek() > maxNum) {
      maxNum = stack.peek();
    }
    stack.pop();
  }
  return maxNum;
}
