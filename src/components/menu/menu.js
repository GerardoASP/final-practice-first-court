// Importa las dependencias necesarias de React y otros recursos como estilos y archivos de imágenes.
import React, { useState, Component } from 'react';
import './stylesMenu.scss'; // Importa los estilos para este componente.
import Logo from '../../assets/images/logo_gerencia-removebg-preview.png'; // Importa la imagen del logo.
import Avatar from '../../assets/images/avatar.jpeg'; // Importa la imagen del avatar.
import 'font-awesome/css/font-awesome.min.css'; // Importa estilos de Font Awesome, una biblioteca de iconos.
//import {Link} from 'react-scroll' //Importa El Objeto Link
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
// Declara una clase llamada Navbar que extiende la clase Component de React.
class Navbar extends Component {
  constructor(props) {
    super(props);
    // Inicializa el estado del componente con una propiedad isMenuOpen que comienza como false.
    this.state = {
      isMenuOpen: false,
    };
  }

  // Define un método llamado handleToggleMenu que se ejecutará cuando se haga clic en el icono de menú.
  handleToggleMenu = () => {
    // Cambia el estado isMenuOpen de true a false o de false a true, dependiendo de su valor actual.
    this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
  };

  // La función render se llama para renderizar el componente en la interfaz de usuario.
  render() {
    // Desestructura la propiedad isMenuOpen del estado para facilitar su uso.
    const { isMenuOpen } = this.state;

    return (
      <div className="menu">
        {/* Elemento de barra de navegación que muestra el icono del menú y maneja su clic */}
        <div className="navbar-toggle" onClick={this.handleToggleMenu}>
          <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        {/* Muestra el logo de la Universidad Autónoma de Manizales */}
        <img src={Logo} alt="Logo UAM" className="logo" />
        {/* Lista de opciones de navegación */}
        <ul className={`navbar-options ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/AboutUs" spy={true} smooth={true} offset={-70} duration={500}>
                About us
            </Link>
          </li>
        </ul>
        {/* Contenedor para la imagen de perfil del usuario */}
        <div className="avatar-container">
          <Link to="/register" >
            <button>
              Register
            </button>
          </Link>
          <Link to="/login">
            <Button variant="outlined" color="secondary" className='button-login'>
              Login
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Exporta el componente Navbar para que pueda ser utilizado en otras partes de la aplicación.
export default Navbar;
