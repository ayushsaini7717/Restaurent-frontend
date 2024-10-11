import React from 'react';
import { meal } from '../../constants';
import './Intro.css';
import Newatom from '../../atom';
import { useRecoilValue } from 'recoil';




const Intro = () => {
  const istrue=useRecoilValue(Newatom);
  return <>
  {istrue?<div className='hidden'></div>:<div className='intro__app'>
      <video controls autoPlay muted loop src={meal} id='myvid' type="video/mp4"></video>
    </div>}
    
  </>
};

export default Intro;
