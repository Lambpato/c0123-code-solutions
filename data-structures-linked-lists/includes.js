export default function includes(list, value) {
  while (1) {
    if (list.data === value) return true;
    list = list.next;
    if (!list) return false;
  }

}
