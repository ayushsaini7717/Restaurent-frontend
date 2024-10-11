import React from 'react';

import './AboutUs.css';
import images from '../../constants/images';
import Newatom from '../../atom';
import { useRecoilValue } from 'recoil';

const AboutUs = () => {
  const istrue=useRecoilValue(Newatom);
  return <>
  {istrue?<div className='hidden'></div>:<div className='aboutus__app'>
        <div className='aboutus__app__g'>
            <img src={images.G}/>
        </div>
        <div className='aboutus__left aboutus'>
            <h1>About Us</h1>
            <img src={images.spoon} alt='spoon_img'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        </div>
        <div className='aboutus__images'>
            <img className='aboutus__knife__img' src={images.knife}/>
        </div>
        <div className='aboutus__left history'>
          <h1>Our History</h1>
          <img src={images.spoon} alt='spoon_img'/>
          <p>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        </div>
    </div>}
    
  </>
};

export default AboutUs;
