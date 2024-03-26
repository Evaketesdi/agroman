import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import ScrollToTopArrow from "../ScrollToTopArrow";

export default function WildAnimals() {
  return (
    <>
      <NavBar />
      <article className="container">
        <img
          src="/images/mouse.png"
          alt="mouse"
          className="mx-auto my-5 py-5"
        ></img>
        <h2>Top Five Strategies to Protect Crops from Wild Animals</h2>
        <p>
          Before the beginning of every farm season, most farmers prefer to plan
          potential yields. On the other hand, some farmers chose to skip
          planning. Whether a farmer plans the potential yield or not, certain
          expectations are still present. While hoping for the best, farmers are
          often presented with various challenges and obstacles that require
          them to constantly question their productivity and resulting final
          success.
        </p>
        <p>
          The greatest importance is usually given to crop protection from
          diseases, insect pests, and weeds, as well as to protection from
          unfavorable weather events such as frost or hail, along with other
          crop maintenance practices. The aforementioned challenges are
          well-known and often discussed. However, farmers also face another
          interesting challenge, often forgotten about or not realized; wild
          animal crop protection.
        </p>
        <h3>Agricultural fences</h3>
        <p>
          Fencing is a popular wild animal deterrent that can last for many
          years. Agricultural fences are quite an effective wild animal
          protection technology. However, utilizing fences as a practice is
          often regulated. Some local and state entities may restrict or prevent
          the use of certain types of fences. Therefore, before deciding on a
          suitable fence, it’s important to check local laws and regulations.
        </p>
        <h3>Natural repellents</h3>
        <p>
          Some farmers prefer using natural resources instead of mechanical or
          chemical protective practices.
        </p>
        <h3>Biophysical barriers</h3>
        <p>
          Similar to traditional fences, but made of natural easily renewable
          materials bamboo sticks, coconut tree bunches, or some other available
          shrubs; low-cost practice but also low efficiency in protecting crops
          against wild animals.
        </p>
        <h3>Electronic repellents</h3>
        <p>
          Also an effective, long-lasting, and eco-friendly method for crop
          protection that repels animals without harming them.
        </p>
      </article>
      <ScrollToTopArrow />
      <Footer />
    </>
  );
}
