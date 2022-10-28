function Edit(){
    return(
        <div>
<div className="row">
    <div className="col-sm">
        <div className="form-body">
        <div  className="row">
            <div  className="form-holder" style={{ backgroundColor: "#8f41c4"}}>
                <div  className="form-content" style={{ backgroundColor: "#8f41c4"}}>
                    <div  className="form-items">
                     
                            <div  className="col-md-12">
                            
                            <i class="bi bi-person-circle" style={{ fontSize: 40 }}> 
                            <button type="submit" class="btn btn-dark">Edit Profile</button>
                            </i>
                               
                            
                            </div><br></br>

                            <div  className="col-md-12">
                                <i class="bi bi-key" style={{ fontSize: 40 }}>  
                                <button type="submit" class="btn btn-dark">Edit Password/E-mail</button>
                                </i>
                              
                            
                           
                            </div><br></br>

                            <div  className="col-md-12">
                                <i class="bi bi-person-bounding-box" style={{ fontSize: 40 }}>
                                <button type="submit" class="btn btn-dark">Change Profile to Tatto Artist</button>
                                </i>
                           
                            </div><br></br>

                            <div  className="col-md-12">
                                <i class="bi bi-box-arrow-left" style={{ fontSize: 40 }}>
                                <button type="submit" class="btn btn-dark">Log Out</button>
                                </i>
                           
                            </div><br></br>
     
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
   
    <div className="col-sm">
    <div className="form-body">
        <div  className="row">
            <div  className="form-holder" style={{ backgroundColor: "#8f41c4"}}>
                <div  className="form-content" style={{ backgroundColor: "#8f41c4"}}>
                    <div  className="form-items">
                        <h3>Edit</h3>
                        <p>Fill in the data below.</p>
                        <form  className="requires-validation" novalidate/>
                         
                         

                           <div  className="col-md-12">
                                <input  className="form-control" type="text" name="text" placeholder="First Name"/>
                                 {/* <div  className="valid-feedback">Email field is valid!</div>
                                 <div  className="invalid-feedback">Email field cannot be blank!</div> */}
                            </div>

                            <div  className="col-md-12">
                                <input  className="form-control" type="text" name="text" placeholder="Last Name"/>
                                 {/* <div  className="valid-feedback">Email field is valid!</div>
                                 <div  className="invalid-feedback">Email field cannot be blank!</div> */}
                            </div>

                            <div  className="col-md-12">
                                <input  className="form-control" type="text" name="text" placeholder="User Name"/>
                                 {/* <div  className="valid-feedback">Email field is valid!</div>
                                 <div  className="invalid-feedback">Email field cannot be blank!</div> */}
                            </div>

                          

                           <div class="col-md-12">
                              <input  className="form-control" type="password" name="password" placeholder="Old Password"/>
                               {/* <div  className="valid-feedback">Password field is valid!</div>
                               <div  className="invalid-feedback">Password field cannot be blank!</div> */}
                           </div>

                           <div class="col-md-12">
                              <input  className="form-control" type="password" name="password" placeholder="New Password"/>
                               {/* <div  className="valid-feedback">Password field is valid!</div>
                               <div  className="invalid-feedback">Password field cannot be blank!</div> */}
                           </div>

                           <div class="col-md-12">
                              <input  className="form-control" type="password" name="password" placeholder="Confirm Password"/>
                               {/* <div  className="valid-feedback">Password field is valid!</div>
                               <div  className="invalid-feedback">Password field cannot be blank!</div> */}
                           </div>

                           <div  className="col-md-12">
                                <input  className="form-control" type="email" name="email" placeholder="E-mail Address"/>
                                 {/* <div  className="valid-feedback">Email field is valid!</div>
                                 <div  className="invalid-feedback">Email field cannot be blank!</div> */}
                            </div>

                    

                            <div class="form-button mt-3" >
                                <button id="submit" type="submit" class="btn btn-dark">Edit Profile</button>
                            </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>

    </div>

    
    )
}

export default Edit