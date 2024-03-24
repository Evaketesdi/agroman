import React from "react";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="d-flex justify-content-around my-5">
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
      </footer>
      <div className="d-flex flex-row justify-content-center my-5">
        <p className="lead">© 2023 Copyright: Agroman</p>
        <p className="lead">All rights reserved</p>
      </div>
    </>
  );
}
