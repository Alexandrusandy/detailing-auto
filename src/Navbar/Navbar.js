import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown,Navbar,Nav, } from 'react-bootstrap';
import './Navbar.css';
/*import { Link } from "react-scroll";*/
import {Link} from 'react-router-dom';





const Navigation = () => {
  return(
   
    <Navbar  id="collapsing" sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Navbar.Brand>
   <Link className="white-90 pr3 fix " to="/Poza">Acasa</Link>
   <a href="https://www.facebook.com/pages/category/Automotive--Aircraft---Boat/Oro-Detailing-Auto-108868777411760/"> 
       <i class="fab fa-facebook text-white pr2 fa-1x " ></i></a>
        <a href="https://www.instagram.com/oro.detailing.auto/">
        <i class="fab fa-instagram text-white fa-1x"></i></a>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="collapsing" >
    <Nav className="mr-auto">
 
      <Nav.Link><Link className="white-90 fix" to ="/Despre">Despre Noi 
      </Link></Nav.Link> 
     
      <Nav.Link><Link activeClassName="active"  className="white-90 fix" 
      to="/Servicii">Servicii</Link>
        </Nav.Link>
 
         <Nav.Link >
         <Link className="white-90 fix" to="/Galerie">Galerie Foto</Link>
         </Nav.Link>
        
   
    </Nav>
    <Nav>
    <NavDropdown title="Preturi" id="collasible-nav-dropdown">
    
       <NavDropdown.Item > <Link  className="white-90 fix" to="/Preturiinterior">Detaiing Interior</Link></NavDropdown.Item>  
        <NavDropdown.Item href="/Contact">Detailing Exterior</NavDropdown.Item>
      </NavDropdown>
    <Nav.Link >
     <Link className="white-90 fix" to="/Contact">Contact</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

)
}

export default Navigation;