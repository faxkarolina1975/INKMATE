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
                <Link style={{ color: "black" }} to="/Home">
                  <span className="nav-link px-2">
                    <i className="bi-house" />{" "}
                    <span className="ms-1 d-none d-sm-inline"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link style={{ color: "black" }} className="links" to="/Post">
                  <span className="nav-link px-2">
                    <i className="bi bi-images" />{" "}
                    <span className="ms-1 d-none d-sm-inline"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link style={{ color: "black" }} className="links" to="/Chat">
                  <span className="nav-link px-2">
                    <i className="bi bi-chat-right-text" />{" "}
                    <span className="ms-1 d-none d-sm-inline"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "black" }}
                  className="links"
                  to="/Gallery"
                >
                  <span className="nav-link ">
                    <i className="bi-shop" />
                    <span className="ms-1 d-none d-sm-inline"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link style={{ color: "black" }} className="links" to="/Local">
                  <span className="nav-link px-2">
                    <i className="bi bi-plus-square" />
                    <span className="ms-1 d-none d-sm-inline"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link style={{ color: "black" }} className="links" to="/Login">
                  <span className="nav-link px-2" onClick={() => logOut()}>
                    <i className="bi bi-box-arrow-left" />
                    <span className="ms-1 d-none d-sm-inline"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
