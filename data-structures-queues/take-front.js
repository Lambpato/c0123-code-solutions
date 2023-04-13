export default function takeFront(queue) {
  if (queue.peek() === undefined) return undefined;
  return queue.dequeue();
}
