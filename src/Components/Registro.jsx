
function Registro(){
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
                               <input  className="form-control"  type="text" name="name" placeholder="Full Name"/>
                               {/* <div  className="valid-feedback">Username field is valid!</div>
                               <div  className="invalid-feedback">Username field cannot be blank!</div> */}
                            </div>

                           
                            

                            <div  className="col-md-12">
                                <input  className="form-control" type="email" name="email" placeholder="E-mail Address"/>
                                 {/* <div  className="valid-feedback">Email field is valid!</div>
                                 <div  className="invalid-feedback">Email field cannot be blank!</div> */}
                            </div>

                           <div  className="col-md-12">
                                <select  className="form-select mt-3">
                                      <option selected disabled value="">Position</option>
                                      <option value="jweb">Tatuador</option>
                                      <option value="sweb">Cliente</option>
                                     
                               </select>
                                {/* <div  className="valid-feedback">You selected a position!</div>
                                <div  className="invalid-feedback">Please select a position!</div> */}
                           </div>


                           <div class="col-md-12">
                              <input  className="form-control" type="password" name="password" placeholder="Password"/>
                               {/* <div  className="valid-feedback">Password field is valid!</div>
                               <div  className="invalid-feedback">Password field cannot be blank!</div> */}
                           </div>

                           <div class="col-md-12">
                              <input  className="form-control" type="password" name="password" placeholder=" Confirm Password"/>
                               {/* <div  className="valid-feedback">Password field is valid!</div>
                               <div  className="invalid-feedback">Password field cannot be blank!</div> */}
                           </div>
                       

                           <div  className="col-md-12 mt-3">
                            <label  className="mb-3 mr-1" for="gender">Gender: </label>

                            <input type="radio"  className="btn-check" name="gender" id="male" autocomplete="off"/>
                            <label class="btn btn-sm btn-outline-secondary" for="male">Male</label>

                            <input type="radio"  className="btn-check" name="gender" id="female" autocomplete="off"/>
                            <label className="btn btn-sm btn-outline-secondary" for="female">Female</label>

                            <input type="radio"  className="btn-check" name="gender" id="secret" autocomplete="off"/>
                            <label  className="btn btn-sm btn-outline-secondary" for="secret">Secret</label>
                               {/* <div  className="valid-feedback mv-up">You selected a gender!</div>
                                <div  className="invalid-feedback mv-up">Please select a gender!</div> */}
                            </div>

                     
                  

                            <div class="form-button mt-3" >
                                <button id="submit" type="submit" class="btn btn-dark">Register</button>
                            </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
    )
}

export default Registro