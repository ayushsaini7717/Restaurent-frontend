import React from 'react';

import './SpecialMenu.css';
import images from '../../constants/images';
import Newatom from '../../atom';
import { useRecoilValue } from 'recoil';

const SpecialMenu = () => {
  const istrue=useRecoilValue(Newatom);
  return <>
  {istrue?<div className='hidden'></div>: <div className='specialmenu__app'>
      <div className='specialmenu__app__header'>
        <h5>Menu that fits you palatte</h5>
        <div>
          <img src={images.spoon}/>
        </div>
        <h1>Today’s Special</h1>
      </div>
      <div className='specialmenu__app__items'>
        <div className='specialmenu__app__items__left'>
            <h2>Wine & Beer</h2>
            <Items title={'Chapel Hill Shiraz'} price={56}/>
            <h6 className='specialmenu__app__subheader'>AU | Bottle</h6>
            <Items title={'Catena Malbec'} price={59}/>
            <h6 className='specialmenu__app__subheader'>AU | Bottle</h6>
            <Items title={'La Vieille Rosé'} price={44}/>
            <h6 className='specialmenu__app__subheader'>FR | 750 ml</h6>
            <Items title={'Rhino Pale Ale'} price={31}/>
            <h6 className='specialmenu__app__subheader'>CA | 750 ml</h6>
            <Items title={'Irish Guinness'} price={26}/>
            <h6 className='specialmenu__app__subheader'>IE | 750 ml</h6>
        </div>
        <img className='specialmenu__app__img' src={images.menu}/>
        <div className='specialmenu__app__items__right'>
          <h2>Cocktails</h2>
          <Items title={'Aperol Spritz'} price={20}/>
          <h6 className='specialmenu__app__subheader'>Aperol | Villa Marchesi prosecco | soda | 30ml</h6>
          <Items title={"Dark 'N' Stormy"} price={16}/>
          <h6 className='specialmenu__app__subheader'>Dark rum | Ginger beer | Slice of lime.</h6>
          <Items title={'Daiquiri'} price={10}/>
          <h6 className='specialmenu__app__subheader'>Rum | Citrus juice | Sugar</h6>
          <Items title={'Old Fashioned'} price={31}/>
          <h6 className='specialmenu__app__subheader'>Bourbon | Brown sugar | Angostura Bitters</h6>
          <Items title={'Negroni'} price={26}/>
          <h6 className='specialmenu__app__subheader'>Gin | Sweet Vermouth | Campari | Orange garnish</h6>
        </div>
      </div>
      <div className='specialmenu__app__btn'>
        <button>View More</button>
      </div>
    </div>}
   
  </>
};


const Items=({title,price})=>{
  return <>
    <div className='specialmenu__app__itemlist'>
      <h3 className='specialmenu__app__title'>{title}</h3>
      <div></div>
      <h3 className='specialmenu__app__price'>{`$ ${price}`}</h3>
    </div>
  </>
}


export default SpecialMenu;
