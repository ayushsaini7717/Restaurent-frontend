import React from 'react';
import images from '../../constants/images';
import './Chef.css';
import Newatom from '../../atom';
import { useRecoilValue } from 'recoil';

const Chef = () => {
  const istrue=useRecoilValue(Newatom);

  return <>
  {istrue?<div className='hidden'></div>:<div className='chef__app'>
     <div className='chef__app__bg'>
        <img src={images.bg} alt='background'/>
        <div className='chef__app__imgchef'>
          <div>
            <img src={images.chef} alt='chefImage'/>
          </div>
        </div>
        <div className='chef__app__right'>
          <h4>Chef’s Word</h4>
          <img src={images.spoon} alt='spoon'/>
          <h1 className='chef__app__believe'>What we believe in</h1>
          <div className='chef__app__para'>
            <h2>"</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
          </div>
          <h1 className='chef__app__name'>Kevin Luo</h1>
          <p className='chef__app__founder'>Chef & Founder</p>
          <div className='chef__app__sign'>
            <img className='chef__app__sign' src={images.sign}/>
          </div>
        </div>
     </div>
   
  </div>}
   
  </>
};

export default Chef;
