import React from 'react'
import { AppConstans } from '../../../constants/AppConstants';

export default function MapGrid(props) {

        const drawgridX = ()=>{
            let lins = [];
            for (let index = 0; index < AppConstans.mapHeight/(AppConstans.boxSize+1) -1; index++) {
                lins.push(<div style={{marginTop:AppConstans.boxSize, height:1,backgroundColor:"rgba(0,0,0,0.3)",width:AppConstans.mapWidth}} />)
            }
            return lins;
        }
        const drawgridY = ()=>{
            let lins = [];
            for (let index = 0; index < AppConstans.mapWidth/(AppConstans.boxSize + 1) -1; index++) {
                lins.push(<div style={{marginLeft:AppConstans.boxSize, height:AppConstans.mapHeight,backgroundColor:"rgba(0,0,0,0.3)",width:1}} />)
            }
            return lins;
        }

    return (
        <>
        <div 
        style={{
            position:"absolute",
            top:0,
            left:0,
        }}
        >
           {drawgridX()}
        </div>
        <div 
        style={{
            position:"absolute",
            display:'flex',
            top:0,
            left:0,
        }}
        
        >
           {drawgridY()}

        </div>
        </>
    )
}
