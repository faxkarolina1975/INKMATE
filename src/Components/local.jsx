import React, { useEffect, useState } from "react";

function local() {
    const [name, setlocalName] = useState("");
    const [schedule, setHorario] = useState("");
    const [weekdays, setWeekdays] = useState("");
    const [location, setLocation] = useState("");
    const uid= JSON.parse(localStorage.getItem('uid'))
    console.log(uid)
//     async function createLocals(name,schedule,weekdays,location) {
        
//         const formData = new FormData();
       
//         formData.append("name", localName);
//         formData.append("horario", horario);
//         formData.append("weekdays", weekdays);
//         formData.append("address", address);
//         formData.append("user","632945e1819c88c7ac1b1cb4");
       
//     const response = await fetch("http://localhost:8080/api/local", {
//       method: "POST",
//       body: formData,
//     }).then((r) => r.json());

//     console.log(response);
//     // window.location = '/Login';
//   }

const sendLocal = async()=>{
    const data ={
        name,
        schedule,
        weekdays,
        user:uid,
        location
       
    }
console.log(data);
    const response = await fetch("http://localhost:8080/api/local/",{
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(data)
    }).then(r => r.json());
    console.log(response);
    
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
                <h3>Registrar Local</h3>
                <p>Fill in the data below.</p>
                <form>
                  
                  <div className="col-md-12">
                    <input className="form-control" 
                    type="text" 
                    
                    placeholder="Local Name"
                    onKeyUp={event=> setlocalName(event.target.value)} 
                    />
                  </div> <br></br>

                  <div className="col-md-12">
                    <input
                      className="form-control" 
                      type="time" 
                     
                      placeholder="Horario"
                      onKeyUp={event=> setHorario(event.target.value)} 
                      />
                   
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      
                      placeholder="Weekdays"
                      onKeyUp={event=> setWeekdays(event.target.value)} 
                     
                    />
                  
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                     
                      placeholder="Address"
                      onKeyUp={event=> setLocation(event.target.value)} 
                    />
                
                  </div>

                  <div className="form-button mt-3">
                    <button  id="submit" type="submit" className="btn btn-dark" onClick={()=>sendLocal()}>
                      Agregar
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

export default local;