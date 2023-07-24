import React, { useEffect, useCallback, useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const getData = useCallback(() => {
    return { foo: 'bar' };
  }, []);

  useEffect(() => {
    getData();
    setCounter(prev => prev + 1);
  }, [getData]);

  return <div>Fetching {counter} times</div>;
}
