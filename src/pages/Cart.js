import { useEffect, useState } from "react";

export const Cart = ({ count,setCount }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1); 
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
    setCart(updatedCart); 
    setCount(updatedCart.length); 
  };

  const getGrouped = () => {
    const grouped = cart.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.name === item.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);
    return grouped;
  };

  const groupedCart = getGrouped();

  return (
    <div className="p-4">
      <h1 className="text-6xl text-blue-700 font-bold text-center">Your Cart</h1>

      {groupedCart.length > 0 ? (
        <div className="lg:grid lg:grid-cols-6 gap-4 flex flex-col justify-items-center mb-24 mt-24">
          {groupedCart.map((item, index) => (
            <div key={index} className="card1">
              <img src={item.image} alt={item.name} className="img1" />
              <h2>{item.name}</h2>
              <p>Price: Rs.{item.price}</p>
              <p>Quantity: {item.quantity}</p>

              <button
                onClick={() => removeItem(index)}
                className="btn mt-2"
              >
                Remove
              </button>
            </div>
          ))}

          <p className="text-center col-span-6 lg:text-6xl font-bold">
            Your Total Amount is
            <span className="text-violet-800"> Rs.{count}</span>
            <br />

            But sorry,
            <br />
            You can't actually purchase,
            <br />
            It's just for fun
          </p>
        </div>
      ) : (
        <p className="flex items-center justify-center text-center lg:text-9xl text-6xl text-red-500 font-bold h-screen">
          It's empty! <br />
          Hurry up, add something
        </p>
      )}
    </div>
  );
};
