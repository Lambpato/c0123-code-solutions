export default function take2nd(queue) {
  if (queue.peek() !== undefined) {
    const front = queue.dequeue();
    queue.enqueue(front);
  }
  return queue.dequeue();
}
