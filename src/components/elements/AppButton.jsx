import React from 'react'
import { colours } from '../../styles/colours'
import './styles.css';
export default function AppButton({title,style,isSecondary,onClick}) {

    return (
        <div onClick={onClick} style={
            {
                backgroundColor:isSecondary?"rgba(255,255,255,0.2)":"#FFF",
                ...style,
        }} className='app-button-container'>
            <p className='app-button-text'
                style={{
                   color:isSecondary?"white":colours.primary
                }}
            >{title}</p>
        </div>
    )
}
