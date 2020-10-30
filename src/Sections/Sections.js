import React, { Component } from 'react';
import Poza from '../poza/Poza';
import Servicii from '../Servicii/Servicii';
import Galerie from '../Galerie/Galerie';
import Preturiinterior from '../Preturi/Preturiinterior';
import Contact from '../Contact/Contact';
import {Route} from 'react-router-dom';
import Despre from "../despre/despre"


export class Sections extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Poza} exact />
                <Route path="/Despre" component={Despre} exact />
                <Route path="/Poza" component={Poza} exact />
                <Route path="/Servicii" component={Servicii} />
                <Route path="/Galerie" component={Galerie} />
                <Route path="/Preturiinterior" component={Preturiinterior} />
                <Route path="/contact" component={Contact} />
            </section>
        )
    }
}

export default Sections