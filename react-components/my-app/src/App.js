import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form
         action="https://www.youtube.com/embed/BBJa32lCaaY"
         method="get"
         target="_blank">
          <button
          className="App-link"
          type="submit"
          rel="noopener noreferrer"
          >
            CLICK ME OR ELSE
            </button>
        </form>

      </header>
    </div>
  );
}

export default App;
