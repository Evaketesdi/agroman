import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import Accordion from "./Accordion";
import DilutionCalculator from "./DilutionCalculator";
import AboutUs from "./AboutUs";
import SubscribeForm from "./SubscribeForm";
import ScrollToTopArrow from "./ScrollToTopArrow";
import Footer from "./Footer";

export const blog = [
  {
    title: "Crop protection",
    text: "Weeds rob plants of water, sunlight and nutrients, while harmful insects and diseases can devastate crops, threating food production. Growers have always relied on a host of tools to fight these ever-present threats that account for up to 30 percent of the world's annual crop loss. Without the use of reliable crop protection solutions, those losses could be much higher – and threaten the stability of the world's food supply.",
    /*image: "/images/cereal.jpg",*/
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

export const calculator = [
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

export const ourTeam = [
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
export function Button({ children, onClick }) {
  return (
    <button type="button" className="btn btn-dark cta-button" onClick={onClick}>
      {children}
    </button>
  );
}
export default App;
