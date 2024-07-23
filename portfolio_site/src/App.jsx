import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div id="content" className="lg:pl-[240px]" onClick={closeMenu}>
        <Home />
        <Services />
        <Work />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

// Component.propTypes = {
//   anyProp: PropTypes.any,
//   booleanProp: PropTypes.bool,
//   numberProp: PropTypes.number,
//   stringProp: PropTypes.string,
//   functionProp: PropTypes.func,
//   arrayProp: PropTypes.array,
//   objectPerop: PropTypes.object,
//   symbolProp: PropTypes.symbol,
// }
