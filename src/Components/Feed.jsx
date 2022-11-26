import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Tarjeta from "./FeedComponents/Tarjeta";
function Feed() {
  const [loading, setLoading] = useState(true);
  const [local, setLocal] = useState();
  const [posts, setPosts] = useState();
  const location = useLocation();
  const localid = location.state;
  useEffect(() => {
    const getLocalInformation = async () => {
      const response = await fetch(
        `http://localhost:8080/api/local/${localid}`
      ).then((r) => r.json());
      const posts = await fetch(
        `http://localhost:8080/api/local/post/${localid}`
      ).then((r) => r.json());
      setPosts(posts.posts);
      setLocal(response.local);
      setLoading(false);
    };
    getLocalInformation();
  }, []);
  if (loading) {
    return (
      <div>
        <h1>Loading..</h1>
      </div>
    );
  }
  return (
    <div style={{ backgroundColor: "#8f41c4" }}>
      <div className="position-relative overflow-hidden p-3 row">
        <div className="col-md-6 p-lg-5 ">
          <h1 className="display-4 fw-normal" style={{ color: "white" }}>
            {local.name}
          </h1>
          <p className="lead fw-normal" style={{ color: "#23001E" }}>
            {local.location}
          </p>
          <p className="lead fw-normal" style={{ color: "#23001E" }}>
            {local.schedule} - {local.weekdays}
          </p>
          <i class="bi bi-star-fill" style={{ color: "#23001E" }}>
            5.0
          </i>
        </div>
        <div className="col-md-6 p-lg-5">
          <img
            className="img-fluid"
            src={local.img ? local.img : ""}
            alt="Chania"
            width="90%"
          ></img>
        </div>
      </div>

      <div className="album py-5" style={{ backgroundColor: "#8f41c4" }}>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 row row-cols-4 row-cols-sm-5 row-cols-md-6 row row-cols-7 row-cols-sm-8 row-cols-md-9">
            {posts.map((post) => {
              return <Tarjeta key={post._id} post={post} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
