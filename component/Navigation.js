import {Link } from 'react-router-dom';

export default function Navigation({count}) {
  return (
    <>
      <nav className = "flex justify-between bg-gray-400 text-white text-2xl lg:text-3xl  mb-20 p-8 ">
        <Link to="/" className="nav">Home</Link> 
        <Link to="/about_us" className="nav">About Us</Link>
        <Link to="/cart" className="nav">Cart &#128722; : {count}</Link> 
      </nav>
    </>
  );
}
