import React from 'react';
import { images } from '../../constants';
import './Laurels.css';
import Newatom from '../../atom';
import { useRecoilValue } from 'recoil';

const Laurels = () => {
  const istrue=useRecoilValue(Newatom);
  return <>
  {istrue?<div className='hidden'></div>:<div className='laurels__app'>
      <div className='laurels__app__logo'>
          <img src={images.logo} alt='logo'/>
      </div>
      <div className='laurels__app__rewards'> 
        <h4>Awards & recognition</h4>
        <img src={images.spoon} alt='spoon'/>
        <h1>Our Laurels</h1>
        <div className='laurels__app__grid'>
          <div className='laurels__app__reward2'>
            <img src={images.award02} alt='award2'/>
            <div className='laurels__app__heading'>
              <h5>Bib Gourmond</h5>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className='laurels__app__reward1'>
            <img src={images.award01} alt='award1'/>
            <div className='laurels__app__heading'>
              <h5>Rising Star</h5>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className='laurels__app__reward5'>
            <img src={images.award05} alt='award5'/>
            <div className='laurels__app__heading'>
              <h5>AA Hospitality</h5>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className='laurels__app__reward3'>
            <img src={images.award03} alt='award3'/>
            <div className='laurels__app__heading'>
              <h5>Outstanding Chef</h5>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='laurels__app__right'>
        <img src={images.laurels} alt='laurels'/>
      </div>
    </div>}
    
  </>
};

export default Laurels;
