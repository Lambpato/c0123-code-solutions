export default function get2ndFromTop(stack) {
  const top = stack.pop();
  if (top === undefined) return;
  const next = stack.peek();
  stack.push(top);
  return next;
}
