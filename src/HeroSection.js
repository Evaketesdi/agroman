import React from "react";

export default function HeroSection() {
  return (
    <div id="home" className="hero-section text-color">
      <div className="col-lg-6 col-md-8 col-sm-11">
        <h1>
          <strong>
            HARVEST YOUR LAND'S POTENTIAL WITH PREMIUM AGRICULTURAL SOLUTIONS
          </strong>
        </h1>
        <br />
        <p>
          <strong>
            Discover the latest agricultural trends, insights, and stories from
            the heart of the farming community.
          </strong>
        </p>
        <br />
        <button type="button" className="btn btn-dark btn-lg cta-button">
          Request free consultation
        </button>
      </div>
    </div>
  );
}
