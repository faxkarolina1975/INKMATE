import { empty } from "dom/lib/mutation";
import { useEffect, useState } from "react";
import "../../Css_Components/Chat.css";
import Inicio from "../Components/Inicio";
import Nombres from "../Style_Comp/Nombres";

function Chat() {
  //mensajes de la conversacion
  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  const [loading2, setLoading2] = useState(false);

  const [user, setUser] = useState([]);
  const [chats, setChat] = useState([]);

  //nombre del usuario al que envia mensajes
  const [nameUser, setnameUser] = useState([]);
  //id del usuario del login
  const [userID, setuserID] = useState("");
  //id de la conversacion
  const [conveID, setconveID] = useState("");
  //message nuevo
  const [message, setMessage] = useState("");
  // id comprobar si quiere crear uno nuevo
  const [nuevo, setNuevo] = useState(false);

  const [allUsers, setallUsers] = useState("");
  // informacion del receiver
  const [receiverID, setreceiverID] = useState("");
  const [receiverName, setreceiverName] = useState("");
  //const prueba ="632945e1819c88c7ac1b1cb4";

  const uid = JSON.parse(localStorage.getItem("uid"));
  if (!uid) {
    window.location = "/Login";
  }
  //console.log(uid)

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch(`http://localhost:8080/api/user`).then((r) =>
        r.json()
      );
      const users = response.filter((user) => user._id !== uid);
      setLoading2(true);
      setallUsers(users);
    }
    async function loadChats() {
      setuserID(uid);
      console.log(userID);
      const response = await fetch(
        `http://localhost:8080/api/conversations/${uid}`
      ).then((r) => r.json());
      console.log(response);
      if (response.conversations.length == 0) {
        setNuevo(true);
      }
      setChat(response.conversations);
    }

    loadChats();
    loadUsers();
  }, []);

  //useEffect(() => {});

  useEffect(() => {}, []);

  const sendMessage = async () => {
    const data = {
      receiver: receiverID,
      message,
      sender: uid,
      id: conveID,
    };
    console.log(data);
    const response = await fetch("http://localhost:8080/api/message/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const dataJSON = await response.json();
    if (response.status !== 200) {
      if (dataJSON.errors) {
        dataJSON.errors.forEach((element) => {
          alert(element.msg);
        });
      } else {
        alert(dataJSON.msg);
      }

      return;
    }
    console.log(response);
  };

  {
    /* 
useEffect(()=> {
        async function loadUser()
        {
            const response2 =await fetch("http://localhost:8080/api/user/632e8cac808c6fc88648a2a9").then(r => r.json());
            console.log(response2);
            setUser(response2.user);
        }

        loadUser();
    },[])
*/
  }

  useEffect(
    () => {
      async function loadMessage() {
        console.log("Si jala");
        if(conveID===""){
          console.log("sexo");
          setMessage([]);
          return;
        }
        const response = await fetch(
          `http://localhost:8080/api/message/${conveID}`
        ).then((r) => r.json());
        console.log(response);
        setMessages(response.messages);
        setLoading(true);
      }

      loadMessage();
    },
    [conveID],
    [receiverID]
  );

  function GetidUsuario(idUser, nameUser) {
    setreceiverName(nameUser);
    setreceiverID(idUser);
    setconveID("");
    console.log(idUser, nameUser);
    if(conveID===""){
      console.log("sexo");
      setMessage([]);

    }
  }

  function idChat(idConv, nameUser, idUser) {
    setnameUser(nameUser);
    setreceiverID(idUser);
    setconveID(idConv);
    console.log(idConv);
  }

  function tal() {
    setNuevo(true);
  }
  // if (chats.length != 0) ;
  if (!loading2 && !allUsers) {
    return (
      <div>
        <h1>Loading..</h1>
      </div>
    );
  } else {
    console.log(allUsers);
    console.log("Aqui estamos");
    return (
      <div className="Chat">
        <Inicio />
        <div className="groups-chat">
          <ul className="list-group shadow-lg p-3 m-2">
            <li styled="list-style-type: none;">
              <button id="btn_new"
                className="btn btn-dark"
                styled="border-radius: 100%;"
                onClick={() => tal()}
              >
                +
              </button>
            </li>
            {nuevo == true ? (
              allUsers.map((allUsers) => {
                return (
                  <li id ="chats_li"
                    className="list-group-item d-flex justify-content-start align-items-center"
                    onClick={() => GetidUsuario(allUsers._id, allUsers.name)}
                    key={allUsers._id}
                  >
                    <img
                      className="perfil-img"
                      src={allUsers.img}
                      alt="Avatar"
                    />
                    <Nombres>{allUsers.name}</Nombres>
                    <span className="badge badge-primary badge-pill text-dark"></span>
                  </li>
                );
              })
            ) : (
              <div></div>
            )}
            {chats.map((chats) => {
              return (
                <li
                id ="chats_li"
                  className="list-group-item d-flex justify-content-start align-items-center"
                  onClick={() => {
                    uid === chats.user._id
                      ? idChat(chats._id, chats.artist.name, chats.artist._id)
                      : idChat(chats._id, chats.user.name, chats.user._id);
                  }}
                  key={chats._id}
                >
                  <img
                    className="perfil-img"
                    src={
                      uid === chats.user._id ? chats.artist.img : chats.user.img
                    }
                    alt="Avatar"
                  />
                  <Nombres>
                    {uid === chats.user._id
                      ? chats.artist.name
                      : chats.user.name}
                  </Nombres>
                  <span className="badge badge-primary badge-pill text-dark">
                    {chats.message}
                  </span>
                </li>
              );
            })}

            {/*
                    <li className="list-group-item d-flex justify-content-start align-items-center">
                        <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>
                            <Nombres>Luis</Nombres>
                            <span className="badge badge-primary badge-pill text-dark"> hola</span>
                    </li>
                    
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
            {user.map((user) => {
              return <p className="font-weight-bold">{user.name}.</p>;
            })}

            {messages.map((message) => {
              return (
                <li className="list-group-item border-0" key={message._id}>


                  <p id="Nombre" className="font-weight-bold">{nameUser}</p>
                  <p id="enviado" className="font-weight-normal">   {message.message}</p>
                </li>
              );
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
          <ul id ="Sendbox" className="list-group">
            <li className="list-group-item border-0 justify-content-end">
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onKeyUp={(event) => setMessage(event.target.value)}
                ></textarea>
                <button
                  type="button"
                  id="enviar"
                  className="btn btn-dark"
                  onClick={() => sendMessage()}
                >
                  Enviar
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Chat;
