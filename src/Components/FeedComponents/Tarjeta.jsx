function Tarjeta({ post }) {
  return (
    <div className="col">
      <div className="card shadow-sm" style={{ backgroundColor: "#8f41c4" }}>
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="100"
          src={post.img}
          alt={post._id}
        ></img>
        <div className="card-body" style={{ backgroundColor: "#23001E" }}>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text" style={{ color: "white" }}>
              {post.description}
            </small>
            <button
              type="button"
              className="btn btn-outline-light btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#post"
              style={{ border: "#8f41c4", color: "#8f41c4" }}
            >
              See
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tarjeta;
