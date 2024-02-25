import React from "react";
import { Button } from "./MainApp";

export const SvgComponent1 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-stopwatch-fill"
    viewBox="0 0 16 16"
  >
    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0" />
  </svg>
);

export const SvgComponent2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-cloud-fill"
    viewBox="0 0 16 16"
  >
    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383" />
  </svg>
);

export const SvgComponent3 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-calendar-check-fill"
    viewBox="0 0 16 16"
  >
    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708" />
  </svg>
);

export default function Features({ data }) {
  return (
    <div className="container text-color my-5">
      <h2>Our Features</h2>
      <p>
        Explore our wide range of features designed to empower the farming
        community with knowledge and tools.
      </p>
      <br />
      <div className="row">
        {data.map((el) => (
          <FeaturesElement
            title={el.title}
            text={el.text}
            svg={el.svg}
            key={el.title}
          />
        ))}
      </div>
    </div>
  );
}
function FeaturesElement({ title, text, svg }) {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12 mb-4 ">
      <div className="card shadow p-3 mb-5 bg-body rounded">
        <div className="card-body text-color ">
          <div className="p-2">{svg}</div>
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{text}</p>

          <p>
            <Button>Explore</Button>
          </p>
        </div>
      </div>
    </div>
  );
}
