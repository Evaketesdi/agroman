import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Farm() {
  return (
    <>
      <NavBar />
      <article className="container">
        <img
          src="/images/field.png"
          alt="field"
          className="mx-auto my-5 py-5"
        ></img>
        <h2>Farm Production Challenges and Solutions</h2>
        <p>
          The beginnings of agriculture reach far back into history. One of the
          oldest human activities, farming, developed long before the first
          written documents. However, the exact date of its origin is unknown.
          Although some archaeological findings confirm that farm production
          began to develop in the Neolithic period, the latest research by
          Israeli scientists suggests that agriculture began to develop much
          earlier, even more than 23,000 years ago. The change from the hunting
          and gatherer life to the cultivation of plants, domestication of
          animals, and food production led to the development of the first
          civilizations of Mesopotamia, Egypt, India and China and further
          expansion of farm production.
        </p>
        <p>
          Farm production poses a number of challenges for farmers around the
          world. Food production requires adjustments to rapid population
          growth, the expenditure of resources, soil degradation, reduced
          utilization of land and a growing lack of water. In order to meet
          current and future needs of a growing world population, it’s necessary
          to increase farm production. However, this must be done in a
          sustainable and qualitative way in order to respond the environmental
          and food safety requirements. Climate changes are yet another of the
          challenges for today’s farmers, who are forced to adjust their
          production to increasing risks from weather extremes (such as hail,
          drought, heavy rain, and soil erosion). Climate changes are not only
          responsible for adverse weather conditions, they also cause the
          instability in farm commodity prices.
        </p>
        <h2>A Strategy to Enhance Farm Production</h2>
        <p>
          Although agricultural production is facing serious global risks,
          solutions are possible within the framework of the monitoring and
          analysis of the risk themselves, and in the context of sustainable
          agricultural practices. AGROMAN farm management software helps farmers
          to monitor complete farm production and also facilitates the
          management of potential farm risks. The software provides the best
          farm practices for over 100 different crops and allows farmers to
          monitor all field activities; from the consumption of fertilizers,
          pesticides, work hours of workers and machinery, to finance monitoring
          and the powerful analysis of the entire farm production.
        </p>
      </article>
      <Footer />
    </>
  );
}
