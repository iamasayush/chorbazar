import { Link } from 'react-router-dom';
import { product } from '../component/product.js';

export const Home = ({ count, setCount }) => {
  const addToCart = (product) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    currentCart.push(product);
    localStorage.setItem('cart', JSON.stringify(currentCart));
    setCount((prevCount) => prevCount + 1); 
  };

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-items-center gap-4 p-4 mr-4 ml-4">
      {product.map((product, index) => (
        <div
          className="flex flex-col items-center lg:hover:bg-yellow-100 p-10 text-xl w-[100%] h-[100%]"
          key={index}
        >
          <Link to={`/${product.name.trim().toLowerCase().replace(/ /g, '')}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-4/5"
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
