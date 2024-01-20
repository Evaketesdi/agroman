import React, { useState } from "react";

export default function Accordion({ data }) {
  return (
    <div id="blog" className="accordion container my-5">
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
      className={`item ${isOpen ? "open" : ""} text-color card my-3 px-3`}
      onClick={handleToggle}
    >
      <div className="title py-2">
        <p className="title">{title}</p>
        <p>{isOpen ? "-" : "+"}</p>
      </div>
      <div className="row">
        {isOpen && <div className="col p-3">{text}</div>}
        {isOpen && <img className="col p-3" alt={title} src={image}></img>}
      </div>
    </div>
  );
}
