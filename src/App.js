import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const blog = [
  {
    title: "Crop protection",
    text: "Weeds rob plants of water, sunlight and nutrients, while harmful insects and diseases can devastate crops, threating food production.",
  },
  {
    title: "Products",
    text: "There’s no one-size-fits-all when it comes to farming. As a result, every solution must be tailored to meet the needs of an individual farmer in a specific field. ",
  },
  {
    title: "Seeds & Traits",
    text: "In a world where bigger tends to mean better, some of the most important building blocks of civilization are often no larger than a few millimeters in size: seeds. These tiny organisms form the foundation of agriculture and hold the keys to delivering the food, fuel and fiber needed to sustain a growing world population. ",
  },
];

const ourTeam = [
  {
    id: 123456,
    image: "/images/peter.jpg",
    name: "Szappanyos Petru",
    function: "CEO & Founder",
    description: "Some text that describes me lorem ipsum ipsum lorem.",
    email: "jane@example.com",
  },
  {
    id: 123457,
    image: "/images/catalin.jpg",
    name: "Stoia Catalin",
    function: "Agronomist Engineer",
    description: "Some text that describes me lorem ipsum ipsum lorem.",
    email: "mike@example.com",
  },
  {
    id: 123458,
    image: "/images/eva.jpg",
    name: "Ketesdi Eva",
    function: "Customer Service Associate",
    description: "Some text that describes me lorem ipsum ipsum lorem.",
    email: "john@example.com",
  },
];

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Accordion data={blog} />
      <DilutionCalculator />
      <AboutUs />
      <SubscribeForm />
      <Footer />
    </div>
  );
};
function Button({ children }) {
  return <button className="col btn btn-dark cta-button">{children}</button>;
}
function NavBar() {
  const [scrolling, setScrolling] = useState(false);

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

  const navbarClass = scrolling ? "bg-scroll" : "bg-transparent text-color";

  return (
    <nav className={`navbar navbar-expand-lg ${navbarClass} fixed-top`}>
      <div className="container">
        <div className="nav-item">
          <a className="nav-link" href="#">
            <strong>AGROMAN</strong>
          </a>
        </div>
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <a className={`nav-link ${navbarClass}`} href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${navbarClass}`} href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className={`nav-link ${navbarClass}`}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <div className="hero-section text-color">
      <div className="hero-content">
        <h1>
          <strong>
            HARVEST YOUR LAND'S POTENTIAL WITH PREMIUM AGRICULTURAL SOLUTIONS
          </strong>
        </h1>
        <p>
          <strong>
            Whether you're a seasoned farmer or a gardening enthusiast, we have
            the tools and supplies you need to cultivate succes.
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

function Accordion({ data }) {
  return (
    <div className="accordion container my-5">
      {data.map((el) => (
        <AccordionItem title={el.title} text={el.text} key={el.title} />
      ))}
    </div>
  );
}

function AccordionItem({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div
      className={`item ${isOpen ? "open" : ""} text-color card my-3 px-3`}
      onClick={handleToggle}
    >
      <div className="title py-2">
        <p className="title">{title}</p>
        <p>{isOpen ? "-" : "+"}</p>
      </div>

      {isOpen && <div className="content-box py-3">{text}</div>}
    </div>
  );
}

function DilutionCalculator() {
  const [productAmunt, setProductAmount] = useState("");
  const [concentration, setConcentration] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div id="accordion" className="container text-color my-5">
      <div className="card text-color" onClick={handleToggle}>
        <h2 className="card-header">Dilution calculator</h2>
        <div className="card-text">
          <a
            className="btn text-color"
            data-bs-toggle="collapse"
            href="#collapseCalc"
          >
            <p>Check it out 👇</p>
          </a>
        </div>
        {isOpen && (
          <div
            id="collapseCalc"
            className="collapse show"
            data-bs-parent="#accordion"
          >
            <div className="container row card-body text-color">
              <form className="container col my-3">
                <div className="row">
                  <div className="col">
                    1. Know the required amount of product and the recommended
                    concentration of the spraying solution. What amount of water
                    should you use to prepare the spray solution?
                  </div>
                </div>
                <div className="row my-3">
                  <label className="col form-label">
                    Enter the amount of product expressed in grams or ml:
                  </label>
                  <input
                    type="text"
                    value={productAmunt}
                    onChange={(e) => setProductAmount(Number(e.target.value))}
                    className="col"
                  ></input>
                </div>
                <div className="row my-3">
                  <label className="col form-label">
                    Enter the recommended concentration of the spray solution:
                  </label>
                  <input
                    type="text"
                    value={concentration}
                    onChange={(e) => setConcentration(Number(e.target.value))}
                    className="col"
                  ></input>
                </div>
                <div className="row my-3">
                  <div className="col"></div>
                  <Button>Calculate</Button>
                </div>
                <div className="row my-3">
                  <div className="col">The required amount of water is:</div>
                  <input type="text" className="col"></input>
                </div>
              </form>
              <div className="col-1"></div>
              <form className="container col my-3">
                <div className="row">
                  <div className="col">
                    2. Know the amount of solution required (the volume of the
                    spray pump) and the recommended concentration. What amount
                    of product should you use to prepare the spray solution?
                  </div>
                </div>
                <div className="row my-3">
                  <label className="col form-label">
                    Enter the amount of solution expressed in liters:
                  </label>
                  <input type="text" className="col"></input>
                </div>
                <div className="row my-3">
                  <label className="col form-label">
                    Enter the recommended concentration of the spray solution:
                  </label>
                  <input type="text" className="col"></input>
                </div>
                <div className="row my-3">
                  <div className="col"></div>
                  <Button>Calculate</Button>
                </div>
                <div className="row my-3">
                  <div className="col">The required amount of product is:</div>
                  <input className="col"></input>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AboutUs() {
  const team = ourTeam;
  return (
    <div className="container text-color my-5">
      <h2>Our Team</h2>
      <div className="row">
        {team.map((team) => (
          <Team team={team} key={team.id} />
        ))}
      </div>
    </div>
  );
}
function Team({ team }) {
  return (
    <div className="col">
      <div className="card">
        <img className="card-img-top" src={team.image} alt={team.name}></img>
        <div className="card-body text-color">
          <h2 className="card-title">{team.name}</h2>
          <p className="card-text">{team.function}</p>
          <p className="card-text">{team.description}</p>
          <p className="card-text">{team.email}</p>
          <p>
            <Button>Contact</Button>
          </p>
        </div>
      </div>
    </div>
  );
}

function SubscribeForm() {
  const [userRating, setUserRating] = useState("");
  return (
    <form
      className="text-color text-center container card my-5"
      style={{ width: "35%" }}
    >
      <h4 className="card-body">
        <strong>STAY INFORMED AND INSPIRED - SUBSCRIBE NOW</strong>
      </h4>
      <p className="card-body">
        Our newsletter is a valuable resource for staying informed and inspired
        on your agricultural journey. Don't miss out – subscribe now and reap
        the benefits of being part of our growing family.
      </p>
      <div className="row card-body">
        <div className="col">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <button type="submit" className="btn btn-dark col cta-button">
          Subscribe
        </button>

        <div className="mt-5">
          <p>Give us a review</p>
          <>
            <StarRating maxRating={5} size={24} onSetRating={setUserRating} />
          </>
        </div>
      </div>
    </form>
  );
}

function Footer() {
  return (
    <footer className="container my-5 text-color text-center row">
      <div className="col text-center">
        <strong>AGROMAN</strong>
      </div>
      <div className="col text-center">
        <p>You can find us in Sighisoara, Romania</p>
        <p className="lead">2023 Copyright: Agroman</p>
        <p className="lead">All rights reserved</p>
      </div>
      <div className="col text-center">
        <p>
          <strong>Get connected with us</strong>
        </p>
      </div>
    </footer>
  );
}

export default App;
