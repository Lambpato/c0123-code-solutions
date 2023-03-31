import './App.css';
import AppDrawer from './AppDrawer';

function App() {
  const list = [
    { key: 1, name:'Devil Fruits'},
    { key: 2, name: 'Pirate Crews'},
    { key: 3, name: 'Characters'},
    { key: 4, name: 'Chapters'}
     ]
  return (
    <AppDrawer list={list}/>
  );
}

export default App;
