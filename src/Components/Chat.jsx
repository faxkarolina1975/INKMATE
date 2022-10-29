
import '../../Css_Components/Chat.css'
import Inicio from '../Components/Inicio';

function Chat(){
    return(
    <div className='Chat'>
        <Inicio/>
        <div className='groups-chat'>
        <ul className="list-group shadow-lg p-3 m-2">
            <li className="list-group-item d-flex justify-content-start align-items-center">
            <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>
              Cras justo odio
                <span className="badge badge-primary badge-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-start align-items-center">
            <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>
                Dapibus ac facilisis in
                <span className="badge badge-primary badge-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-start align-items-center">
                <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>

                Morbi leo risus
                <span className="badge badge-primary badge-pill">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-start align-items-center">
                <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>

                Morbi leo risus
                <span className="badge badge-primary badge-pill">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-start align-items-center">
                <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>

                Morbi leo risus
                <span className="badge badge-primary badge-pill">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-start align-items-center">
                <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>

                Morbi leo risus
                <span className="badge badge-primary badge-pill">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-start align-items-center">
                <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>

                Morbi leo risus
                <span className="badge badge-primary badge-pill">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-start align-items-center">
                <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>

                Morbi leo risus
                <span className="badge badge-primary badge-pill">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-start align-items-center">
                <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>

                Morbi leo risus
                <span className="badge badge-primary badge-pill">1</span>
            </li>

        </ul>
        </div>
        <div className="Mensajes shadow-lg p-3 m-2">
            <ul className="list-group" id="mensajes">
            <li className="list-group-item border-0">

            <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>
            <p className="font-weight-bold">Bold text.</p>
            <br></br>
            <p className="text-left">Left aligned text on all viewport sizes.</p>
            </li>
            <li className="list-group-item border-0">

            <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>
            <p className="font-weight-bold">Bold text.</p>
            <br></br>
            <p className="text-left">Left aligned text on all viewport sizes.</p>
            </li>
            <li className="list-group-item border-0">

            <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>
            <p className="font-weight-bold">Bold text.</p>
            <br></br>
            <p className="text-left">Left aligned text on all viewport sizes.</p>
            </li>
            <li className="list-group-item border-0">

            <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>
            <p className="font-weight-bold">Bold text.</p>
            <br></br>
            <p className="text-left">Left aligned text on all viewport sizes.</p>
            </li>
            <li className="list-group-item border-0">

            <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>
            <p className="font-weight-bold">Bold text.</p>
            <br></br>
            <p className="text-left">Left aligned text on all viewport sizes.</p>
            </li>
         </ul>
         <br></br>
         <ul className="list-group" >
            <li className="list-group-item border-0 justify-content-end">
                <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button type="button" id="enviar" className="btn btn-dark">Dark</button>
                </div>
                </li>
         </ul>
        </div>

    </div>
    )
}

export default Chat