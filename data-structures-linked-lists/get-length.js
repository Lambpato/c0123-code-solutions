export default function getLength(list) {
  let length = 0;
  while (list) {
    length++;
    list = list.next;
  }
  return length;
}
