import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";

export default function IrrigationSystems() {
  return (
    <>
      <NavBar />
      <article className="container">
        <img
          src="/images/irrigation-system.png"
          alt="irrigation system"
          className="mx-auto my-5 pt-5"
        ></img>
        <h1>Irrigation Systems: What are They and Why You Need One</h1>
        <p>
          Irrigation systems are a critical component of modern-day farm
          management optimizing crop quality and yields.
        </p>
        <p></p>
        <h2>What are Irrigation Systems?</h2>
        <p>
          Irrigation itself is the artificial delivery of moisture for the
          benefit of growing crops. Farming without irrigation is considered
          rainfed and is often referred to as dryland farming.
        </p>
        <p>
          Irrigation systems, therefore, are simply the method a farmer employs
          to transport water from its source to their cultivated fields.
          Irrigation waters come from groundwater sources, such as aquifers,
          springs and wells, or surface water sources, such as rivers, ponds, or
          lakes.
        </p>
        <h2>The Importance of Irrigation Systems to Our Food Supply Chain</h2>
        <p>
          Globally, irrigation systems are crucial to food production and
          ensuring humans have enough to eat.
        </p>
        <p>
          Irrigated farmlands make up just 20% of total cultivated lands but
          contribute 40% of worldwide food production. Moreover, irrigated
          agriculture is at least “twice as productive per unit of land as
          rain-fed agriculture, thereby allowing for more production
          intensification and crop diversification,” according to a World Bank
          report.
        </p>
        <p>
          But because water is so critical to crop production, farmers use it a
          lot.
        </p>
        <p>
          In North America, agricultural food production consumed 80% of the
          U.S. consumptive water use between 1960 and 1995, more than any other
          sector. And globally, agriculture uses 70% of the world’s available
          freshwater.
        </p>
        <p>
          Meanwhile, climate change is changing and intensifying natural water
          cycles, leading to more extended and intensive drought periods and
          rising temperatures. The 22-year period between 2000 and 2021 was the
          driest in the last 1200 years, according to a March 2022 study
          published by Nature Climate Change.
        </p>
        <p>
          Growing populations- especially in developing nations- are driving
          increased demand for more water. Experts predict that agriculture will
          bear the brunt of the water crisis.
        </p>
      </article>
      <Footer />
    </>
  );
}
