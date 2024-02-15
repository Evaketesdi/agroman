import React, { useState } from "react";

export default function Accordion({ data }) {
  return (
    <div id="blog" className="accordion container my-5 py-3">
      {data.map((el) => (
        <AccordionItem
          title={el.title}
          text={el.text}
          image={el.image}
          key={el.title}
        />
      ))}
    </div>
  );
}
function AccordionItem({ title, text, image }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div
      className={`accordion-item ${
        isOpen ? "open" : ""
      } text-color card my-3 px-5 shadow p-3 mb-5 bg-body rounded`}
      onClick={handleToggle}
    >
      <div className="accordion-title py-2">
        <h2 className="accordion-title">{title}</h2>
        <p>{isOpen ? "-" : "+"}</p>
      </div>
      <div className="row">
        {isOpen && (
          <div className="col-lg-6 col-md-12 col-sm-12 p-3">{text}</div>
        )}
        {isOpen && (
          <img
            id="accordion-image"
            className="col p-3 mx-auto rounded-1"
            alt={title}
            src={image}
          ></img>
        )}
      </div>
    </div>
  );
}
