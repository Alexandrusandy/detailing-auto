import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/*import Particles from 'react-particles-js';*/

import Navigation from './Navbar/Navbar';
import Poza from './poza/Poza';
import Despre from './despre/despre';
import Servicii from './Servicii/Servicii';
import Preturiinterior from './Preturi/Preturiinterior';
import Galerie from './Galerie/Galerie';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';


/*import Mapps from './Contact/Map';
*/
/*const particlesOptions = {
  particles: {
    number: {
      value: 30,
          density: {
        enable: true,
        value_area: 500
      }
    }
  }
}*/
              

function App() {

  return (

<div>
    {/*<Particles className='particles'
          params={particlesOptions}
        />*/}
    <div className="App"> 
    <Navigation />
      <Poza /> 
      <Despre/>
      {/*<Mapps/>*/}
      <Servicii/>
      <Galerie/>
      <Preturiinterior/>
      <Contact/>
      <Footer/>
      
        </div>

 </div>
  );
}

export default App;
