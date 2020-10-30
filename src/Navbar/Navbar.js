import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown,Navbar,Nav, } from 'react-bootstrap';
import './Navbar.css';
/*import { Link } from "react-scroll";*/
/*import {NavLink} from 'react-router-dom';*/





const Navigation = () => {
  return(
   
    <Navbar  id="collapsing" sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Navbar.Brand href="">Acasa</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="collapsing" >
    <Nav className="mr-auto">
 
      <Nav.Link href="/Despre">Despre Noi</Nav.Link> 
     
      <Nav.Link activeClassName="active" href="/Servicii">Servicii</Nav.Link>
        

        
         <Nav.Link href="/Galerie">Galerie Foto</Nav.Link>
    
        
   
    </Nav>
    <Nav>
    <NavDropdown title="Preturi" id="collasible-nav-dropdown">
    
       <NavDropdown.Item  href="/Preturiinterior">Detaiing Interior</NavDropdown.Item>  
        <NavDropdown.Item href="/Contact">Detailing Exterior</NavDropdown.Item>
      </NavDropdown>
   
     <Nav.Link href="/Contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

)
}

export default Navigation;