/* eslint-disable no-unused-vars -- Remove me */
import LinkedList from './lib/linked-list';

export default function prepend(list, value) {
  const newData = new LinkedList(value);
  newData.next = list;
  return newData;
}
