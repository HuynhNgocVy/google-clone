import { useState, useContext } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
import ResultSearchContext from "./contexts/ResultSearchContext";

function App() {
  

  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <ResultSearchContext>
      <div className={darkTheme ? 'dark' : '' } >
        <div className="bg-gray-100 dark:bg-gray-900">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Routes darkTheme={darkTheme}/> 
          <Footer darkTheme={darkTheme}/>
        </div>
      </div>
    </ResultSearchContext>
  );
}

export default App;
