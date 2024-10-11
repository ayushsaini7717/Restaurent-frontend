import React from 'react';
import './FindUs.css';
import { images } from '../../constants';
import Newatom from '../../atom';
import { useRecoilValue } from 'recoil';
const FindUs = () => {
  const istrue=useRecoilValue(Newatom);
  return <>
  {istrue?<div className='hidden'></div>: <div className='findus__app'>
      <div className='findus__app__left'>
        <h6>Contact</h6>
        <img src={images.spoon} alt='spoon'/>
        <h2>Find Us</h2>
        <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <h5>Opening Hours</h5>
        <p>Mon - Fri: 10:00 am - 02:00 am</p>
        <p>Sat - Sun: 10:00 am - 03:00 am</p>
        <button>Visit Us</button>
      </div>
      <div className='findus__app__right'>
        <img src={images.findus} alt='findus'/>
      </div>
    </div>}
   
  </>
};

export default FindUs;
