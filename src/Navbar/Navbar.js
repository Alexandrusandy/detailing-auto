import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown,Navbar,Nav, } from 'react-bootstrap';
import './Navbar.css';
import { Link } from "react-scroll";
import {NavLink} from 'react-router-dom';





const Navigation = () => {
  return(
   
    <Navbar  id="collapsing" sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Navbar.Brand href="./poza/Poza.js">Acasa</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="collapsing" >
    <Nav className="mr-auto">
    <Link
    activeClass="active"
    to="despre-noi"
    spy={true}
    smooth={true}
    offset={-240}
    duration={300}
>
      <Nav.Link href="/Despre">Despre Noi</Nav.Link> </Link>
       <Link
    activeClass="active"
    to="ServiciiID"
    spy={true}
    smooth={true}
    offset={-240}
    duration={300}>
      <Nav.Link activeClassName="active" href="/Servicii">Servicii</Nav.Link></Link>
         <Nav.Link href="/Galerie">Galerie Foto</Nav.Link>
   
    </Nav>
    <Nav>
    <NavDropdown title="Preturi" id="collasible-nav-dropdown">
    
<NavDropdown.Item href="/Preturiinterior">Detaiing Interior</NavDropdown.Item>   
    
        <NavDropdown.Item href="/Contact">Detailing Exterior</NavDropdown.Item>
      </NavDropdown>
     <Nav.Link         > <NavLink to="/Contact">Contact</NavLink>
</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

)
}

export default Navigation;