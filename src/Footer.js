import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  const isHomePage = () => {
    return location.pathname === "/";
  };

  return (
    <>
      <footer id="footer" className="d-flex justify-content-around my-5">
        {isHomePage() ? (
          <>
            <div className="d-flex flex-column">
              <strong>AGROMAN</strong>
              <a href="#home">Agricultural solutions</a>
              <a href="#home">Romania</a>
              <a href="#home">Social</a>
            </div>
            <div className="d-flex flex-column">
              <strong>Company</strong>
              <a href="#about">About Us</a>
              <a href="#about">Contact Us</a>
              <a href="#home">Careers</a>
            </div>
            <div className="d-flex flex-column">
              <strong>Resources</strong>
              <a href="#calculator">Dilution Calculator</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Subscribe</a>
            </div>
          </>
        ) : (
          <>
            <div className="d-flex flex-column">
              <Link to="/">
                <strong>AGROMAN</strong>
              </Link>
              <Link to="/">Agricultural solutions</Link>
              <Link to="/">Romania</Link>
              <Link to="/">Social</Link>
            </div>
            <div className="d-flex flex-column">
              <Link to="/">
                <strong>Company</strong>
              </Link>
              <Link to="/">About Us</Link>
              <Link to="/">Contact Us</Link>
              <Link to="/">Careers</Link>
            </div>
            <div className="d-flex flex-column">
              <Link to="/">
                <strong>Resources</strong>
              </Link>
              <Link to="/">Dilution Calculator</Link>
              <Link to="/">Blog</Link>
              <Link to="/">Subscribe</Link>
            </div>
          </>
        )}
      </footer>
      <div className="d-flex flex-row justify-content-center my-5">
        <p className="lead">© 2023 Copyright: Agroman</p>
        <p className="lead">All rights reserved</p>
      </div>
    </>
  );
}
