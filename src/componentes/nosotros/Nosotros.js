import React from 'react';
 
import Menu from '../menu/Menu';
import Jumbotron from './jumbotron/Jumbotron'; // Este Componente lo crearé a continuación 
import Detalles from './detalles/Detalles'; // Este Componente lo crearé a continuación 
import Footer from '../footer/Footer';
 
 
class Nosotros extends React.Component {
 
	render() {
 
		return(
 
			
 
		
 
			<main role="main" className="flex-shrink-0 mt-5" id='profile'>
		        
				<Jumbotron /> 
				<Detalles /> 
	  		</main>
 
	  		
 
	  		
 
		)
 
	}
 
}
 
export default Nosotros;