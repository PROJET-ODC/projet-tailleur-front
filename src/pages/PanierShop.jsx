import { useState } from "react";
import PostPage from "./PostPage";
import FaShoppingCart from "../components/principal/navbar/items/FaShoppingCart";

const App = () => {
    const [cart, setCart] = useState([]); // Assurez-vous que cart est un tableau
  
    const addToCart = (product) => {
      setCart((prevCart) => [...prevCart, product]);
      localStorage.setItem('cart', JSON.stringify([...cart, product]));
    };
  
    return (
      <div>
        <FaShoppingCart cart={cart} />
        <PostPage addToCart={addToCart} />
      </div>
    );
  };
  

export default App;
