import { useEffect, useState } from "react";
import Inicio from "./Inicio";

function Edit() {
  const [uid, setUID] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState("");
  useEffect(() => {
    const getUser = async () => {
      const uid = JSON.parse(localStorage.getItem("uid"));
      setUID(uid);
      const response = await fetch(
        `http://localhost:8080/api/user/${uid}`
      ).then((r) => r.json());
      console.log(response);
      const { img, name } = response;
      if (img) {
        setImage(img);
      }
      setName(name);
      setLoading(false);
    };
    getUser();
  }, []);

  const updateUser = async () => {
    console.log(name, file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    const response = await fetch(`http://localhost:8080/api/user/${uid}`, {
      method: "PUT",
      body: formData,
    });
    const data = await response.json();
    if (response.status != 200) {
      if (data.errors) {
        data.errors.forEach((element) => {
          alert(element.msg);
        });
      } else {
        alert(data.msg);
      }

      return;
    }
    console.log(response);
    alert("Usuario actualizado con exito");
    location.reload();
  };

  if (loading) {
    return (
      <div>
        <h1>Loading..</h1>
      </div>
    );
  }
  return (
    <div>
      <Inicio></Inicio>
      <div className="row">
       {/* <div className="col-sm">
          <div className="form-body">
            <div className="row">
              <div
                className="form-holder"
                style={{ backgroundColor: "#8f41c4" }}
              >
                <div
                  className="form-content"
                  style={{ backgroundColor: "#8f41c4" }}
                >
                  <div className="form-items">
                    <div className="col-md-12">
                      <i
                        className="bi bi-person-circle"
                        style={{ fontSize: 40 }}
                      >
                        <button type="submit" className="btn btn-dark">
                          Edit Profile
                        </button>
                      </i>
                    </div>
                    <br></br>

                    <div className="col-md-12">
                      <i className="bi bi-key" style={{ fontSize: 40 }}>
                        <button type="submit" className="btn btn-dark">
                          Edit Password/E-mail
                        </button>
                      </i>
                    </div>
                    <br></br>

                    <div className="col-md-12">
                      <i
                        className="bi bi-person-bounding-box"
                        style={{ fontSize: 40 }}
                      >
                        <button type="submit" className="btn btn-dark">
                          Change Profile to Tatto Artist
                        </button>
                      </i>
                    </div>
                    <br></br>

                    <div className="col-md-12">
                      <i
                        className="bi bi-box-arrow-left"
                        style={{ fontSize: 40 }}
                      >
                        <button type="submit" className="btn btn-dark">
                          Log Out
                        </button>
                      </i>
                    </div>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
*/       }
        <div className="col-sm">
          <div className="form-body">
            <div className="row">
              <div
                className="form-holder"
                style={{ backgroundColor: "#642f88" }}
              >
                <div
                  className="form-content"
                  style={{ backgroundColor: "#642f88" }}
                >
                  <div className="form-items">
                    <h3>Edit</h3>
                    <p>Fill in the data below.</p>
                    <div class="col-md-12 text-center">
                      <img
                        src={image ? image : ""}
                        alt="Image Profile"
                        className="rounded rounded-pill mx-auto img-fluid"
                        width="307" height="240"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="text"
                        name="text"
                        placeholder={name}
                        onKeyUp={({ target }) => setName(target.value)}
                      />
                    </div>
                    <div className="col-md-12 mt-2">
                      <input
                        className="form-control"
                        type="file"
                        onChange={({ target }) => setFile(target.files[0])}
                      />
                    </div><br></br>
                    <div class="col-md-12 text-center">
                      <button
                        id="submit"
                        type="submit"
                        className="btn btn-dark"
                        onClick={() => updateUser()}
                      >
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
