export default function insertUnderTop(stack, value) {
  const top = stack.pop();
  if (top === undefined) return;
  stack.push(value);
  stack.push(top);
}
