import logo from './logo.svg';
import './App.css';
import HotButton from './HotButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <HotButton text={"Hot Button"} />
      </header>
    </div>
  );
}

export default App;
