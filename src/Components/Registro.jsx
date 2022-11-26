import React, { useEffect, useState } from "react";
import jwt from 'jwt-decode'
function Registro() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  async function createUsers(name, lastname, username, password, email, image) {
    const birthday = "2022-02-01";
    const formData = new FormData();
    console.log(image);
    formData.append("email", email);
    formData.append("name", name);
    formData.append("lastname", lastname);
    formData.append("username", username);
    formData.append("birthday", birthday);
    formData.append("password", password);
    formData.append("file", image);

    //const newUser = { email, name, lastname, username, birthday, password };

    const response = await fetch("http://localhost:8080/api/user", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(response);
    console.log(data);

    if(response.status != 200){

      if(data.errors){
        data.errors.forEach(element => {
          alert(element.msg);
        });
      }else{
        alert(data.msg);

      }
      return;
    }

    window.location = '/Login';
  }

  return (
    <div>
      <div className="form-body">
        <div className="row">
          <div className="form-holder" style={{ backgroundColor: "#8f41c4" }}>
            <div
              className="form-content"
              style={{ backgroundColor: "#8f41c4" }}
            >
              <div className="form-items">
                <h3>Register Today</h3>
                <p>Fill in the data below.</p>
                <form
                  onSubmit={(ev) => {
                    ev.preventDefault();
                    createUsers(
                      firstName,
                      lastName,
                      username,
                      password,
                      email,
                      image
                    );
                  }}
                  className="requires-validation"
                  noValidate
                >
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="file"
                      name="firstName"
                      placeholder="Archivo Imagen de Perfil"
                      onChange={(ev) => setImage(ev.target.files[0])}
                    />
                    {/* <div  className="valid-feedback">Email field is valid!</div>
                                 <div  className="invalid-feedback">Email field cannot be blank!</div> */}
                  </div>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(ev) => setFirstName(ev.target.value)}
                    />
                    {/* <div  className="valid-feedback">Email field is valid!</div>
                                 <div  className="invalid-feedback">Email field cannot be blank!</div> */}
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(ev) => setLastName(ev.target.value)}
                    />
                    {/* <div  className="valid-feedback">Email field is valid!</div>
                                 <div  className="invalid-feedback">Email field cannot be blank!</div> */}
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      placeholder="User Name"
                      value={username}
                      onChange={(ev) => setUsername(ev.target.value)}
                    />
                    {/* <div  className="valid-feedback">Email field is valid!</div>
                                 <div  className="invalid-feedback">Email field cannot be blank!</div> */}
                  </div>

                  <div className="col-md-12">
                    <select className="form-select mt-3">
                      <option defaultValue="">Position</option>
                      <option value="jweb">Tatuador</option>
                      <option value="sweb">Cliente</option>
                    </select>
                    {/* <div  className="valid-feedback">You selected a position!</div>
                                <div  className="invalid-feedback">Please select a position!</div> */}
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={(ev) => setPassword(ev.target.value)}
                    />
                    {/* <div  className="valid-feedback">Password field is valid!</div>
                               <div  className="invalid-feedback">Password field cannot be blank!</div> */}
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="password"
                      name="password2"
                      placeholder="Confirm Password"
                    />
                    {/* <div  className="valid-feedback">Password field is valid!</div>
                               <div  className="invalid-feedback">Password field cannot be blank!</div> */}
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="E-mail Address"
                      value={email}
                      onChange={(ev) => setEmail(ev.target.value)}
                    />
                    {/* <div  className="valid-feedback">Email field is valid!</div>
                                 <div  className="invalid-feedback">Email field cannot be blank!</div> */}
                  </div>

                  <div className="form-button mt-3">
                    <button  id="submit" type="submit" className="btn btn-dark">
                      Register
                    </button>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
