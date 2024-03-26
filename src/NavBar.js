import React, { useState, useEffect } from "react";
import MediaQuery from "react-responsive";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  const location = useLocation();

  const isHomePage = () => {
    return location.pathname === "/";
  };

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

  const scrollToTarget = (id, e) => {
    e.preventDefault();
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const element = document.getElementById(id);
    const offsetTop = element.offsetTop - navbarHeight;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <nav className={`navbar navbar-expand-lg ${navbarClass} fixed-top`}>
      <div className="container">
        <nav>
          {
            <ul className="navbar-nav">
              {isHomePage() ? (
                <>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${navbarClass}`}
                      href="#home"
                      onClick={(e) => scrollToTarget("home", e)}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item mx-4">
                    <a
                      className={`nav-link ${navbarClass}`}
                      href="#about"
                      onClick={(e) => scrollToTarget("about", e)}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item mx-4">
                    <a
                      className={`nav-link ${navbarClass}`}
                      href="#blog"
                      onClick={(e) => scrollToTarget("blog", e)}
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item mx-4">
                    <a
                      className={`nav-link ${navbarClass}`}
                      href="#calculator"
                      onClick={(e) => scrollToTarget("calculator", e)}
                    >
                      Dilution Calculator
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <Link to="/" className={`nav-link ${navbarClass}`}>
                    Home
                  </Link>
                  <Link to="/" className={`nav-link mx-4 ${navbarClass}`}>
                    About
                  </Link>
                  <Link to="/" className={`nav-link mx-4 ${navbarClass}`}>
                    Blog
                  </Link>
                  <Link to="/" className={`nav-link mx-4 ${navbarClass}`}>
                    Dilution Calculator
                  </Link>
                </>
              )}
            </ul>
          }
        </nav>
        <div id="logo" className="nav-item">
          <strong>AGROMAN</strong>
        </div>
      </div>
      {/*<nav className="nav-bg-scroll">
        <button onClick={toggleMobileMenu} className="btn btn-dark cta-button">
          Menu
        </button>
        {isMobileMenuVisible && (
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link nav-bg-scroll">Home</Link>
            </li>
          </ul>
        )}
        </nav>*/}
    </nav>
  );
}
