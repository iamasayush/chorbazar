import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { thing } from './component/imports';
import { routes } from './component/Routing';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCount(storedCart.length);
  }, []);

  return (
    <BrowserRouter>
      <thing.Heading />
      <thing.Navigation count={count} />

      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route
            key={index}
            path={path}
            element={React.cloneElement(element, { count, setCount })}
          />
        ))}
      </Routes>

      <thing.Footer />
    </BrowserRouter>
  );
}
