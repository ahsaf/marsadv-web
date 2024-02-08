import React from 'react'
import tagPriceBorder from '../../../assets/svg/hometagborder.svg';
import hometagarrow from '../../../assets/svg/hometagarrow.svg';
import whiteglobe from '../../../assets/images/whitesmallglob.png';
import whitesmalltile from '../../../assets/svg/smallwhitetiles.svg';
import saleisliveround from '../../../assets/images/saleisliveround.png';
import { colours }from '../../../styles/colours';
import "./styles.css";
export default function PriceTag(props) {
    

    return (
        <div className='home-pricetag-container'>
            <img src={tagPriceBorder}  className='home-tagPriceBorder' />
            <img src={hometagarrow} className='home-hometagarrow' />
            <img src={saleisliveround} className='home-rotate-sale-live' />
            <div className='tag-main-container'>
                <div className='tag-left-container'>
                    <div className='tag-title-container'>
                        <div className='tag-globe-container'>
                            <img src={whiteglobe} className='tag-whiteglobe' />
                            <img src={whitesmalltile} className='tag-white-tile' />
                        </div>
                        <div className='tag-left-text-container'>
                            <p>For</p>
                            <p style={{color:colours.primary}}>Mars</p>
                            <p>Room</p>
                            <p>Dream</p>
                        </div>
                    </div>
                    <div style={{display:"flex"}}>
                        <div className='tag-leftcount-container'>
                            <p >235345<p className='tag-lefttile-text'>LEFT</p></p>
                        </div>
                    </div>
                </div>
               <div className='tag-right-container'>
                    <p className='tag-price-text'>$10000</p>
                    <p className='tag-perblock-text'>PER BLOCK</p>
               </div>
            </div>
        </div>
    )
}
