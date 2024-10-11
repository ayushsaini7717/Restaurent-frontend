import React from 'react';

import './Header.css';
import images from '../../constants/images';
import Newatom from '../../atom';
import { useRecoilValue } from 'recoil';
const Header = () => {
  const istrue=useRecoilValue(Newatom);
  return <>
  {istrue?<div className='hidden'></div>:<div className='header__app__container'>
      <div className='header__app__inner'>
          <div className='header__app__left'>
              <div className='header__app__left__header'>Chase the new Flavour</div>
              <img src={images.spoon}/>
              <div className='header__app__left__main'>
                <div>
                  The key to 
                </div>
                <div>
                  Fine dining
                  </div>

                </div>
              <div className='header__app__left__para'>
                 Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi 
                 facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
              </div>
              <div className='header__app__left__btn'>
                <button>Explore Menu</button>
              </div>
          </div>
          <div className='header__app__welcome'>
            <img src={images.welcome}/>
          </div>
      </div>

    </div>}
    
  </>
};

export default Header;
