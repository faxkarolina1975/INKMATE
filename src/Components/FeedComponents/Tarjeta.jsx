function Tarjeta(){
  return(
    <div className="col">
      
          <div className="card shadow-sm" style={{backgroundColor: "#8f41c4"}}>
            
            <svg className="bd-placeholder-img card-img-top" width="100%" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#23001E"></rect></svg>

            <div className="card-body" style={{backgroundColor: "#23001E"}}>
              
              <div className="d-flex justify-content-between align-items-center">
                <small className="text" style={{color: "white"}}>Título Post</small>
                <button type="button" className="btn btn-outline-light btn-sm" data-bs-toggle="modal" data-bs-target="#post" style={{border: "#8f41c4", color: "#8f41c4"}}>See</button>              

              </div>
            </div>
          </div>
          
        

          
    </div>
  )
}
export default Tarjeta