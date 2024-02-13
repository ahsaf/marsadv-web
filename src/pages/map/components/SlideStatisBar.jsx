import React from 'react'
import './styles.css';
export default function SlideStatisBar({scaleProps}) {
    

    return (
        <div className='map-slide-bar-container'>
            <div style={{
                width:scaleProps.width,
                marginLeft:scaleProps.left
            }} className='map-slide-bar' />
        </div>
    )
}
