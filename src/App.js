import Heading from './component/Heading';
import Footer from './component/Footer';
import Navigation from './component/Navigation';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import {AboutUs} from './pages/AboutUs';
import {Contact} from './pages/Contact'

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCount(storedCart.length);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Heading />
        <Navigation count={count} />
        <Routes>
          <Route path="/" element={<Home count={count} setCount={setCount} />} />
          <Route path="/cart" element={<Cart setCount={setCount} />} />
          <Route path="/about_us" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
