import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nosotros from '../nosotros/Nosotros';

//function Menu () {
	function Menu(){
		const navigate = useNavigate();
		const handleClick = () => {navigate()}
		//const history  = useNavigate();
		//const handleClick = () => history.push('/nosotros');
   
        return (

			
   
            // Acá coloco mi menú de Navegación 
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
 
		    <a className="navbar-brand" href="#">Mi Proyecto</a>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav mr-auto">
			        <li className="nav-item active">
			          	<a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="/nosotros" >Nosotros</a>
						

			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="/servicios">Servicios</a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="/contacto">Contacto</a>
			        </li>
			    </ul>
			    <form className="form-inline mt-2 mt-md-0">
			        <input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar"/>
			        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
			    </form>
		    </div>
			
		</nav>
   
        )
      
    }
   
  export default Menu;