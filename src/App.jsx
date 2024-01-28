import { useState } from "react";
import "./App.css";
import Page from "./cine/Page";
import { MovieContext, ThemeContext } from "./context";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <MovieContext.Provider value={{ cartData, setCartData }}>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <Page />
      </ThemeContext.Provider>
    </MovieContext.Provider>
  );
}

export default App;
