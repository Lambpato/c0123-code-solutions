export default function takeSmaller(queue) {
  const first = queue.dequeue();
  if (first === undefined) return undefined;
  const next = queue.dequeue();
  if (next === undefined) return first;
  if (first > next) {
    queue.enqueue(first);
    return next;
  }
  queue.enqueue(next);
  return first;
}
