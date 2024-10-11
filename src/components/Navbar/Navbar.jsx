import React, { useState } from 'react';
import images from '../../constants/images';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import Newatom from '../../atom';





const Navbar = () => {
  // const [clicked,setclicked]=useState(false);

  // const istrue = useRecoilValue(Newatom);
  // const settrue= useSetRecoilState(Newatom);
  const [istrue,settrue]=useRecoilState(Newatom);
  // const [closed,setclosed]=useState(false);
  return <>
    {istrue?<div className='navbar__app__onclicked'>
        <MdOutlineRestaurantMenu fontSize={40} className='navbar__app__onclicked__icon' onClick={()=>{
          // setclicked(false);
          settrue(false);
        }}/>
        <ul className='navbar__app__onclicked__list'>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Awards</li>
          <li>Contact</li>
        </ul>
    </div>:  <div className='navbar__app'>
      <div className='navbar__app__logo'>
          <img className='navbar__app__logo__img' src={images.gericht} alt='app_logo'></img>
      </div>
      <div className='navbar__items'>
        <ul className='navbar__items__list'>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Awards</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='navbar__app__login'>
        <a href="#">Login/Register</a>
        <div></div>
        <a href='#'>Book table</a>
      </div>
      <div className='navbar__app__smallscreen'>
          <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>{
              // setclicked(true);
              settrue(true);
          }}/>
      </div>
  </div>}
      

  </>
  


//   <div className='navbar__app'>
//     <div className='navbar__app__image'>
//       <img src={images.gericht} alt='app_logo'/>
//     </div>
//     <ul className='navbar__app__links'>
//       <li>Home</li>
//       <li>About</li>
//       <li>Menu</li>
//       <li>Awards</li>
//       <li>Contact</li>
//     </ul>
//     <div className='navbar__app__login'>
//       <a href='#'>Login/Register</a>
//       <div></div>
//       <a href="#">Book table</a>
//     </div>
//   </div>
        };




export default Navbar;
