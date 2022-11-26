import { useState } from "react";
import { useEffect } from "react";
import "../../Css_Components/Inicio.css";
import { Link } from "react-router-dom";

function Inicio() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const uid = JSON.parse(localStorage.getItem("uid"));
      if (!uid) {
        window.location = "/Home";
      }
      const response = await fetch(
        `http://localhost:8080/api/user/${uid}`
      ).then((r) => r.json());
      console.log(response);
      setLoading(false);
      setUser(response);
    }
    loadUser();
  }, []);

  function logOut() {
    window.location = "/Home";
    localStorage.removeItem("uid");
  }

  if (loading) {
    console.log(loading);
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="Menu">
      <div className="container-fluid mt-0">
        <div className="row">
          <div className="col-auto min-vh-100">
            <ul>
              <li>
                <img className="perfil-img" src={user.img} alt="Avatar" />
              </li>

              <li>
                <span className="nav-link px-2">
                  <Link to="/Home">
                    <i className="bi-house" />{" "}
                  </Link>
                  <span className="ms-1 d-none d-sm-inline"></span>
                </span>
              </li>
              <li>
                <span className="nav-link px-2">
                  <Link className="links" to="/Post">
                    <i className="bi bi-images" />{" "}
                  </Link>
                  <span className="ms-1 d-none d-sm-inline"></span>
                </span>
              </li>
              <li>
                <span className="nav-link px-2">
                  <Link className="links" to="/Chat">
                    <i className="bi bi-chat-right-text" />{" "}
                  </Link>
                  <span className="ms-1 d-none d-sm-inline"></span>
                </span>
              </li>
              <li>
                <span className="nav-link ">
                  <Link className="links" to="/Gallery">
                    <i className="bi-shop" />
                  </Link>
                  <span className="ms-1 d-none d-sm-inline"></span>
                </span>
              </li>
              <li>
                <span className="nav-link px-2" onClick={() => logOut()}>
                  <Link className="links" to="/Login">
                    <i className="bi bi-box-arrow-left" />
                  </Link>
                  <span className="ms-1 d-none d-sm-inline"></span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
