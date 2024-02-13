import React, { useState } from 'react';
import marsGlob from '../../../assets/images/marslogo.png';

import xCloseIcon from '../../../assets/svg/x.svg';
import AppButton from '../../../components/elements/AppButton';
import PaymentForm from '../../payment/paymentForm';
import LandCard from './LandCard';
 const LandDetails = React.forwardRef(({onBuyLnad},ref) => {
    React.useImperativeHandle(ref, () => ({
        updateCusDetails(coords) {
            setIsvisible(true);
      }}));
      const [isVisible,setIsvisible] = useState(false);
      const [closing,setIsClosing] = useState(false);
      const [showPaymentForm,setShowPayment] = useState(false);
     
      const onClose = ()=>{
        setIsClosing(true);
        setTimeout(()=>{
            setIsvisible(false);
            setIsClosing(false);
            onCancelPay();
        },450);
      }
      const onBuy = () =>{
        setShowPayment(true);
       
      }
      const onCancelPay = () =>{
        setShowPayment(false);
      }

      if(isVisible){
        return (
            <div onClick={onClose} className='land-details-background-container'>
                 <div onClick={(e)=>{ e.stopPropagation();
                }} 
                className={`land-details-container ${closing?"land-details-container-out-animation":"land-details-container-in-animation"}`}>
                    {showPaymentForm?
                    <PaymentForm onClose={() =>{
                      onClose();
                      onBuyLnad();

                    }} onCancel={() =>{
                      onCancelPay();
                    }} />:
                    <>
                        <img  src={marsGlob} className='land-details-mars-logo' />
                        <p className='land-detais-name-text'>MARS . ADVS</p>
                        <p className='land-detais-id-text'>#1245GTFH</p>
                        <p className='land-detais-content-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                        <LandCard />
                        <div className='land-details-share-buy-button'>
                            <AppButton style={{marginRight:18}} isSecondary title={"SHARE"} />
                            <AppButton onClick={onBuy} title={"BUY"} />
                        </div>
                    </>}
                <div onClick={onClose} className="land-details-close-button">
                    <img src={xCloseIcon}  className='land-details-close-button-icon' />
                </div>
            </div>
            </div>
           
        )
      }
    return <div />
});

LandDetails.displayName = 'LandDetails';
export default LandDetails;
