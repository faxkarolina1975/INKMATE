import React, {useEffect, useState} from "react"
import jwt from 'jwt-decode'

function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function login(email, password){

        const user = {email, password};
        const response = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        } );
        
        const data = await response.json();
        console.log(response);
        console.log(data);
    
        if(response.status != 200){
            
            if(data.errors){

                data.errors.forEach(element => {
                    alert(element.msg);
                });
            }
            else{

                alert(data.msg);
            }
            
            return;
        }


        const _id= jwt(data.token); 
        console.log(_id.uid);
        localStorage.setItem("uid",JSON.stringify(_id.uid))

        window.location = '/Chat';

    }




    return(
        <div>

        <div className="form-body">
        <div  className="row">
            <div  className="form-holder" style={{ backgroundColor: "#8f41c4"}}>
                <div  className="form-content" style={{ backgroundColor: "#8f41c4"}}>
                    <div  className="form-items">
                        <h3>Login</h3>
                        <p>Fill in the data below.</p>
                        <form onSubmit={ev =>{ ev.preventDefault(); login(email, password);}} className="requires-validation" noValidate>
                         
                           <div  className="col-md-12">
                                <input  
                                className="form-control" 
                                type="email" 
                                name="email" 
                                placeholder="E-mail Address"
                                value={email}
                                onChange={ev => setEmail(ev.target.value)}
                                />

                                 {/* <div  className="valid-feedback">Email field is valid!</div>
                                 <div  className="invalid-feedback">Email field cannot be blank!</div> */}
                            </div>

                           <div className="col-md-12">
                              <input  
                              className="form-control" 
                              type="password" 
                              name="password" 
                              placeholder="Password"
                              value={password}
                              onChange={ev => setPassword(ev.target.value)}
                              />
                               {/* <div  className="valid-feedback">Password field is valid!</div>
                               <div  className="invalid-feedback">Password field cannot be blank!</div> */}
                           </div><br></br>

                           <div className="col-md-12 text-center">
                                <button 
                                id="submit" 
                                type="submit" 
                                className="btn btn-dark"
                                >Login
                                </button>
                            </div>
                            </form>

                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
    )
}

export default Login