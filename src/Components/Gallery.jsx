import "../../Css_Components/Gallery.css";
import Inicio from "../Components/Inicio";
import Datos from "../Style_Comp/Perfil";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Gallery() {
  const [loading2, setLoading2] = useState(false);

  const [userID, setuserID] = useState("");

  const [locals, setLocals] = useState([]);

  const uid = JSON.parse(localStorage.getItem("uid"));
  if (!uid) {
    window.location = "/Login";
  }

  useEffect(() => {
    async function loadLocals() {
      //setuserID(uid);
      //console.log(userID);
      const response = await fetch(`http://localhost:8080/api/local`).then(
        (r) => r.json()
      );
      console.log(response);

      setLocals(response.locals);
      setLoading2(true);
    }

    loadLocals();
  }, []);

  if (!loading2) {
    return (
      <div>
        <h1>Loading..</h1>
      </div>
    );
  } else {
    return (
      <div className="Gallery">
        <Inicio />
        <div className="general-list">
          <div className="row" id="row-galeria">
            {locals.map((locals) => {
              return (
                <div className="col-4" key={locals._id}>
                  <div className="card shadow p-2 rounded" id="card-fav">
                    <Link to="/feed" state={locals._id}>
                      <i className="bi bi-star" width="100" height="100"></i>
                      <img
                        src={locals.img}
                        className="card-img-top"
                        id="card-img"
                        alt="..."
                      />
                      <div className="card-body col-md-12 text-center">
                        <Datos>{locals.name}</Datos>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
