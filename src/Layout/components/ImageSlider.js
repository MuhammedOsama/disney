import React from 'react';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import Slider from 'react-slick';

// style
import './styles/ImageSlider.scss';

export default function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return <div id='image-slider'>
        <Slider className='slider' {...settings}>
            <div className='wrap'>
                <a>
                    <img src="./images/slider-badging.jpg" alt="Slider Badging"/>
                </a>
            </div>
            <div className='wrap'>
                <a>
                    <img src="./images/slider-scale.jpg" alt="Slider Badging"/>
                </a>
            </div>
            <div className='wrap'>
                <a>
                    <img src="./images/slider-badag.jpg" alt="Slider Badging"/>
                </a>
            </div>
            <div className='wrap'>
                <a>
                    <img src="./images/slider-scales.jpg" alt="Slider Badging"/>
                </a>
            </div>
        </Slider>
    </div>
}
