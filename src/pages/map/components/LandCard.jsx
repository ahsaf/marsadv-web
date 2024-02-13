import React from 'react'
import marsground from '../../../assets/images/marsground.png';
import qrcode from '../../../assets/images/qrcode.png';
import saleIcon from '../../../assets/svg/saletag.svg';
export default function LandCard(props) {
    

    return (
        <div className='land-details-card-container'>
            <img  src={marsground} className='land-details-mars-ground-image-background-blur' />
            <div className='land-black-glass' />
            <img  src={marsground} className='land-details-mars-ground-image' />
            <div className='land-details-qr-code-size-container'>
                <div className='land-details-size-id-container'>
                    <p className='land-details-size-text'>1X1</p>
                    <p className='land-details-qr-id-text'>#12FET45</p>
                </div>
                <img src={qrcode} className='land-details-qrcode-img' />
            </div>
            {/* Sale Amout card */}
            <div className='land-details-price-tag-container'>
                <img src={saleIcon} className='land-details-sale-icon' />
                <p className='land-details-price-text'>$1000</p>
            </div>
        </div>
    )
}
