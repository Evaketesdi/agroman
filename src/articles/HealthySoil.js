import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function HealthySoil() {
  return (
    <>
      <NavBar />
      <article className="container">
        <img
          src="/images/soil.png"
          alt="soil"
          className="mx-auto my-5 py-5"
        ></img>
        <br></br>
        <h2>Ensure Better Soil Performance by Keeping Your Soil Healthy</h2>
        <br></br>
        <p>
          Loamy, or sandy, red or brown soil is one of the most important
          resources for man. Although it can vary in texture, color, and
          property type, soil represents the foundation for global crop
          production. The factor that makes it so vital for crop production is
          its composition. So, what is hidden inside of it? The soil is alive.
          It is home to a great number of living organisms such as bacteria,
          fungi, protozoa, nematodes, algae, mites, worms, ants, maggots, and
          other microscopic insects and animals. These are all important for the
          creation of humus, the main part of soil organic matter.
        </p>
        <h3>Soil Management Practices</h3>
        <p>
          Because soil is a primary resource for crop production and the most
          important resource that farmers can hold, it requires special care and
          management practices. We all know that the essential elements for
          plant growth are soil, water, sunlight, and preferable temperatures.
          But these elements are not always sufficient for achieving high yields
          in crop production. Specific management practices, which provide
          healthy and fertile soil, must also be developed and implemented with
          special care. These practices include:
        </p>
        <ul>
          <li>
            <p>Proper soil tillage</p>
          </li>
          <li>
            <p>Balanced fertilization management</p>
          </li>
          <li>
            <p>Sufficient water, whether from rainfall or irrigation systems</p>
          </li>
          <li>
            <p>
              Proper protection management against various insect pests, weeds,
              and diseases
            </p>
          </li>
        </ul>
        <p>
          Since each crop has its own growth requirements, its total yield
          performance depends on a number of factors, such as its given growth
          media, weather conditions, and the individual farmer’s knowledge of
          crop production. In aiming to achieve his planned yield, the farmer
          must have a good understanding of soil requirements and related
          farming practices.
        </p>
        <p>
          Soil management practices differ from farm operations and crop growth
          stages. The first step in growing crops includes a set of activities
          for soil preparation. These field activities that will benefit soil
          management are:
        </p>
        <ul>
          <li>
            <p>
              Undermining or mole drainage—where standing water and soil
              porosity problems occur
            </p>
          </li>
          <li>
            <p>
              Plowing—classified as very shallow, shallow, or pre-sowing
              plowing; this will depend on crop type, previously grown crops,
              and the time of sowing
            </p>
          </li>
          <li>
            <p>Disking</p>
          </li>
          <li>
            <p>Harrowing</p>
          </li>
          <li>
            <p>Rolling</p>
          </li>
        </ul>
      </article>
      <Footer />
    </>
  );
}
