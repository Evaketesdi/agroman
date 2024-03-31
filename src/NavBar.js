import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

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
    <Navbar
      expand="lg"
      variant="light"
      bg={scrolling ? "light" : "transparent"}
      className={`fixed-top ${navbarClass}`}
    >
      <Container>
        <Navbar.Brand className="text-color">AGROMAN</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={toggleMobileMenu}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={isMobileMenuVisible ? "show" : ""}
        >
          <Nav className="ms-auto">
            {isHomePage() ? (
              <>
                <Nav.Link
                  href="#home"
                  onClick={(e) => scrollToTarget("home", e)}
                  className="text-color mx-4"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#about"
                  onClick={(e) => scrollToTarget("about", e)}
                  className="text-color mx-4"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  href="#blog"
                  onClick={(e) => scrollToTarget("blog", e)}
                  className="text-color mx-4"
                >
                  Blog
                </Nav.Link>
                <Nav.Link
                  href="#calculator"
                  onClick={(e) => scrollToTarget("calculator", e)}
                  className="text-color ms-4"
                >
                  Dilution Calculator
                </Nav.Link>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
