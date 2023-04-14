/* eslint-disable no-unused-vars */
import LinkedList from './lib/linked-list.js';

export default function append(list, value) {
  while (list.next) list = list.next;
  const newData = new LinkedList(value);
  list.next = newData;
}
