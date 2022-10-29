import Tarjeta2 from './FeedComponents/Tarjeta2';
function Post(){
    return(
    <div style={{ backgroundColor: "#8f41c4"}}>
        
        <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light" style={{color: "white"}}>New Post</h1>
        <div className="card" >
        <div className="card-body" >
            <svg className="bd-placeholder-img card-img-top" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#23001E"></rect></svg>
            <p></p>
            <input className="form-control" type="text" placeholder="Título del Post"></input>
            <p></p>
            <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
            <p></p>
            <a href="#" className="btn btn-primary" style={{ backgroundColor: "#23001E", border: "#23001E"}}>Subir</a>

            
        </div>
        </div>


      </div>
    </div>
  </section>

        
        <div className="album py-5" style={{ backgroundColor: "#8f41c4"}}>
            <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 row row-cols-4 row-cols-sm-5 row-cols-md-6 row row-cols-7 row-cols-sm-8 row-cols-md-9">
                <Tarjeta2/>
                <Tarjeta2/>
                <Tarjeta2/>
                <Tarjeta2/>
                <Tarjeta2/>
                <Tarjeta2/>
                <Tarjeta2/>
                <Tarjeta2/>
                <Tarjeta2/>
                <Tarjeta2/>
                <Tarjeta2/>
                <Tarjeta2/>
            
            </div>
            </div>
        </div>
            
    </div>
    
    )
}

export default Post