import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import ScrollToTopArrow from "../ScrollToTopArrow";

export default function SprinklerIrrigation() {
  return (
    <>
      <NavBar />
      <article className="container">
        <img
          src="/images/sprinkler-irrigation.png"
          alt="sprinkler-irrigation"
          className="mx-auto my-5 py-5"
        ></img>
        <h2>Sprinkler Irrigation: Why Successful Farmers Use It</h2>
        <p>
          Sprinkler irrigation was initially invented for home lawn care and
          garden water use. Even today, the rhythmic ‘chk-chk-chk’ sound of an
          impact sprinkler is iconoclastic of hot summer days, green lawns, and
          children playfully cooling off in lawn sprinklers. But while spray
          irrigation technology was originally about personal use, it is such
          helpful technology that it was rapidly adopted into agriculture as one
          of the most common types of irrigation systems. Farmers quickly
          recognized the advantages of reliable, high-pressure water delivery
          for their watering systems.
        </p>
        <h2>What Is Sprinkler Irrigation?</h2>
        <p>
          Sprinkler irrigation is any irrigation that uses a pressurized system
          to apply water in a method that mimics rainfall to the soil surface.
          Water is delivered to a farmer’s fields through a network of pipes or
          hoses, and the water is usually pressurized using a pumping system.
          Irrigation sprinkler systems may be temporary, movable or permanent.
        </p>
        <p>
          In the United States, nearly 4.4 million acres are irrigated via some
          method of spray, aka sprinkler irrigation, not including center pivot
          or micro-spray irrigation, according to the 2018 United States
          Department of Agriculture (USDA) report “Sprinkler Irrigation in the
          Fields and Open.”
        </p>
        <p>
          Sprinkler irrigation is widely used because it is versatile, adaptable
          to almost all crops, and affordable. But it’s not a perfect irrigation
          system. Spray irrigation is one of the most inefficient watering
          methods, wasting approximately 30 to 50% of the water applied through
          run-off and evaporation. Only flood irrigation is a more potentially
          inefficient method of irrigation crops, whereas systems like drip
          irrigation and sub-irrigation use much less water to achieve effective
          application rates.
        </p>
        <h2>The Difference Between Spray and Sprinkler Irrigation</h2>
        <p>
          Many farmers wonder what the difference is between spray and sprinkler
          irrigation systems. The answer is nothing. It is just different
          terminology for the same irrigation system.
        </p>
      </article>
      <ScrollToTopArrow />
      <Footer />
    </>
  );
}
