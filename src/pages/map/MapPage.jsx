import React, { useEffect, useRef, useState } from 'react'
import "./styles.css";
import marsbackground from '../../assets/images/marsbackground.png';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { MapInteractionCSS } from 'react-map-interaction';
import MapGrid from './components/MapGrid';
import AppLayout from '../../layouts/AppLayout';
import SlideStatisBar from './components/SlideStatisBar';
import data from './data.json';
import { AppConstans } from '../../constants/AppConstants';
import { getCoordsFromPosition, getMapZoomNearValue, getPositionFromCoords, getSlideStatusBarProps } from '../../utils/helper';
import PriceTagCard from '../home/components/PriceTagCard';
import LandDetails from './components/LandDetails';
import LandImg from '../../assets/tempImages/land1.png';
// import {PaymentElement} from '@stripe/react-stripe-js';

export default function MapPage(props) {
    const landDetailsRef = useRef();
    useEffect(()=>{
        // console.log("Width:",window.innerWidth)
        // console.log("Height:",window.innerHeight)
    },[]);
    const [zoomValue,setZoomValue] = useState({scale:1,translation:{x:0,y:0}});
    const [zoomCacheValue,setZoomCacheValue] = useState({scale:1,translation:{x:0,y:0}});

    const handleMapPositionChange = (value)=>{
            setZoomValue(getMapZoomNearValue(value));
    }
    const [activeLand,setActiveLand] = useState({});
    const [buyedLand,setBuyLand] = useState({});
    const onMouseDown = () =>{
        setZoomCacheValue(zoomValue);
    }
    const onMouseUp = (e)=>{
        if(zoomCacheValue.scale === zoomValue.scale && zoomValue.translation.x === zoomCacheValue.translation.x && zoomValue.translation.y === zoomCacheValue.translation.y){
            console.log(e.nativeEvent.offsetX)
            const coords = getCoordsFromPosition(e.nativeEvent.offsetX,e.nativeEvent.offsetY);
            const boxPosition = getPositionFromCoords(coords);
            setActiveLand(boxPosition);
            landDetailsRef.current.updateCusDetails();
        }
    }

    const onBuyLnad = ()=>{
        const coords = getCoordsFromPosition(activeLand.x,activeLand.y);
        setBuyLand(coords);
        setActiveLand({});
    }

    return (
        <AppLayout>
        <div className='map-main-container'>
        <MapInteractionCSS
        value={zoomValue}
        minScale={1}
        maxScale={10}
        // translationBounds= {{
        //     xMin: -400, xMax: 0, yMin: -500, yMax: 0
        // }}
        onChange={handleMapPositionChange}
      >
         <div className='map-container'>
                 <img src={marsbackground} alt="test" className='mapBg'  />
                         <MapGrid />
                         {data.lands.map(item =>{
                            return <img 
                            key={item.id}
                            src={require(`../../assets/tempImages/${item.image}`)}
                            className='map-land-image'
                            style={{
                                left:item.positionX * (AppConstans.boxSize + 1),
                                top:item.positionY * (AppConstans.boxSize + 1),
                                width:item.size * (AppConstans.boxSize + 1) - 1,
                                height:item.size * (AppConstans.boxSize + 1) -1,
                            }}
                            />
                        })}
                        {buyedLand && (buyedLand.x || String(buyedLand.x) == "0")?
                        <img 
                        src={LandImg}
                        className='map-land-image'
                        style={{
                            left:buyedLand.x * (AppConstans.boxSize + 1),
                            top:buyedLand.y * (AppConstans.boxSize + 1),
                            width:1 * (AppConstans.boxSize + 1) - 1,
                            height:1* (AppConstans.boxSize + 1) -1,
                        }}
                        />
                        
                        :null}

                        <div
                            style={{
                                width:AppConstans.boxSize,
                                height:AppConstans.boxSize,
                                top:activeLand.y,
                                left:activeLand.x
                            }}
                            className='map-active-layer'
                        />
                        <div 
                        style={{
                            width:AppConstans.mapWidth,
                            height:AppConstans.mapHeight,
                            position:"absolute",
                            top:0,
                            left:0,
                            zIndex:5
                        }}
                        onMouseDown={onMouseDown} onMouseUp={onMouseUp}
                        /> 
           </div>
             </MapInteractionCSS>
                <PriceTagCard isMap />
                <SlideStatisBar scaleProps={getSlideStatusBarProps(zoomValue)} />
                {/* <div 
                style={{
                    position:"fixed",
                    top:200,
                    left:100
                }}
                >
                    <p>Zoom: {zoomValue.scale}</p>
                    <p>X: {zoomValue.translation.x}</p>
                    <p>Y: {zoomValue.translation.y}</p>

                </div> */}
                <LandDetails ref={landDetailsRef} onBuyLnad={onBuyLnad} />
                <div style={{
                    position:"absolute",
                    top:0,
                    left:0,
                    
                }}>
                <form>
      {/* <PaymentElement /> */}
      {/* <button>Submit</button> */}
    </form>
                </div>

        </div>
        </AppLayout>
    )
}