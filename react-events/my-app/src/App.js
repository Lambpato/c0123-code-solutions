import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <CustomButton color='red' text='i' onCustomClick={'Clicked Mid Red'} />
      <CustomButton color='green' text='know' onCustomClick={'Clicked Ugly Green'} />
      <CustomButton color='lightblue' text='react' onCustomClick={'Clicked Swag Blue'} />
      </header>
    </div>
  );
}

export default App;
