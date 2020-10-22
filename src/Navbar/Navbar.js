import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown,Nav, } from 'react-bootstrap';
import {
MDBNavbar, MDBNavbarBrand,   MDBNavbarToggler, MDBCollapse} from "mdbreact";
import { Link } from "react-scroll";


class Navigation extends Component {

  state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
	return(
   
    <MDBNavbar color="black" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
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
    duration={300}
>      <Nav.Link href="./Galerie/Galerie">Galerie Foto</Nav.Link>
    </Link>
   
    <Nav>
    <NavDropdown title="Preturi" id="collasible-nav-dropdown">
       <Link
    activeClass="active"
    to="interior"
    spy={true}
    smooth={true}
    offset={-240}
    duration={300}
>  
<NavDropdown.Item href="./Preturiinterior">Detaiing Interior</NavDropdown.Item>   
    </Link> 
        <NavDropdown.Item href="./Preturi/Preturi.html">Detailing Exterior</NavDropdown.Item>
      </NavDropdown>
     <Link
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-240}
    duration={10}
>      <Nav.Link  href="./Contact/Contact"> Contact</Nav.Link>
</Link>
    </Nav>
     </MDBCollapse>
      </MDBNavbar>
);
}
}

export default Navigation;