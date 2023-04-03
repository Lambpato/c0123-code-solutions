import './App.css';
import Carousel from './Carousel';

const data = [{
  id: 1,
  name: 'Bulbasaur',
  imgUrl: '/images/001.png'
}, {
  id: 4,
  name: 'Charmander',
  imgUrl: '/images/004.png'
}, {
  id: 7,
  name: 'Squirtle',
  imgUrl: '/images/007.png'
}, {
  id: 25,
  name: 'Pikachu',
  imgUrl: '/images/025.png'
}, {
  id: 39,
  name: 'JigglyPuff',
  imgUrl: '/images/039.png'
}, {
  id: 134,
  name: 'Luffy',
  imgUrl: '/images/134.png'
}];

function App() {
  return (
   <Carousel data={data} />
  );
}

export default App;
