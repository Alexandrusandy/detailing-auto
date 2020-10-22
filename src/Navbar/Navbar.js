import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav, } from 'react-bootstrap';

import { Link } from "react-scroll";


const Navigation = () => {
	return(
   
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" >
 
 <Link
    activeClass="active"
    to="galerie"
    spy={true}
    smooth={true}
    offset={-240}
    duration={300}
>      <Nav.Link href="./Galerie/Galerie">Galerie Foto</Nav.Link>
    </Link>
    <Link
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-240}
    duration={10}
>      <Nav.Link  href="./Contact/Contact"> Contact</Nav.Link>
</Link>
</Navbar>

)
}

export default Navigation;