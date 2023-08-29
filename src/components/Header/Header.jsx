import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-scroll";



const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter  paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >

    <a href="#home">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Home
      </Link>
    </a>

    <a href="#contact">
      <Link
        activeClass="active"
        to="contact"
       
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Contact
      </Link>
    </a>

    <a href="#residencies">
      <Link
        activeClass="active"
        to="residencies"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Residencies
      </Link>
    </a>

    <a href="#values">
      <Link
        activeClass="active"
        to="values"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Values
      </Link>
    </a>

    <a href="#getStarted">
      <Link
        activeClass="active"
        to="getStarted"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Get Started
      </Link>
    </a>

    <button className=" button">
      <a href="#contact">
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact Us
        </Link>
      </a>
    </button>
  </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30}/>
        </div>
      </div>
    </section>
  );
};

export default Header;
