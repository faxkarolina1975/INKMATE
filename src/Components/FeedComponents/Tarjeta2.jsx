function Tarjeta2({post}){
  console.log(post)
  return(
    <div className="col">
      
          <div className="card shadow-sm" style={{backgroundColor: "#8f41c4"}}>
            
            <img className="bd-placeholder-img card-img-top" width="100%" height="100" src={post.img} ><title>Placeholder</title></img>

            <div className="card-body" style={{backgroundColor: "#23001E"}}>
              
              <div className="d-flex justify-content-between align-items-center">
                <small className="text" style={{color: "white"}}>{post.description}</small>
                <button type="button" className="btn-close"aria-label="Close"></button>
              </div>
            </div>
          </div>
          
        

          
    </div>
  )
}
export default Tarjeta2