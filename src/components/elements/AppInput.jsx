import React from 'react';
import './styles.css';

export default function AppInput({label,flex1,style,placeholder,isNumber,inputProps,error}) {
    

    return (
        <div styles={{
           flex:flex1?1:null,
           ...style
        }} className='app-input-container'>
            <p className='app-input-label'>{label}</p>
            <input  type={isNumber?"number":"text"} placeholder={placeholder} className='app-input' 
                style={{borderColor:error?"red":null}}
            {...inputProps} />
          {error?  <p className='input-error-text' style={{color:"red"}}>{error?typeof error.message === "string"?error.message:'':""}</p>:null}
        </div>
    )
}
