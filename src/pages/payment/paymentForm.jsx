import React, { useState } from 'react';
import AppInput from '../../components/elements/AppInput';
import './styles.css';
import AppButton from '../../components/elements/AppButton';
import LandCard from '../map/components/LandCard';
import {  toast } from 'react-toastify';
import { useForm, Controller } from "react-hook-form";
import { formValidationRules } from '../../utils/helper';

const PaymentForm = React.forwardRef(({onCancel,onClose},ref) => {
    React.useImperativeHandle(ref, () => ({
        updateCusDetails(coords) {
      }}));
      const onSubmit = (data)=>{
        toast("Payment Successfull",{type:"success"});
        onClose();
      }
      const { register, handleSubmit, watch, formState: { errors },reset,control,setError } = useForm();
  
      
        return (
           <div onClick={(e)=>{e.stopPropagation();}} 
                className={`payment-form-container`} >
                    <div style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        marginBottom:24
                    }}>
                     <LandCard />
                    </div>
            
                    <AppInput 
                     inputProps={{...register("card_no",formValidationRules("Card  Number").String100Req)}}
                     error={errors.card_no}
                    isNumber placeholder={"1234 1234 1234 1234"} flex1 label={"Card Number"} />
                    <div className='flex' style={{marginTop:16}}>
                    <AppInput 
                     inputProps={{...register("expire",formValidationRules("Expiration date").String20Req)}}
                     error={errors.expire}
                    placeholder={"MM/YY"} style={{marginRight:10}} flex1 label={"Expiration"} />
                    <div style={{width:12}} />
                    <AppInput 
                     inputProps={{...register("cvc",formValidationRules("CVC").String20Req)}}
                     error={errors.cvc}
                    flex1 label={"CVC"} placeholder={"CVC"} />
                    </div>
                    <div className='flex' style={{
                        width:"100%"
                    }}>
                    {/* <AppButton
                    onClick={onCancel}
                    style={{
                        marginTop:24,
                        height:48,
                        flex:1
                    }} title={"CANCEL"} isSecondary /> 
                    <div style={{width:12}} /> */}
                    <AppButton 
                        style={{
                            marginTop:24,
                            height:48,
                            flex:1
                        }} 
                        title={"PAY"}
                        onClick={handleSubmit(onSubmit)}
                     />
                    </div>
            </div>
        )
});

PaymentForm.displayName = 'PaymentForm';
export default PaymentForm;
