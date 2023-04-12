export default function getTop(stack) {
  if (!stack) return undefined;
  return stack.peek();
}
