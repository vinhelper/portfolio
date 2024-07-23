import { FaBars } from "react-icons/fa";

import PropTypes from "prop-types";
import ScrollspyNav from "react-scrollspy-nav";

import MyImage from "../assets/images/me.jpg";

function Navbar({ isOpen, setIsOpen }) {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ScrollspyNav
      scrollTargetIds={["home", "services", "work", "about", "contact"]}
      offset={0}
      activeNavClass="text-brand"
      scrollDuration="500"
      headerBackground="false"
    >
      <nav className="z-10 bg-base shadow-lg fixed w-full lg:fixed lg:rounded-r-sm lg:flex lg:min-h-screen lg:w-[240px] lg:bg-gradient-to-r lg:from-base lg:to-base2 lg:bg-cover lg:bg-center lg:bg-side-bar">
        <div className="flex flex-row flex-wrap max-w-screen-xl justify-between items-center my-auto lg:content-center mx-auto lg:p-2 md:p-6 p-2 lg:justify-center lg:flex-column lg:w-[240px]">
          <a href="#" className="block">
            <img
              src={MyImage}
              className="hidden lg:block rounded-full w-3/4 mx-auto border-8 border-solid border-brand"
              alt="profile_pic"
            />
            <p className="font-bold text-center ml-2 lg:m-0 lg:mt-4">
              ARVIN JAY NADAL
            </p>
          </a>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center p-2 justify-center focus:outline-none focus:rounded-lg hover:bg-gray-500"
            >
              <FaBars size={25} color="#d4e6f1" />
            </button>
          </div>
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-8 md:top-16 left-0 p-4 w-full bg-base border-t-2 lg:border-t-0 lg:block lg:static lg:bg-transparent my-6 flex lg:flex flex-col lg:justify-center lg:items-center gap-4`}
          >
            <li>
              <a href="#home" className="block font-bold hover:text-brand">
                HOME
              </a>
            </li>
            <li>
              <a href="#services" className="block font-bold hover:text-brand">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#work" className="block font-bold hover:text-brand">
                WORK
              </a>
            </li>
            <li>
              <a href="#about" className="block font-bold hover:text-brand">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#contact" className="block font-bold hover:text-brand">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </ScrollspyNav>
  );
}

Navbar.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default Navbar;
