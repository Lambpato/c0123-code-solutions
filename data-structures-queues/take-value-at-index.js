export default function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return undefined;
  while (index >= 1) {
    const front = queue.dequeue();
    queue.enqueue(front);
    index--;
  }
  return queue.dequeue();
}
