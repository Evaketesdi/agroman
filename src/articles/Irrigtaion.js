import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import ScrollToTopArrow from "../ScrollToTopArrow";

export default function Irrigation() {
  return (
    <>
      <NavBar />
      <article className="container">
        <img
          src="/images/wet-lemons.png"
          alt="wet lemons"
          className="mx-auto my-5 pt-5"
        ></img>
        <h2>Irrigation in Agriculture</h2>
        <p>
          Proper irrigation with water is essential and the most important
          necessity for plant growth and the formation of quality and abundant
          fruits. The amount of water required by the plant depends on the
          growth phases during the season. The highest need for water is during
          the initial crop development, flowering, and fruit setting phases.
        </p>
        <p>
          Since there are very few regions where precipitation is sufficient
          enough to satisfy crop needs, additional water must be provided
          artificially, by establishing an irrigation system. The lack of water
          during the growing season will lead to reduced yield and even possible
          failure of the entire crop production.
        </p>
        <p>
          Agriculture is the largest consumer of the Earth’s available fresh
          water. Nearly 70% of water withdrawals from watercourses and
          groundwater are used in farming for crop irrigation.
        </p>
        <h2>What Is Irrigation in Agriculture</h2>
        <p>
          When it comes to agriculture, irrigation usually comes down to
          applying controlled amounts of water to assist in the production of
          crops, as well as to grow landscape plants and lawns. There are
          several different methods of watering that can be applied depending on
          the type of terrain, crop, water source availability, reservoirs,
          available infrastructure, and so on. Due to climate change and the
          need for increased food production, the amount of irrigation water has
          drastically increased and will continue to increase.
        </p>
        <p>
          Irrigated farming represents 20 percent of the total cultivated land,
          but contributes to 40 percent of the total food produced worldwide.
        </p>
      </article>
      <Footer />
      <ScrollToTopArrow />
    </>
  );
}
