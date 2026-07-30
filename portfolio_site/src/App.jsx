import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-bg text-body lg:grid lg:grid-cols-[300px_1fr]">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main id="content" className="min-w-0 pt-14 lg:pt-0" onClick={closeMenu}>
        <Home />
        <Services />
        <Work />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
