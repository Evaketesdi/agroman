import { useState } from "react";
import { Link } from "react-router-dom";

export default function Blog({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="container my-5 py-3">
      <div
        id="blog"
        className="card text-color shadow p-3 mb-5 bg-body rounded container my-5 py-3"
      >
        <h2 className="card-header">Blog</h2>
        <p
          onClick={handleToggle}
          className="container p-3"
          style={{ cursor: "pointer" }}
        >
          Read articles 👇
        </p>
        {isOpen && (
          <div className="row">
            {data.map((el) => (
              <BlogItem
                title={el.title}
                text={el.text}
                image={el.image}
                key={el.title}
                path={el.path}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
function BlogItem({ title, text, image, path }) {
  return (
    <div className="blog-item text-color my-3 px-5 shadow p-3 mb-5 bg-body rounded">
      <div className="blog-title py-2">
        <h2 className="blog-title">{title}</h2>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 p-3">
          <div>{text}</div>
          <br></br>
          <Link
            to={path}
            className="btn btn-lg btn-outline-dark my-5 text-color"
          >
            Read more
          </Link>
        </div>
        <img
          id="blog-image"
          className="col mx-auto"
          alt={title}
          src={image}
        ></img>
      </div>
    </div>
  );
}
