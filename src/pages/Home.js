import {product} from "../component/product.js"

export const Home = ({count,setCount}) => {

    const addtoCart = (product) => 

    {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    currentCart.push(product);
    localStorage.setItem("cart",JSON.stringify(currentCart));
    setCount(count+1)
    }

    return(
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-items-center gap-4 p-4 mr-4 ml-4">
            {product.map((product,index) =>(
                <div className="card1" key = {index}>

                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className = "img1"
                    />

                    <h1>{product.name}</h1>
                    <h2>{product.price}</h2>

                    <button onClick = 
                        {() => addtoCart(product)} 
                        className = "btn">Add to cart
                    </button>

                </div>
            ))}
            
        </div>
    )
}
