import React from 'react'
import './styles.css';
import marsLogo from '../../assets/images/marslogo.png';
import {colours} from '../../styles/colours';
export default function AppHeader(props) {
    
    const tabs = [
        {
            id:1,
            name:"MAP"
        },
        {
            id:2,
            name:"MARKET"
        },
        {
            id:3,
            name:"ABOUT US"
        },
        {
            id:4,
            name:"FAQ"
        },
        {
            id:5,
            name:"LOGIN"
        },
    ]
    return (
        <div className='header-container'>
            <div className='header-logo-container'>
                <img  src={marsLogo} className='header-icon' />
                <p className='header-mars-text'>MARS.<p className='header-mars-subtext'>advs</p></p>
            </div>
            <div className='header-tab-container'>
                {tabs.map((item,index) =>{
                    return <div 
                    
                    style={{
                        borderRight:index == 4?"none": "#FFF 1px solid"
                    }}
                    className='header-tab-single-container'>
                        <p className='heade-tab-text'
                        style={{
                            color:item.id == 5?colours.primary:'none'
                        }}
                        
                        >{item.name}</p>
                        </div>
                })}
            </div>
        </div>
    )
}
