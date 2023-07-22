export default function postpone(queue) {
  if (queue.peek() !== undefined) {
    const front = queue.dequeue();
    queue.enqueue(front);
  }
}
