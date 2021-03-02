import React from 'react';
import './Footer.css';
const Footer =() =>{
  
    return (
        <div className="bg-dark text-white  " >
       {/*  <a href="google.ro">*/}<h3 class=" text-white tc shadow-5 ">www.Oro-Detailing.ro</h3>{/*</a>*/}
            <div className="footerSize">
             <div className=''>
           
            <img  className="logoo" style={{paddingTop:'0px'}}alt='logo'src="https://scontent.fotp3-1.fna.fbcdn.net/v/t1.0-9/129003031_200490851582885_5196760165926064333_n.jpg?_nc_cat=107&ccb=3&_nc_sid=09cbfe&_nc_ohc=FydGYSpMPikAX8DbCYD&_nc_ht=scontent.fotp3-1.fna&oh=cb9694a29d1caad6d9955f1469f210d9&oe=606524F5"/>
       </div>
       <div className="tc">
        <div>
      {/* <a href="https://www.facebook.com/pages/category/Automotive--Aircraft---Boat/Oro-Detailing-Auto-108868777411760/"> */}
       <i class="fab fa-facebook text-white pr2 fa-3x " ></i>{/*</a>*/}
       {/* <a href="https://www.instagram.com/oro.detailing.auto/">*/}
        <i class="fab fa-instagram text-white fa-3x"></i>{/*</a>*/}
        </div>
       <div>
       <a href="tel:0729 129 751"><h5 class="fas fa-phone pa2 text-white">0766129751</h5></a>
       </div>
       <div>
       <h5 class="fas fa-map-marker-alt pl2"> Strada intrarea saturn</h5>
       </div>
       </div>
                
                    
            </div>
              <h6 className="tc ma0">Developed by Alexandru Hutupasu</h6>
            </div>
         
       
      
       
    )
  }


export default Footer;