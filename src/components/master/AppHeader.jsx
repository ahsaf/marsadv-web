import React from 'react'
import './styles.css';
import marsLogo from '../../assets/images/marsglob.png';
import {colours} from '../../styles/colours';
import { useLocation, useNavigate } from 'react-router-dom';
import { GetPath } from '../../utils/helper';
// import TabText from './tabTextAnimation/tabText';
export default function AppHeader(props) {
        const location = useLocation();
        const navigate = useNavigate();
    const tabs = [
        {
            id:1,
            name:"MAP",
            path:"/map"
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
    const handleTabClick = (item)=>{
        navigate(item.path);
    }

    return (
        <div className='header-container'>
            <div onClick={()=> navigate("/")} className='header-logo-container'>
                <img  src={marsLogo} className='header-icon' />
                <p className='header-mars-text'>MARS.<p className='header-mars-subtext'>advs</p></p>
            </div>
            <div className='header-tab-container'>
                {tabs.map((item,index) =>{
                    return <div 
                        onClick={() => handleTabClick(item)}
                    style={{
                        borderRight:index == 4?"none": "#FFF 1px solid",
                        backgroundColor:GetPath(location) === item.path?"white":null
                    }}
                    className={`header-tab-single-container `}>
                        <p className='heade-tab-text'
                        style={{
                            color:GetPath(location) === item.path?"black": item.id == 5?colours.primary:'none'
                        }}
                        >{item.name}</p>
                        </div>
                })}
                {/* <TabText /> */}
            </div>
        </div>
    )
}
