import React from "react";
import { Button } from "./App";

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
          <FeaturesElement title={el.title} text={el.text} key={el.title} />
        ))}
      </div>
    </div>
  );
}
function FeaturesElement({ title, text }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 ">
      <div className="card shadow p-3 mb-5 bg-body rounded">
        <div className="card-body text-color">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cloud-fill"
            viewBox="0 0 16 16"
            className="my-2"
          >
            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383" />
          </svg>
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
