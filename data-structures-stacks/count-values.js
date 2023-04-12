export default function countValues(stack) {
  let count = 0;
  while (1) {
    if (stack.pop() === undefined) {
      return count;
    }
    count++;
  }
}
