
import { useState } from 'react';
import { useEffect } from 'react';
import '../../Css_Components/Inicio.css'

function Inicio(){

const [user, setUser]= useState([])


    const uid = JSON.parse(localStorage.getItem("uid"));
    console.log(uid);

    useEffect(()=>{
        async function loadUser()
        {
            const response = await fetch(`http://localhost:8080/api/user/${uid}}`).then((r) =>r.json());
            console.log(response);
            setUser(response);
        }
        loadUser();
    },[]);
    
    return(
        <div className='Menu'>
            <div className='container-fluid mt-0'>
                <div className='row'>
                    
                    <div className='col-auto min-vh-100'>
                        <ul>
                            {
                                user.map((user)=>
                                {
                                    return(
                                        <li key={user._id}>
                                        <img className='perfil-img' src= {user.img} alt="Avatar"/>
                                        </li>
                                    )
                                })
                            }
                           
                            <li>
                                <a className='nav-link px-2'>
                                    <i className='bi-house'/> <span className='ms-1 d-none d-sm-inline'></span>
                                </a>
                            </li>
                            <li>
                                <a className='nav-link px-2'>
                                    <i className='bi-table'/> <span className='ms-1 d-none d-sm-inline'></span>
                                </a>
                            </li>
                            <li>
                                <a className='nav-link px-2'>
                                    <i className='bi-heart'/> <span className='ms-1 d-none d-sm-inline'></span>
                                </a>
                            </li>
                            <li>
                                <a className='nav-link '>
                                    <i className='bi-shop'/><span className='ms-1 d-none d-sm-inline'></span>
                                </a>
                            </li>
                            <li>
                                <a className='nav-link px-2'>
                                    <i className='bi-shop'/><span className='ms-1 d-none d-sm-inline'></span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio