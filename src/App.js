import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Poza from './poza/Poza';
import Despre from './despre/despre';
import Servicii from './Servicii/Servicii';
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


    <div className="App"> 
   {/* <Particles className='particles'
          params={particlesOptions}
        />*/}
          <Poza /> 
      <Despre/>
      {/*<Mapps/>*/}
      <Servicii/>
     
      
      <Footer/>
      
        </div>


  );
}

export default App;
