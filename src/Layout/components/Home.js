import React from 'react';

// style
import './styles/Home.scss';

// components
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';

export default function Home() {
    return <div id='home'>
        <img className='home-bg' src='./images/home-background.png' alt='Home Background'/>
        <ImageSlider/>
        <Viewers/>
    </div>
}
