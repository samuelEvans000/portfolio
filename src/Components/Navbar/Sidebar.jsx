import "./Navbar.css";
import React, {useState, useEffect} from 'react';
import { Link } from 'react-scroll';

const Sidebar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    useEffect(() => {
      if (isMenuOpen) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    }, [isMenuOpen]);
  
  
    const closeMenu = () => {
      setMenuOpen(false);
    };
  
    return (
      <div className="menu">
        <div className="menuIcon" onClick={toggleMenu}>
          <img  src='/assets/menu.png'  />
        </div>
        <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
          {/* <div className="menuLogo">
            <img
              onClick={toggleMenu}
              className="Bmenu"
              src="/assets/Bmenu.png"
            />
          </div> */}
          <div className="menuList">
              <Link smooth={true} duration={500} onClick={closeMenu} to="home">
            <p>Home</p>
              </Link>
            <div className="blackLine" />
            <Link smooth={true} duration={500} onClick={closeMenu} to="about">
            <p> About</p>
            </Link>
            <div className="blackLine" />
            <Link smooth={true} duration={500} onClick={closeMenu} to="tech">
            <p>Tech Stack</p>
            </Link>
            <div className="blackLine" />
            <Link smooth={true} duration={500} onClick={closeMenu} to="projects">
            <p>Projects</p>
            </Link>
            <div className="blackLine" />
            <Link smooth={true} duration={500} onClick={closeMenu} to="achieve">
            <p>Achievements</p>
            </Link>
            <div className="blackLine" />
            <Link smooth={true} duration={500} onClick={closeMenu} to="contact">
            <p>Contact</p>
            </Link>
            <div className="blackLine" />
          </div>
        </div>
      </div>
    );
  };

export default Sidebar
