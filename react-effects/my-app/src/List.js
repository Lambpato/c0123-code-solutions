/* eslint-disable no-unused-vars -- REMOVE ME */
import { useEffect, useState } from 'react';
import readItems from './read';

export default function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState();

  // Your code here:
  //  - When the component mounts:
  //    - Read the items using `readItems` and update state so the list displays
  //    - Handle errors from `readItems`

  useEffect(() => {
    if (isLoading) {
      const promise = readItems();

      promise
      .then((value) => {
        setItems(value);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }}, [isLoading]);


  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <ul>
      {items.map((item) => <li key={item.id}>{item.id}: {item.name}</li>)}
    </ul>
  );
}
