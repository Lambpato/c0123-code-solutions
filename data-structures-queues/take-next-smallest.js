export default function takeNextSmallest(numberQueue) {
  let nextSmallest = numberQueue.dequeue();
  while (nextSmallest > numberQueue.peek()) {
    numberQueue.enqueue(nextSmallest);
    nextSmallest = numberQueue.dequeue();
  }
  return nextSmallest;
}
