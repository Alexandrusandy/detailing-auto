import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown,Navbar,Nav, } from 'react-bootstrap';
import './Navbar.css';
/*import { Link } from "react-scroll";*/
import {Link} from 'react-router-dom';





const Navigation = () => {
  return(
   
    <Navbar  id="collapsing" sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Navbar.Brand href="">Acasa</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="collapsing" >
    <Nav className="mr-auto">
 
      <Nav.Link href="/Despre">Despre Noi</Nav.Link> 
     
      <Nav.Link><Link activeClassName="active" to="/Servicii">Servicii</Link>
        </Nav.Link>

         <Nav.Link>
         <Link to="/Galerie">Galerie Foto</Link>
         </Nav.Link>
        
   
    </Nav>
    <Nav>
    <NavDropdown title="Preturi" id="collasible-nav-dropdown">
    
       <NavDropdown.Item> <Link to="/Preturiinterior">Detaiing Interior</Link></NavDropdown.Item>  
        <NavDropdown.Item href="/Contact">Detailing Exterior</NavDropdown.Item>
      </NavDropdown>
    <Nav.Link>
     <Link to="/Contact">Contact</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

)
}

export default Navigation;