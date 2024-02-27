import React, { useState, useEffect } from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";

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
                  <Link to="/" className={`nav-link ${navbarClass}`}>
                    Home
                  </Link>
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
                <Link className="nav-link nav-bg-scroll">Home</Link>
              </li>
            </ul>
          )}
        </nav>
      </MediaQuery>
    </nav>
  );
}
