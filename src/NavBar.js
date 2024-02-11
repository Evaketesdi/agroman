import React, { useState, useEffect } from "react";
import MediaQuery from "react-responsive";

export default function NavBar() {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisibility((prevVisibility) => !prevVisibility);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = scrolling ? "nav-bg-scroll" : "bg-transparent text-color";

  return (
    <nav className={`navbar navbar-expand-lg ${navbarClass} fixed-top`}>
      <div className="container">
        <MediaQuery minWidth={1000}>
          <nav>
            {
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className={`nav-link ${navbarClass}`} href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${navbarClass}`} href="#blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${navbarClass}`} href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className={`nav-link ${navbarClass}`}>
                    Contact
                  </a>
                </li>
              </ul>
            }
          </nav>
          <div className="nav-item">
            <strong>AGROMAN</strong>
          </div>
        </MediaQuery>
      </div>
      <MediaQuery maxWidth={1000}>
        <nav className="nav-bg-scroll">
          <button
            onClick={toggleMobileMenu}
            className="btn btn-dark cta-button"
          >
            Menu
          </button>
          {isMobileMenuVisible && (
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className="nav-link nav-bg-scroll" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-bg-scroll" href="#blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-bg-scroll" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link nav-bg-scroll">
                  Contact
                </a>
              </li>
            </ul>
          )}
        </nav>
      </MediaQuery>
    </nav>
  );
}
