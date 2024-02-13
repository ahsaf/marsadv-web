import React from 'react'
import "./styles.css"
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default function TopOwnersList(props) {
    const ownersList = [
        {
            id:"01",
            name:"JACK",
            count:171,
            country:"cn"
        },
        {
            id:"02",
            name:"AHSAF MALIK",
            count:145,
            country:"in"
        },
        {
            id:"03",
            name:"WISSAL",
            count:123,
            country:"tn"
        },
        {
            id:"04",
            name:"ELONE MASK",
            count:100,
            country:"us"
        },
        {
            id:"05",
            name:"ALI ZAKI",
            count:99,
            country:"pk"
        },
    ]

    return (
        <div className='home-top-owners-list-container'>
            <p className='home-top-owner-title-text'>TOP OWNERS</p>
            <div className='home-top-owner-list-container'>
                {ownersList.map(item =>{
                    return (
                        <div className='home-top-owner-single-container' key={item.id}>
                            <p className='home-top-owner-id-text'>{item.id}</p>
                           <span style={{
                            borderRadius:100,
                            marginLeft:12
                           }} class={`fi fi-${item.country} fis`}></span>
                            <p className='home-top-owner-name-text'>{item.name}</p>
                            <p className='home-top-owner-count-text'>{item.count}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
