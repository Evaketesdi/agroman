import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import Blog from "./Blog";
import DilutionCalculator from "./DilutionCalculator";
import AboutUs from "./AboutUs";
import SubscribeForm from "./SubscribeForm";
import Faq from "./Faq";
import ScrollToTopArrow from "./ScrollToTopArrow";
import Footer from "./Footer";
import Features, {
  SvgComponent1,
  SvgComponent2,
  SvgComponent3,
} from "./Features";
import Main, { Svg1Component, Svg2Component, Svg3Component } from "./Main";

export const main = [
  {
    title: "Expert Tips",
    text: "Practical farming advice from seasoned professionals to take your agricultural knowledge to the next level.",
    svg: <Svg1Component />,
  },
  {
    title: "Market Data",
    text: "Up-to-date market analyses and crop prices to help you make informed decisions.",
    svg: <Svg2Component />,
  },
  {
    title: "Community",
    text: "Connect with farmers worldwide, exchanging stories, strategies, and support.",
    svg: <Svg3Component />,
  },
];

export const blog = [
  {
    title: "Crop protection",
    text: "Weeds rob plants of water, sunlight and nutrients, while harmful insects and diseases can devastate crops, threating food production. Growers have always relied on a host of tools to fight these ever-present threats that account for up to 30 percent of the world's annual crop loss. Without the use of reliable crop protection solutions, those losses could be much higher – and threaten the stability of the world's food supply.",
    image: "/images/colorado.png",
    path: "./CropProtection",
  },
  {
    title: "Healthy soil ensures sustainable farming",
    text: "Loamy, or sandy, red or brown soil is one of the most important resources for man. Although it can vary in texture, color, and property type, soil represents the foundation for global crop production. The factor that makes it so vital for crop production is its composition. So, what is hidden inside of it? The soil is alive. It is home to a great number of living organisms such as bacteria, fungi, protozoa, nematodes, algae, mites, worms, ants, maggots, and other microscopic insects and animals. These are all important for the creation of humus, the main part of soil organic matter. ",
    image: "/images/soil.png",
    path: "./HealthySoil",
  },
  {
    title: "Farm practices that will take grain storage to a new level",
    text: "The demand for grains is stable throughout the year. However, grain production is seasonal, and in many regions, there is only one harvest per year. Therefore, once the grains reach their maturity, everything else can wait, except the harvest and post-harvest management.From the moment that grains are ready for harvest, what happens next will determine a farmer’s success or failure.In other words, farmers are faced with one big decision: whether to sell the grains as soon as possible or to store them and wait for the best market price.    ",
    image: "/images/grain.png",
    path: "./GrainStorage",
  },
  {
    title: "Irrigation systems: what are they and why you need one",
    text: "Irrigation itself is the artificial delivery of moisture for the benefit of growing crops. Farming without irrigation is considered rainfed and is often referred to as dryland farming. Irrigation systems, therefore, are simply the method a farmer employs to transport water from its source to their cultivated fields. Irrigation waters come from groundwater sources, such as aquifers, springs and wells, or surface water sources, such as rivers, ponds, or lakes.",
    image: "/images/irrigation-system.png",
    path: "./IrrigationSystems",
  },
  {
    title: "Irrigation in agriculture",
    text: "Proper irrigation with water is essential and the most important necessity for plant growth and the formation of quality and abundant fruits. The amount of water required by the plant depends on the growth phases during the season. The highest need for water is during the initial crop development, flowering, and fruit setting phases. Agriculture is the largest consumer of the Earth’s available fresh water. Nearly 70% of water withdrawals from watercourses and groundwater are used in farming for crop irrigation.",
    image: "/images/wet-lemons.png",
    path: "./Irrigation",
  },
  {
    title: "Sprinkler irrigation: why successful farmers use it",
    text: "Sprinkler irrigation was initially invented for home lawn care and garden water use. But while spray irrigation technology was originally about personal use, it is such helpful technology that it was rapidly adopted into agriculture as one of the most common types of irrigation systems. Farmers quickly recognized the advantages of reliable, high-pressure water delivery for their watering systems. So, what do farmers today need to know when it comes to sprinkler irrigation systems?",
    image: "/images/sprinkler-irrigation.png",
    path: "./SprinklerIrrigation",
  },
  {
    title: "Strategies to protect crops from wild animals",
    text: "The greatest importance is usually given to crop protection from diseases, insect pests, and weeds, as well as to protection from unfavorable weather events such as frost or hail, along with other crop maintenance practices. The aforementioned challenges are well-known and often discussed. However, farmers also face another interesting challenge, often forgotten about or not realized; wild animal crop protection.",
    image: "/images/mouse.png",
    path: "./WildAnimals",
  },
  {
    title: "Farm production challenges and solutions",
    text: "Farm production poses a number of challenges for farmers around the world. Food production requires adjustments to rapid population growth, the expenditure of resources, soil degradation, reduced utilization of land and a growing lack of water. In order to meet current and future needs of a growing world population, it’s necessary to increase farm production. However, this must be done in a sustainable and qualitative way in order to respond the environmental and food safety requirements. Climate changes are yet another of the challenges for today’s farmers, who are forced to adjust their production to increasing risks from weather extremes.",
    image: "/images/field.png",
    path: "./Farm",
  },
  {
    title: "Effects of pests on crops",
    text: "Pests can cause devastating effects on crops. How so? For one, these insects and rodents feast on the crops’ leaves, fruits, and roots, leading to the eventual death of your profit-yielding produce. Insects (like aphids) can also transmit harmful bacteria, fungi, or viral infections to your crops, resulting in comparable damage.Looking at rodents specifically, these scurrying rats and mice can cause untold damage to your crops, especially during the harvest season. Other rodents like moles feed on the plant’s roots causing substantial physical damage and skewing agriculture industry leaders’ crop yields.",
    image: "/images/bug.png",
    path: "./Pests",
  },
  {
    title: "Macronutrients play a vital role in crop production",
    text: "Crops, as well as every other living organisms, require certain amounts of nutrients for normal and healthy growth. Each nutrient plays a different, but important role, in crop growth and development. Because of this, it’s essential to ensure optimal quantities of each nutrient is provided in a form usable by the crop. In other words, without proper nutrient management, it’s hard to achieve high yields and healthy and vigorous crops. The first step towards successful nutrient management is to get to know essential nutrients and their role in crop development.",
    image: "/images/macronutrients.png",
    path: "./Macronutrients",
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
      "Contact our customer support to find out more about our services.",
    email: "jane@example.com",
  },
];

export const faq = [
  {
    question: "How to start a farm?",
    answer:
      "We offer a comprehensive guide for beginners on how to start and sustain a successful farm.",
  },

  {
    question: "Managing pests?",
    answer:
      "Explore our integrated pest management tactics that are environmentally sustainable and effective.",
  },
  {
    question: "Best crops to grow?",
    answer:
      "This can vary based on your region, but we suggest starting with crops that are in high demand locally.",
  },
  {
    question: "Subscription plans?",
    answer:
      "We offer a range of subscription plans to cater to your specific agricultural needs and preferences.",
  },
];

export const features = [
  {
    title: "Seed Finder",
    text: "Locate the best seeds for your location and needs using our comprehensive search tool.",
    svg: <SvgComponent1 />,
  },

  {
    title: "Weather Watch",
    text: "Stay ahead of the weather with our real-time forecasting tool, tailored for the agricultural sector.",
    svg: <SvgComponent2 />,
  },
  {
    title: "Crop Calendar",
    text: "Our crop calendar helps you track planting and harvesting times for optimal yield.",
    svg: <SvgComponent3 />,
  },
];

export function Button({ children, onClick }) {
  return (
    <button
      type="button"
      className="btn btn-dark btn-lg cta-button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function MainApp() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Main data={main} />
      <Blog data={blog} />
      <DilutionCalculator data={calculator} />
      <AboutUs />
      <SubscribeForm />
      <Faq data={faq} />
      <ScrollToTopArrow />
      <Footer />
    </div>
  );
}
