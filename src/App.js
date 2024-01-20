import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MediaQuery from "react-responsive";

const blog = [
  {
    title: "Crop protection",
    text: "Weeds rob plants of water, sunlight and nutrients, while harmful insects and diseases can devastate crops, threating food production. Growers have always relied on a host of tools to fight these ever-present threats that account for up to 30 percent of the world's annual crop loss. Without the use of reliable crop protection solutions, those losses could be much higher – and threaten the stability of the world's food supply.",
    //image: "/images/cereal.jpg",
  },
  {
    title: "Products",
    text: "There’s no one-size-fits-all when it comes to farming. As a result, every solution must be tailored to meet the needs of an individual farmer in a specific field. This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Agroman, we’re driving research in biology, biotechnology, crop protection, and data science, allowing us to deliver tailored solutions to farmers faster than ever before. We’re using the resources at our fingertips to discover the science that’s yet to come. ",
    image: "",
  },
  {
    title: "Seeds & Traits",
    text: "In a world where bigger tends to mean better, some of the most important building blocks of civilization are often no larger than a few millimeters in size: seeds. These tiny organisms form the foundation of agriculture and hold the keys to delivering the food, fuel and fiber needed to sustain a growing world population. Through traditional and advanced breeding techniques, as well as research in biotechnology, we’re developing seeds and traits that provide farmers with new solutions. By making use of the natural genetic diversity within each crop family, we’re building crops that combat environmental challenges — like pests, disease, and drought — while providing more choice for consumers.",
    image: "",
  },
];

const calculator = [
  {
    title:
      "1. Know the required amount of product and the recommended concentration of the spraying solution. What amount of water should you use to prepare the spray solution?",
    input1: "Enter the amount of product expressed in grams or ml:",
    input2: "Enter recommended concentration (%) of the spray solution:",
    result: "The amount of Water needed is (liters)",
  },
  {
    title:
      "2. Know the amount of solution required (the volume of the spray pump) and the recommended concentration. What amount of product should you use to prepare the spray solution?",
    input1: "Enter the amount of solution expressed in liters:",
    input2: "Enter recommended concentration (%) of the spray solution:",
    result: "The required amount of product is (g/ml)",
  },
];

const ourTeam = [
  {
    id: 123456,
    image: "/images/peter.jpg",
    name: "Peter Doe",
    function: "CEO & Founder",
    description:
      "With his professional team, he offers help and support to all farmers.",
    email: "peter@example.com",
  },
  {
    id: 123457,
    image: "/images/catalin.jpg",
    name: "Mike Johnson",
    function: "Agronomist Engineer",
    description:
      "Our expert in agriculture will answer all your questions and concerns.",
    email: "mike@example.com",
  },
  {
    id: 123458,
    image: "/images/eva.jpg",
    name: "Jane Doe",
    function: "Customer Service Associate",
    description:
      "Contact our customer support if you want to know more about our services.",
    email: "jane@example.com",
  },
];

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Accordion data={blog} />
      <DilutionCalculator data={calculator} />
      <AboutUs />
      <SubscribeForm />
      <ScrollToTopArrow />
      <Footer />
    </div>
  );
};
function Button({ children, onClick }) {
  return (
    <button type="button" className="btn btn-dark cta-button" onClick={onClick}>
      {children}
    </button>
  );
}
function NavBar() {
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

  const navbarClass = scrolling ? "bg-scroll" : "bg-transparent text-color";

  return (
    <nav className={`navbar navbar-expand-md ${navbarClass} fixed-top`}>
      <div className="container">
        <MediaQuery minWidth={768}>
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
      <MediaQuery maxWidth={767}>
        <nav className="bg-scroll">
          <button
            onClick={toggleMobileMenu}
            className="btn btn-dark cta-button"
          >
            Menu
          </button>
          {isMobileMenuVisible && (
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className="nav-link bg-scroll" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link bg-scroll" href="#blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link bg-scroll" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link bg-scroll">
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

function HeroSection() {
  return (
    <div id="home" className="hero-section text-color">
      <div className="hero-content col-lg-6 col-md-8 col-sm-11">
        <h1>
          <strong>
            HARVEST YOUR LAND'S POTENTIAL WITH PREMIUM AGRICULTURAL SOLUTIONS
          </strong>
        </h1>
        <p>
          <strong>
            Discover critical insights and latest trends in agriculture to take
            your farming knowledge to the next level.
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
    <div id="blog" className="accordion container my-5">
      {data.map((el) => (
        <AccordionItem
          title={el.title}
          text={el.text}
          image={el.image}
          key={el.title}
        />
      ))}
    </div>
  );
}

function AccordionItem({ title, text, image }) {
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
      <div className="row">
        {isOpen && <div className="col p-3">{text}</div>}
        {isOpen && <img className="col p-3" alt={title} src={image}></img>}
      </div>
    </div>
  );
}

function DilutionCalculator({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="container my-5">
      <div className="card text-color">
        <h2 className="card-header">Dilution calculator</h2>
        <p
          onClick={handleToggle}
          className="container p-3"
          style={{ cursor: "pointer" }}
        >
          Check it out 👇
        </p>
        {isOpen && (
          <div className="row">
            {data.map((el) => (
              <CalculatorItem
                title={el.title}
                input1={el.input1}
                input2={el.input2}
                result={el.result}
                key={el.title}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CalculatorItem({ title, input1, input2, result }) {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [resultValue, setResultValue] = useState(null);

  function handleCalculate() {
    if (
      title ===
      "1. Know the required amount of product and the recommended concentration of the spraying solution. What amount of water should you use to prepare the spray solution?"
    ) {
      const calculatedResult1 = parseFloat(value1) / parseFloat(value2) / 10;
      setResultValue(calculatedResult1);
    } else if (
      title ===
      "2. Know the amount of solution required (the volume of the spray pump) and the recommended concentration. What amount of product should you use to prepare the spray solution?"
    ) {
      const calculatedResult2 = parseFloat(value1) * parseFloat(value2) * 10;
      setResultValue(calculatedResult2);
    }
  }

  return (
    <form className="col-lg-6 text-color my-3 px-3">
      <div className="container">
        <div>
          <p>{title}</p>
          <div className="row mx-2 my-3">
            <label className="col">{input1}</label>
            <input
              className="col"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="row mx-2 my-3">
            <label className="col">{input2}</label>
            <input
              className="col"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="col-md-9 mx-2 my-3">
              <p>
                {result}:{" "}
                {resultValue !== null && (
                  <span>
                    <strong>{resultValue}</strong>
                  </span>
                )}
              </p>
            </div>
            <div className="col mx-2 my-3">
              <Button onClick={handleCalculate}>Calculate</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
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
    <div id="about" className="col-lg-4 col-md-6 col-sm-12 mb-4">
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
    <div id="contact" className="row">
      <form className="col-lg-5 col-md-8 col-sm-12 text-color text-center container card my-5">
        <h4 className="card-body">
          <strong>STAY INFORMED AND INSPIRED - SUBSCRIBE NOW</strong>
        </h4>
        <p className="card-body">
          Our newsletter is a valuable resource for staying informed and
          inspired on your agricultural journey. Don't miss out – subscribe now
          and reap the benefits of being part of our growing family.
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
            {userRating > 0 ? (
              <>
                <p>Thank you for your review!</p>
                <StarRating
                  maxRating={5}
                  size={24}
                  onSetRating={setUserRating}
                />
              </>
            ) : (
              <>
                <p>Give us a review</p>
                <StarRating
                  maxRating={5}
                  size={24}
                  onSetRating={setUserRating}
                />
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

function ScrollToTopArrow() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-to-top-arrow ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      &#8593;
    </div>
  );
}

function Footer() {
  return (
    <footer className="container m-5 text-color text-center row">
      <div className="col">
        <strong>AGROMAN</strong>
        <p>You can find us in Romania</p>
        <strong>Get connected with us</strong>
        <p className="lead">2023 Copyright: Agroman</p>
        <p className="lead">All rights reserved</p>
      </div>
    </footer>
  );
}

export default App;
