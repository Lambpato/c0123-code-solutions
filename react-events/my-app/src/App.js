import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
  alert(text);
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <CustomButton color='red' text='Pretty Cool Red' onCustomClick={handleCustomClick} />
      <CustomButton color='green' text='Less Cool Green' onCustomClick={handleCustomClick} />
      <CustomButton color='lightblue' text='WOAH SWAG BLUE' onCustomClick={handleCustomClick} />
      </header>
    </div>
  );
}



export default App;
