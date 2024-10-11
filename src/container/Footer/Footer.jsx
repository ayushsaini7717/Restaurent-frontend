import React from 'react';

import './Footer.css';
import { images } from '../../constants';
import Newatom from '../../atom';
import { useRecoilValue } from 'recoil';
const Footer = () => {
  const istrue=useRecoilValue(Newatom);
  return <>
  {istrue?<div className='hidden'></div>:<div className='footer__app'>
      <div className='footer__app__top'>
          <h5>Newsletter</h5>
          <div>
            <img src={images.spoon} alt='spoon'/>
          </div>
          <h2>Subscribe to Our Newsletter</h2>
          <p>And never miss latest Updates!</p>
          <div className='footer__app__input'>
            <input  type="text" placeholder='Email Address'/>
            <button>Subscribe</button>
          </div>
      </div>
      <div className='footer__app__bottom'>
        <div className='footer__app__grid'>
          <div className='footer__app__grid1'>
            <h4>Contact Us</h4>
            <p>9 W 53rd St, New York, NY 10019, USA</p>
            <p>+1 212-344-1230</p>
            <p>+1 212-555-1230</p>
          </div>
          <div className='footer__app__grid2'>
            <div className='logo'>
              <img src={images.gericht} alt='logo'/>
            </div>
            <img src={images.spoon} alt='spoon'/>
            <p className='footer__app__grid2__para'>"The best way to find yourself is to lose yourself in the service of others.”</p>
          </div>
          <div className='footer__app__grid3'>
            <h4>Working Hours</h4>
            <p>Monday-Friday: 08:00 am -12:00 am</p>
            <p>Saturday-Sunday: 07:00am -11:00 pm</p>
          </div>
        </div>
      </div>
    </div>}
    
  </>
};

export default Footer;
