import './App.css';
import Accordion from './Accordion';

function App() {
  const lang = [
    {
      key: 1,
      name: 'Hypertext Markup Language',
      details: 'The HyperText Markup Language or (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web (WWW).'
    },
    {
      key: 2,
      name: 'Cascading Style Sheet',
      details: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web (WWW), alongside HTML and JavaScript.'
    },
    {
      key: 3,
      name: 'JavaScript',
      details: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that confroms to the ECMAScript specification. JavaScript has curly-bracket sintax, dynamic typing, prototype-based object-orientaion, and first-class functions'
    }
  ]
  return (
    <Accordion lang={lang} />
  );
}

export default App;
