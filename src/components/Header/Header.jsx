import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.webp";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <div className="header">
        <img src={Logo} alt="Header Logo" className="logo" />

        <div id="mobile" className="menu" onClick={() => {
          setMenuOpened(!menuOpened)
        }}>
          <i className={menuOpened ? "fas fa-times" : "fas fa-bars" } ></i>
          
        </div>

        <ul className={menuOpened ? "header-menu active" : "header-menu"}>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="home"
              // span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              // span={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Reasons"
              // span={true}
              smooth={true}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Plans"
              // span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              // span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
