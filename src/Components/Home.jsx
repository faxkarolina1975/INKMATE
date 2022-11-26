import '../../Css_Components/Home.css'
import { Link } from "react-router-dom";
function Home(){
    return(
        <div className='Home'>
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">INKMATE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">

                 
                    <Link className="nav-link" to ="/Gallery">
                           Gallery
                    </Link>
                    <Link className="nav-link" to ="/Login">
                           Log in
                    </Link>
                    <Link className="nav-link" to ="/Registro">
                            Registrar
                    </Link>
                    
                  
                </div>
                </div>
            </div>
            </nav>
            <div className='Text'>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Conoce la pagina</h1>
                        <p className="lead">Conoce los diseños de los tatuadores, comparte tus diseños personales de tatuajes y comunicate con clientes y otros artistas intercambiando criticas y compartiendo experiencias.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">

                        </div>
                    </div>

            </div>
        </div>
    )
}

export default Home