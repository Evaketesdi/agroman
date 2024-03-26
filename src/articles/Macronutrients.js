import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import ScrollToTopArrow from "../ScrollToTopArrow";

export default function Macronutrients() {
  return (
    <>
      <NavBar />
      <article className="container">
        <img
          src="/images/macronutrients.png"
          alt="macronutirents"
          className="mx-auto my-5 py-5"
        ></img>
        <h1>Macronutrients Play a Vital Role In Crop Production</h1>
        <p>
          Crops, as well as every other living organisms, require certain
          amounts of nutrients for normal and healthy growth. Each nutrient
          plays a different, but important role, in crop growth and development.
          Because of this, it’s essential to ensure optimal quantities of each
          nutrient is provided in a form usable by the crop. In other words,
          without proper nutrient management, it’s hard to achieve high yields
          and healthy and vigorous crops.
        </p>
        <p>
          The first step towards successful nutrient management is to get to
          know essential nutrients and their role in crop development.
        </p>
        <p>
          Macronutrients essential for normal crop growth that are required in
          relatively large amounts include:
        </p>
        <ul>
          <li>Nitrogen (N)</li>
          <li>Phosphorus (P)</li>
          <li>Potassium (K)</li>
          <li>Calcium (Ca)</li>
          <li>Magnesium (Mg)</li>
          <li>Sulfur (S).</li>
        </ul>
        <h2>The Most Important Crop Nutrients</h2>
        <p>
          Three of these macronutrients are the most important elements for
          crops. Nitrogen, phosphorus, and potassium directly affect plant
          growth and practically create plant parts.
        </p>
        <h2>Importance of Crop Nutrition Management</h2>
        <p>
          If we take a closer look at the above mentioned consequences of
          deficiency or excessive amounts of each nutrient, it’s much easier to
          understand the importance of proper crop nutrition management.
          Directly affecting crop yields, macronutrients play a vital role in a
          crop’s life cycle.
        </p>
        <p>
          In aiming to reach maximum crop potential, farmers have to adjust
          nutrients according to crop needs. Therefore, it’s essential to
          remember that every crop has its own nutrient requirements.
        </p>
        <p>
          Be careful, and feed your crops by adhering to their needs. After all,
          those crops become the food on our tables.
        </p>
      </article>
      <ScrollToTopArrow />
      <Footer />
    </>
  );
}
