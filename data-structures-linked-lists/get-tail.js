export default function getTail(list) {
  while (list.next) list = list.next;
  return list.data;
}
