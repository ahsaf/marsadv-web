import React from 'react'

export default function MapGrid(props) {
    
        const drawgrid = ()=>{
            let lins = [];
            for (let index = 0; index < 30; index++) {
                lins.push(<div style={{marginTop:30, height:1,backgroundColor:"#000",width:"100%"}} />)
            }
            return lins;
        }
        const drawgridY = ()=>{
            let lins = [];
            for (let index = 0; index < 60; index++) {
                lins.push(<div style={{marginLeft:30, height:"100%",backgroundColor:"#000",width:1}} />)
            }
            return lins;
        }

    return (
        <>
        <div 
        style={{
            position:"absolute",
            top:0,
            bottom:0,
            left:0,
            right:0
        }}
        
        >
           {drawgrid()}

        </div>
        <div 
        style={{
            position:"absolute",
            top:0,
            bottom:0,
            left:0,
            right:0,
            display:'flex'
        }}
        
        >
           {drawgridY()}

        </div>
        </>
    )
}
