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
                           Log
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
                        <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-dark btn-lg px-4 me-md-2">Primary</button>

                        </div>
                    </div>

            </div>
        </div>
    )
}

export default Home