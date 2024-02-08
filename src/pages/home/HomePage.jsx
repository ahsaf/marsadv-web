import React from 'react'
import './styles.css';
import TopOwnersList from './components/TopOwnersList';
import PriceTag from './components/PriceTag';
import marsImage from '../../assets/images/marsmain.png'
export default function HomePage(props) {
    

    return (
        <div className='home-main-container'>
           <div className="home-title-container">
            <img src={marsImage} className='mars-main-image-home' />
                <p className='home-main-title-text'>MARS</p>
                <p className='home-main-subtext-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='home-explore-button'>
                    <p className='home-explore-button-text'>EXPLORE</p>
                </div>
           </div>
           <TopOwnersList />
           <PriceTag />
        </div>
    )
}
