import { useState } from 'react';
import Counter from './Counter';
import Timer from './Timer';

function App() {
  const [part1, setPart1] = useState(true);
  const text = part1 ? 'Switch to Part2' : 'Switch to Part 1';
  return (
    <div className="m-5 d-inline-flex flex-column gap-5">
      {part1 && <Timer />}
      {!part1 && <Counter />}
      <button onClick={() => setPart1(!part1)}>{text}</button>
    </div>
  );
}

export default App;
