/* eslint-disable no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import UserCard from './UserCard';

export default function User({ userId, onCancel }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  /* your code here (hint: useEffect) */

  useEffect(() => {
      const logJsonData = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
          if (!response.ok) throw new Error(`Error Code: ${response.status} Error Message: It Broken`);
          const dataJson = await response.json();
          setUser(dataJson);
        } catch (err) {
          setError(err);
          console.error('Error:', err.message)
        } finally {
          setIsLoading(false);
        }
      }
      logJsonData();
  }, [userId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <p>Error! {error.message}</p>;
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
