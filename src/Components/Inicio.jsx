
import '../../Css_Components/Inicio.css'

function Inicio(){
    return(
        <div className='Menu'>
            <div className='container-fluid mt-0'>
                <div className='row'>
                    <div className='col-auto min-vh-100'>
                        <ul>
                            <li>
                                <img className='perfil-img' src="./img/img-perfil.png" alt="Avatar"/>
                            </li>
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