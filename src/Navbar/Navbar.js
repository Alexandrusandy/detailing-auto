import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown,Navbar,Nav, } from 'react-bootstrap';
import './Navbar.css';
import { Link } from "react-scroll";
import {NavLink} from 'react-router-dom';





const Navigation = () => {
  return(
   
    <Navbar  id="collapsing" sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Navbar.Brand href="https://oro-detailing.netlify.app">Acasa</Navbar.Brand>
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
        
<Link
    activeClass="active"
    to="galerie"
    spy={true}
    smooth={true}
    offset={-240}
    duration={300}>
         <Nav.Link>
         <NavLink to="/Galerie">Galerie Foto</NavLink>
         </Nav.Link>
         </Link>
   
    </Nav>
    <Nav>
    <NavDropdown title="Preturi" id="collasible-nav-dropdown">
    <Link
    activeClass="active"
    to="interior"
    spy={true}
    smooth={true}
    offset={-240}
    duration={300}>
<NavDropdown.Item> <NavLink to="/Preturiinterior">Detaiing Interior</NavLink>
</NavDropdown.Item>   </Link>
    
        <NavDropdown.Item href="/Contact">Detailing Exterior</NavDropdown.Item>
      </NavDropdown>
    <Link
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-240}
    duration={300}>
     <Nav.Link         > <NavLink to="/Contact">Contact</NavLink>
</Nav.Link></Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

)
}

export default Navigation;