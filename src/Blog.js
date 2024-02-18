export default function Blog({ data }) {
  return (
    <div id="blog" className="container my-5 py-3">
      <h2>Blog</h2>
      <br></br>
      {data.map((el) => (
        <BlogItem
          title={el.title}
          text={el.text}
          image={el.image}
          key={el.title}
        />
      ))}
    </div>
  );
}
function BlogItem({ title, text, image }) {
  /* const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }*/

  return (
    <div className="blog-item text-color card my-3 px-5 shadow p-3 mb-5 bg-body rounded">
      <div className="blog-title py-2">
        <h2 className="blog-title">{title}</h2>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 p-3">
          <div>{text}</div>
          <button className="btn btn-lg btn-outline-dark my-5 text-color">
            Read more
          </button>
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
