import React from 'react';
import './Poza.css';
import Despre from "../despre/despre"

const Poza = () => {
	return(
		<div className=''>
		<div className='pozacss '>
		 <h2 className=''>Detailing pentru interior & polish pentru exterior</h2>
 		 </div>
 		 <div className='coverpoza'>
 		 <img style={{paddingTop:'0px'}}alt='logo'src="https://cosmetica-auto.ro/wp-content/uploads/2019/03/polish-auto-timisoara-profesional1.jpg"/>
		</div>
		<Despre/>
		</div>

)
}

export default Poza;