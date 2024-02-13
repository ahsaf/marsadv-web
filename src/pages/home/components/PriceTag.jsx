import React from 'react'
import tagPriceBorder from '../../../assets/svg/hometagborder.svg';
import mappricetag from '../../../assets/svg/mappricetag.svg';
import hometagarrow from '../../../assets/svg/hometagarrow.svg';
import whiteglobe from '../../../assets/images/whitesmallglob.png';
import whitesmalltile from '../../../assets/svg/smallwhitetiles.svg';
import saleisliveround from '../../../assets/images/saleisliveround.png';
import { colours }from '../../../styles/colours';
import "./styles.css";
import PriceTagCard from './PriceTagCard';
export default function PriceTag({isMap}) {
    

    return (
        <div className='home-pricetag-container'>
            {/* <img src={isMap? mappricetag:tagPriceBorder} style={isMap && false?{backdropFilter:'none'}:null} className='home-tagPriceBorder' /> */}
            {isMap?null:<img src={hometagarrow} className='home-hometagarrow' />}
            {isMap?null: <img src={saleisliveround} className='home-rotate-sale-live' />}
            <PriceTagCard isMap={isMap} />
        </div>
    )
}
