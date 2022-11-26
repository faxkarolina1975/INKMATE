import Tarjeta from "./FeedComponents/Tarjeta";
function Feed() {
  return (
    <div style={{ backgroundColor: "#8f41c4" }}>
      <div className="position-relative overflow-hidden p-3 row">
        <div className="col-md-6 p-lg-5 ">
          <h1 className="display-4 fw-normal" style={{ color: "white" }}>
            Tattoo Center Nombre
          </h1>
          <p className="lead fw-normal" style={{ color: "#23001E" }}>
            Localizacion
          </p>
          <p className="lead fw-normal" style={{ color: "#23001E" }}>
            Horario de la Semana
          </p>
          <i class="bi bi-star-fill" style={{ color: "#23001E" }}>
            5.0
          </i>
        </div>
        <div className="col-md-6 p-lg-5">
          <img
            className="img-fluid"
            src="src/assets/image.jpg"
            alt="Chania"
            width="90%"
          ></img>
        </div>
      </div>

      <div className="album py-5" style={{ backgroundColor: "#8f41c4" }}>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 row row-cols-4 row-cols-sm-5 row-cols-md-6 row row-cols-7 row-cols-sm-8 row-cols-md-9">
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
