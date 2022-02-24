import React from 'react';

// style
import './styles/Viewers.scss';

export default function Viewers() {
    return <div id='viewers'>
        <div className="wrap">
            <img src="./images/viewers-disney.png" alt="Viewers Disney"/>
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src="./videos/disney.mp4" type="video/mp4"/>
            </video>
        </div>
        <div className="wrap">
            <img src="./images/viewers-pixar.png" alt="Viewers Pixar"/>
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src="./videos/pixar.mp4" type="video/mp4"/>
            </video>
        </div>
        <div className="wrap">
            <img src="./images/viewers-marvel.png" alt="Viewers Marvel"/>
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src="./videos/marvel.mp4" type="video/mp4"/>
            </video>
        </div>
        <div className="wrap">
            <img src="./images/viewers-starwars.png" alt="Viewers Starwars"/>
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src="./videos/star-wars.mp4" type="video/mp4"/>
            </video>
        </div>
        <div className="wrap">
            <img src="./images/viewers-national.png" alt="Viewers National"/>
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src="./videos/national-geographic.mp4" type="video/mp4"/>
            </video>
        </div>
    </div>
}
