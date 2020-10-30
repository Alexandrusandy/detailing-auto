import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import * as serviceWorker from './serviceWorker';

/*import {BrowserRouter,Route} from 'react-router-dom';*/

import App from './App';
/*import Navigation from './Navbar/Navbar';
import Preturiinterior from './Preturi/Preturiinterior';
import Galerie from './Galerie/Galerie';
import Contact from './Contact/Contact';*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();

/*function Main(){
  return(
    <div>
           <Navigation />                
        <Route path="/Preturiinterior" component={Preturiinterior}></Route>
        <Route path="/Galerie" component={Galerie}></Route>
        <Route  path="/Contact" component={Contact}></Route>
       <App />
     </div>
  )
}

ReactDOM.render(<BrowserRouter><Main></Main></BrowserRouter>,document.getElementById("root"));*/