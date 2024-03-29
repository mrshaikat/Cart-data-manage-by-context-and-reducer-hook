import { useContext, useState } from "react";
import Moon from "./assets/icons/moon.svg";
import Sun from "./assets/icons/sun.svg";
import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import ShoppingCartLogo from "./assets/shopping-cart.svg";
import ShoppingCart from "./cine/ShoppingCart";
import { MovieContext, ThemeContext } from "./context";

export default function Header() {

  const [showCart, setShowCart] = useState(false);
  const {state} = useContext(MovieContext);
  const {darkMode, setDarkMode} = useContext(ThemeContext);
  
  const handleShoppingCart = () =>{
    setShowCart(true);
    
  }

  return (
    <header>
      {showCart && <ShoppingCart onClose={()=>setShowCart(false)}/>}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={()=> setDarkMode(darkMode => !darkMode)}
            >
              <img
                src={darkMode ? Sun: Moon}
                width="24"
                height="24"
                alt=""
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleShoppingCart}
            >
              <img
                src={ShoppingCartLogo}
                width="24"
                height="24"
                alt=""
              />
              {state.cartData?.length > 0 && <span>{state.cartData?.length }</span>}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
