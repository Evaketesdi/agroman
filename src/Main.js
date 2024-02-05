import React from "react";
import { Button } from "./App";

export const Svg1Component = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-suitcase-lg-fill"
    viewBox="0 0 16 16"
  >
    <path d="M7 0a2 2 0 0 0-2 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2a.5.5 0 0 0 1 0h10a.5.5 0 0 0 1 0h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2H11a2 2 0 0 0-2-2zM6 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM3 13V3h1v10zm9 0V3h1v10z" />
  </svg>
);

export const Svg2Component = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-envelope-fill"
    viewBox="0 0 16 16"
  >
    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
  </svg>
);

export const Svg3Component = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-bell-fill"
    viewBox="0 0 16 16"
  >
    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
  </svg>
);

export default function Main({ data }) {
  return (
    <div className="container card shadow p-3 mb-5 bg-body rounded text-color my-5 p-5">
      <div className="row">
        <div className="container col-lg-6 col-md-12 col-sm-12 p-3 m-2">
          <h2>
            <strong>Why Agroman?</strong>
          </h2>
          <p>
            Dive deeper into the world of modern agriculture with our curated
            expert content and community insights.
          </p>
          <br />
          {data.map((el) => (
            <MainItem
              title={el.title}
              text={el.text}
              svg={el.svg}
              key={el.title}
            />
          ))}
          <br />
          <Button>More info</Button>
        </div>

        <div className="col m-2">
          <img src="/images/lemons.jpeg" alt="Lemons" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
function MainItem({ title, text, svg }) {
  return (
    <div className="container row my-5">
      <div className="col-1">{svg}</div>
      <div className="col">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
