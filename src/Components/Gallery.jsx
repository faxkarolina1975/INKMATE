
import '../../Css_Components/Gallery.css'
import Inicio from '../Components/Inicio';
import Datos from '../Style_Comp/Perfil';
import { useEffect, useState } from "react";

function Gallery(){

    const [loading2, setLoading2] = useState(false);


    const [userID, setuserID] = useState("");

    const [locals, setLocals] = useState([]);

    const uid = JSON.parse(localStorage.getItem("uid"));
    


    useEffect(() => {
        async function loadLocals() {
            //setuserID(uid);
            //console.log(userID);
          const response = await fetch(`http://localhost:8080/api/local`).then((r) => r.json());
          console.log(response);

          setLocals(response.locals);
          setLoading2(true);
        }
    
         loadLocals();
      }, []);




      if (!loading2) {
        return (
          <div>
            <h1>Loading..</h1>
          </div>
        );
      } else {


    return(
        <div className='Gallery'>
            <Inicio/> 
                <div className='general-list'>
                    <div className='row'id="row-galeria" >
                    <div className="col" key={locals._id} >

                    {
                        locals.map((locals)=>{
                            return (
                                
                                <div className="card shadow p-2 rounded" id="card-fav" key={locals._id}  >
                                <i className="bi bi-star" width="100" height="100"></i>
                                    <img src="./img/img-perfil.png" className="card-img-top" id="card-img" alt="..."/>
                                        <div className="card-body">
                                        <Datos>{locals.name}</Datos>
                                        </div>
                                    </div>

                               


                            );



                        }
                        
                        )
                    }
                     </div>






                        <div className="col">
                        <div className="card shadow p-2 rounded" id="card-fav"  >
                        <i className="bi bi-star" width="100" height="100"></i>
                            <img src="./img/img-perfil.png" className="card-img-top" id="card-img" alt="..."/>
                                <div className="card-body">
                                <Datos>Tattoo Shop</Datos>
                                </div>
                            </div>

                        </div>

                        <div className="col">
                        <div className="card shadow p-2 rounded" id="card-fav"  >
                        <i className="bi bi-star" width="100" height="100"></i>
                            <img src="./img/img-perfil.png" className="card-img-top" id="card-img" alt="..."/>
                                <div className="card-body">
                                <Datos>Tattoo Shop</Datos>
                                </div>
                            </div>

                        </div>

                        

                    </div>


                    <div className='row ' id="row-galeria">
                        <div className="col">
                        <div className="card shadow p-2 rounded" id="card-fav"  >
                        <i className="bi bi-star" width="100" height="100"></i>
                            <img src="./img/img-perfil.png" className="card-img-top" id="card-img" alt="..."/>
                                <div className="card-body">
                                <Datos>Tattoo Shop</Datos>
                                </div>
                            </div>

                        </div>

                        <div className="col">
                        <div className="card shadow p-2 rounded" id="card-fav"  >
                        <i className="bi bi-star" width="100" height="100"></i>
                            <img src="./img/img-perfil.png" className="card-img-top" id="card-img" alt="..."/>
                                <div className="card-body">
                                <Datos>Tattoo Shop</Datos>
                                </div>
                            </div>

                        </div>

                        <div className="col">
                        <div className="card shadow p-2 rounded" id="card-fav"  >
                        <i className="bi bi-star" width="100" height="100"></i>
                            <img src="./img/img-perfil.png" className="card-img-top" id="card-img" alt="..."/>
                                <div className="card-body">
                                <Datos>Tattoo Shop</Datos>
                                </div>
                            </div>

                        </div>

                        

                    </div>

                    <div className='row ' id="row-galeria">
                        <div className="col">
                        <div className="card shadow p-2 rounded" id="card-fav"  >
                        <i className="bi bi-star" width="100" height="100"></i>
                            <img src="./img/img-perfil.png" className="card-img-top" id="card-img" alt="..."/>
                                <div className="card-body">
                                <Datos>Tattoo Shop</Datos>
                                </div>
                            </div>

                        </div>

                        <div className="col">
                        <div className="card shadow p-2 rounded" id="card-fav"  >
                        <i className="bi bi-star" width="100" height="100"></i>
                            <img src="./img/img-perfil.png" className="card-img-top" id="card-img" alt="..."/>
                                <div className="card-body">
                                <Datos>Tattoo Shop</Datos>
                                </div>
                            </div>

                        </div>

                        <div className="col">
                        <div className="card shadow p-2 rounded" id="card-fav"  >
                        <i className="bi bi-star" width="100" height="100"></i>
                            <img src="./img/img-perfil.png" className="card-img-top" id="card-img" alt="..."/>
                                <div className="card-body">
                                <Datos>Tattoo Shop</Datos>
                                </div>
                            </div>

                        </div>

                        

                    </div>

                    <div className='row ' id="row-galeria">
                        <div className="col">
                        <div className="card shadow p-2  rounded" id="card-fav"  >
                        <i className="bi bi-star" width="100" height="100"></i>
                            <img src="./img/img-perfil.png" className="card-img-top" id="card-img" alt="..."/>
                                <div className="card-body">
                                <Datos>Tattoo Shop</Datos>
                                </div>
                            </div>

                        </div>

                        <div className="col">
                        <div className="card shadow p-2 rounded" id="card-fav"  >
                        <i className="bi bi-star" width="100" height="100"></i>
                            <img src="./img/img-perfil.png" className="card-img-top" id="card-img" alt="..."/>
                                <div className="card-body">
                                <Datos>Tattoo Shop</Datos>
                                </div>
                            </div>

                        </div>

                        <div className="col">
                        <div className="card shadow p-2  rounded" id="card-fav"  >
                        <i className="bi bi-star" width="100" height="100"></i>
                            <img src="./img/img-perfil.png" className="card-img-top" id="card-img" alt="..."/>
                                <div className="card-body">
                                <Datos>Tattoo Shop</Datos>
                                </div>
                            </div>

                        </div>

                        

                    </div>

                </div>
                
            </div>
           
        )
}
}

export default Gallery