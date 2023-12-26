import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
      <MainSection />
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

function MainSection() {
  return (
    <main id="accordion" className="container my-5">
      <div className="card">
        <div className="card-header">
          <a
            className="btn text-color"
            data-bs-toggle="collapse"
            href="#collapseOne"
          >
            <p>Everything you need to know about fertilizers</p>
          </a>
        </div>
        <div
          id="collapseOne"
          className="collapse show"
          data-bs-parent="#accordion"
        >
          <div className="card-body text-color">
            In this concise guide, unlock the essence of fertilizers,
            demystifying their composition and unleashing their potential for
            robust crop growth. From understanding labels to tailored
            application, discover the art of precise fertilizer usage. Whether
            organic or synthetic, grasp the fundamentals and elevate your
            agricultural prowess. This guide is your compass for cultivating
            healthier, more abundant harvests – fertilizing success, one crop at
            a time.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <a
            className="collapsed btn text-color"
            data-bs-toggle="collapse"
            href="#collapseTwo"
          >
            <p>Everything you need to know about irrigation</p>
          </a>
        </div>
        <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
          <div className="card-body text-color">
            Embark on a journey through the world of irrigation with our
            in-depth guide, offering a wealth of knowledge to transform your
            understanding of water management. From the basics of soil moisture
            to advanced irrigation systems, this handbook covers it all. Dive
            into the art of scheduling, optimizing water use for various crops,
            and ensuring sustainability in every drop. Unveil the nuances
            between drip, sprinkler, and flood irrigation, empowering you to
            choose the method best suited for your fields. Troubleshoot common
            irrigation challenges and emerge as a steward of water resources.
            With this guide, cultivate expertise in irrigation, fostering
            healthier crops and a greener future.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <a
            className="collapsed btn text-color"
            data-bs-toggle="collapse"
            href="#collapseThree"
          >
            <p>Everything you need to know about cereal seeds</p>
          </a>
        </div>
        <div
          id="collapseThree"
          className="collapse"
          data-bs-parent="#accordion"
        >
          <div className="card-body text-color cereal">
            Cereal seeds, small yet mighty, form the backbone of human
            sustenance and agriculture. Derived from the grains of grass
            species, these seeds are the source of some of the world's most
            essential and versatile crops. Here's a comprehensive exploration of
            cereal seeds, their significance, and the wealth of knowledge
            encapsulated within these unassuming kernels. 1. Diverse Portfolio:
            Cereal seeds encompass a remarkable variety, each endowed with
            unique characteristics. From the amber waves of wheat to the golden
            fields of rice, the world of cereal seeds is a mosaic of diversity.
            Wheat, rice, maize, barley, oats, and millets are among the many
            members of this botanical family, each contributing distinct
            flavors, textures, and nutritional profiles. 2. Nutritional
            Powerhouses: At their core, cereal seeds are nutritional
            powerhouses. Bursting with carbohydrates, proteins, fiber, vitamins,
            and minerals, they form the cornerstone of balanced diets globally.
            The endosperm, bran, and germ within these seeds collaborate to
            provide essential nutrients, offering sustained energy and promoting
            overall well-being. 3. Foundation of Agriculture: Cereal seeds are
            not merely grains; they are the foundation of agriculture itself.
            The domestication of these plants marked a pivotal moment in human
            history, ushering in the era of settled societies and enabling
            civilizations to flourish. The ability to cultivate and harvest
            cereal seeds laid the groundwork for the development of agrarian
            communities. 4. Culinary Versatility: Cereal seeds are culinary
            chameleons, seamlessly adapting to diverse cuisines and culinary
            practices. Whether transformed into the crusty loaves of bread,
            aromatic bowls of rice, or wholesome porridge for breakfast, cereal
            seeds showcase their adaptability in kitchens worldwide. From the
            comforting familiarity of cornbread to the exotic allure of quinoa
            salads, these seeds weave themselves into the tapestry of global
            gastronomy. 5. Agricultural Innovation: The cultivation and
            improvement of cereal seeds have been at the forefront of
            agricultural innovation. Through selective breeding and genetic
            advancements, scientists have enhanced crop yields, increased
            resistance to pests and diseases, and improved nutritional content.
            These ongoing efforts play a crucial role in ensuring food security
            for an ever-growing global population. 6. Cultural Significance:
            Cereal seeds hold profound cultural significance, woven into the
            fabric of traditions, rituals, and celebrations. Grains are often
            emblematic of abundance, fertility, and sustenance, making
            appearances in religious ceremonies, festivals, and daily meals. 7.
            Global Impact: Cereal seeds have a monumental impact on economies
            and livelihoods worldwide. Entire agricultural landscapes are
            dedicated to the cultivation of these crops, sustaining rural
            communities and shaping the agricultural economies of nations. In
            essence, cereal seeds are more than mere components of our meals;
            they are silent contributors to the tapestry of human history and
            sustenance. From the ancient fields of Mesopotamia to the modern,
            mechanized farms of today, cereal seeds have stood the test of time,
            evolving alongside humanity and ensuring that the promise of
            sustenance is fulfilled from generation to generation. The story of
            cereal seeds is a tale of resilience, adaptability, and the enduring
            partnership between nature and humankind.
          </div>
        </div>
      </div>
    </main>
  );
}

function DilutionCalculator() {
  const [productAmunt, setProductAmount] = useState("");
  const [concentration, setConcentration] = useState("");

  return (
    <div id="accordion" className="container text-color my-5">
      <div className="card text-color">
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
                  spray pump) and the recommended concentration. What amount of
                  product should you use to prepare the spray solution?
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
        Whether you're a seasoned farmer or just starting, our newsletter is a
        valuable resource for staying informed and inspired on your agricultural
        journey. Don't miss out – subscribe now and reap the benefits of being
        part of our growing family.
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
