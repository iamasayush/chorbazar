import { Link } from 'react-router-dom';
import { product } from '../component/product.js';

export const Home = ({ setCount }) => {
  const addToCart = (product) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    currentCart.push(product);
    localStorage.setItem('cart', JSON.stringify(currentCart));
    setCount((prevCount) => prevCount + 1); 
  };

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-items-center lg:gap-4 lg:p-4 lg:mx-4">
      {product.map((product, index) => (
        <div
          className="flex flex-col items-center lg:hover:bg-yellow-100 p-5 lg:p-10 lg:text-xl w-[100%] h-[100%]"
          key={index}
        >
          <Link to={`/${product.name.trim().toLowerCase().replace(/ /g, '')}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full lg:h-4/5"
            />
            <h1>{product.name} {product.price}</h1>
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="btn"
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};
