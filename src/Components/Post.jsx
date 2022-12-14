import Tarjeta2 from "./FeedComponents/Tarjeta2";
import { useEffect, useState } from "react";
import Inicio from "./Inicio";
function Post() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [posts, setPost] = useState([]);
  const [description, setDescription] = useState("");
  const [userID, setUserID] = useState("");
  const [localID, setLocalID] = useState("");
  const sendPost = async () => {
    /*   const data ={
            user:632945e1819c88c7ac1b1cb4,
            local:"632e78e5914f7f7c74237304",
            description:"aqui va una descripcion"
        } */
    const formData = new FormData();
    formData.append("user", userID);
    formData.append("local", localID);
    formData.append("description", description);
    formData.append("file", image);
    const response = await fetch("http://localhost:8080/api/posts/", {
      method: "POST",
      // headers:{'Content-Type': 'application/json'},
      body: formData,
    });

    const data = await response.json();
    console.log(response);
    console.log(data);

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
    alert("Post Creado con Exito");
    location.reload();
  };

  useEffect(() => {
    const loadPost = async () => {
      const uid = JSON.parse(localStorage.getItem("uid"));
      if (!uid) {
        window.location = "/Login";
      }
      const local = await fetch(
        `http://localhost:8080/api/local/user/${uid}`
      ).then((r) => r.json());
      console.log(local);
      if (!local.local) {
        alert("Debes registrar un local con este usuario para hacer posts");
        return;
      }
      const response = await fetch(
        `http://localhost:8080/api/local/post/${local.local._id}`
      ).then((r) => r.json());
      setUserID(uid);
      setLocalID(local.local._id);
      setLoading(false);
      setPost(response.posts);
    };
    loadPost();
  }, []);

  const saveImage = (event) => {
    setImage(event.target.files[0]);
  };

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
   
    <div style={{ backgroundColor: "#642f88" }}>
       <Inicio></Inicio>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light" style={{ color: "white" }}>
              New Post
            </h1>
            <div className="card">
              <div className="card-body">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="200"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#23001E"></rect>
                </svg>
                <p></p>
                <input
                  className="form-control"
                  type="text"
                  placeholder="T??tulo del Post"
                  onKeyUp={(event) => setDescription(event.target.value)}
                ></input>
                <p></p>
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                  onChange={saveImage}
                ></input>
                <p></p>
                <a
                  href="#"
                  className="btn btn-primary"
                  onClick={sendPost}
                  style={{ backgroundColor: "#23001E", border: "#23001E" }}
                >
                  Subir
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="album py-5" style={{ backgroundColor: "#642f88" }}>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 row row-cols-4 row-cols-sm-5 row-cols-md-6 row row-cols-7 row-cols-sm-8 row-cols-md-9">
            <Tarjeta2 />
            {posts.map((post) => {
              return <Tarjeta2 key={post._id} post={post} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
