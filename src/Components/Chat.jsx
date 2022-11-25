
import { useEffect, useState } from 'react';
import '../../Css_Components/Chat.css'
import Inicio from '../Components/Inicio';
import Nombres from '../Style_Comp/Nombres';

function Chat(){
    const[messages,setMessages]= useState([])
    const[loading,setLoading]= useState(false)
    const[user,setUser]=useState([])

    const[message,setMessage]=useState("")

    const sendMessage = async()=>{
        const data ={
            receiver:"632945e1819c88c7ac1b1cb4",
            message,
            sender:"632945e1819c88c7ac1b1cb4",
            id:"632e8cac808c6fc88648a2a9"
        }

        const response = await fetch("http://localhost:8080/api/message/",{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then(r => r.json());
        console.log(response);
        
    }

    useEffect(()=> {
        async function loadUser()
        {
            const response2 =await fetch("http://localhost:8080/api/user/632e8cac808c6fc88648a2a9").then(r => r.json());
            console.log(response2);
            setUser(response2.user);
        }

        loadUser();
    },[])




    useEffect(()=> {
        async function loadMessage()
        {
            const response = await fetch("http://localhost:8080/api/message/632e8cac808c6fc88648a2a9").then(r => r.json());
            console.log(response);
            setMessages(response.messages);
            setLoading(true);
        }

        loadMessage();
    },[])


console.log(user);
console.log(messages);
    return(
    <div className='Chat'>
        <Inicio/>
        <div className='groups-chat'>
        <ul className="list-group shadow-lg p-3 m-2">
        <li className="list-group-item d-flex justify-content-start align-items-center">
            <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>
                <Nombres>Luis</Nombres>
                <span className="badge badge-primary badge-pill text-dark"> hola</span>
        </li>
            {/*
            { messages.map((message)=>{

                return(  <li key={message._id} className="list-group-item d-flex justify-content-start align-items-center">
                <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>
                    <Nombres>Luis</Nombres>
                    <span className="badge badge-primary badge-pill text-dark ">{ message.message }</span>
                </li>)

            })}
            <li className="list-group-item d-flex justify-content-start align-items-center">
            <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>
            <Nombres>Luis</Nombres>
                <span className="badge badge-primary badge-pill">2</span>
            </li>


    */}
   
        </ul>
        </div>
        <div className="Mensajes shadow-lg p-3 m-2">
            <ul className="list-group" id="mensajes">


            { messages.map((message)=>{

                return(   <li className="list-group-item border-0">
                    <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>
                    <p className="font-weight-bold">Bold text.</p>
                    <br></br>
                    <p className="text-left">{ message.message }</p>
                    </li>
                 )

            })}

            {/*
            <li className="list-group-item border-0">

            <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>
            <p className="font-weight-bold">Bold text.</p>
            <br></br>
            <p className="text-left">Left aligned text on all viewport sizes.</p>
            </li>

            */}
         </ul>
         <br></br>
         <ul className="list-group" >
            <li className="list-group-item border-0 justify-content-end">
                <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onKeyUp={event=> setMessage(event.target.value)} ></textarea>
                    <button type="button" id="enviar" className="btn btn-dark" onClick={()=>sendMessage()} >Enviar</button>
                </div>
                </li>
         </ul>
        </div>

    </div>
    )
}

export default Chat