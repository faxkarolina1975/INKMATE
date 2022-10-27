
function Login(){
    return(
        <div>

        <div className="form-body">
        <div  className="row">
            <div  className="form-holder" style={{ backgroundColor: "#8f41c4"}}>
                <div  className="form-content" style={{ backgroundColor: "#8f41c4"}}>
                    <div  className="form-items">
                        <h3>Register Today</h3>
                        <p>Fill in the data below.</p>
                        <form  className="requires-validation" novalidate/>
                         
                         

                           <div  className="col-md-12">
                                <input  className="form-control" type="email" name="email" placeholder="E-mail Address"/>
                                 {/* <div  className="valid-feedback">Email field is valid!</div>
                                 <div  className="invalid-feedback">Email field cannot be blank!</div> */}
                            </div>

                          

                           <div class="col-md-12">
                              <input  className="form-control" type="password" name="password" placeholder="Password"/>
                               {/* <div  className="valid-feedback">Password field is valid!</div>
                               <div  className="invalid-feedback">Password field cannot be blank!</div> */}
                           </div>

                                     

                            <div class="form-button mt-3" >
                                <button id="submit" type="submit" class="btn btn-dark">Login</button>
                            </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
    )
}

export default Login