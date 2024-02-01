import React from "react";

export default function Faq({ data }) {
  return (
    <div className="container my5 text-color py-3">
      <h2>FAQ Corner</h2>
      <p>
        Have questions? Get answers. Check out our frequently asked questions
        for more insights.
      </p>
      <div className="container my-5 row">
        {data.map((el) => (
          <FaqElement
            question={el.question}
            answer={el.answer}
            key={el.question}
          />
        ))}
      </div>
    </div>
  );
}
function FaqElement({ question, answer }) {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12 p-3">
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
}
