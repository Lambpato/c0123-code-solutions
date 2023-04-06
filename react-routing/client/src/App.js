import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Catalog from "./pages/Catalog";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";


function App() {
  return (
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Catalog />} />
            <Route path='details/:productId' element={<ProductDetails />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
  );
}

export default App;
