import React from 'react';
import './App.css';

import Footer from './Footer/Footer';
import Navigation from './Navbar/Navbar';
import Sections from './Sections/Sections';

import {BrowserRouter as Router} from 'react-router-dom';


/*import Mapps from './Contact/Map';

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
    <Router>
      <div className="App"> 
         <Navigation />
         <Sections />
         <Footer/>
      </div>
    </Router>


  );
}

export default App;
