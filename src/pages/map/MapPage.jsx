import React, { useState } from 'react'
import "./styles.css";
import marsbackground from '../../assets/images/marsbackground.png';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { MapInteractionCSS } from 'react-map-interaction';
import MapGrid from './components/MapGrid';
export default function MapPage(props) {
    return (
        <div className='map-main-container'>
            <TransformWrapper 
                defaultScale={1}
                defaultPositionX={200}
                defaultPositionY={100}
                disablePadding
                >
                <TransformComponent>
                    <img src={marsbackground} alt="test" className='mapBg'  />
                    <MapGrid />
                </TransformComponent>
                </TransformWrapper>
        </div>
    )
}
