import React from 'react';
import './bajoCauca.scss';

import BajoCaucaImg from '../../../assets/images/bajo-cauca.png';
import BajoCaucaMap from '../../molecules/bajo-cauca-map/bajoCaucaMap';
import SliderRegions from '../../molecules/slider-regions/sliderRegions';

import KevinImageModal from '../../../assets/images/kevin-modal.png';

import ImageNumberOne from '../../../assets/images/bajo_cauca/Caceres-Frontis-800x445.jpg';
import ImageNumberTwo from '../../../assets/images/ASDASDA.png';
import ImageNumberThree from '../../../assets/images/IMG_20200123_160127.jpg';

import ModalRegions from '../../molecules/modal-regions/modalRegions';

const BajoCauca = () => {
    const modalInfo = [
        {
            id: 0,
            image: KevinImageModal,
            description: `En el taller de Sombras de Identidad participó un joven profesor de artes de la Casa de la Cultura
             de Tarazá quien propone desde el arte una reflexión sobre la corrupción y violencia`,
            videoUrl: 'https://www.youtube.com/embed/znFdI7vro0g',
        },
        {
            id: 1,
            image: KevinImageModal,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis possimus beatae amet incidunt nulla consectetur
            voluptatum recusandae mollitia! Placeat dolore et `,
            videoUrl: 'https://www.youtube.com/embed/20lq5yeH150',
        }
    ];

    const imagesSources = [
        {
            src: ImageNumberOne,
            alt: "Image's alt"
        },
        {
            src: ImageNumberTwo,
            alt: "Image's alt"
        },
        {
            src: ImageNumberThree,
            alt: "Image's alt"
        }
    ];
    
    return(
        <div className='bajo-cauca'>
            <div className='bajo-cauca__info'>
                <div className='bajo-cauca__container'>
                    <img
                    className='bajo-cauca__image'
                    src={BajoCaucaImg} 
                    alt="bajo-cauca"
                    />
                </div>

                <p className='bajo-cauca__description'>
                Tierras de cultura costeña, rica en oro y pesca. Esta subregión se ubica en las últimas estribaciones de la cordillera Central, 
                entre las serranías de Ayapel y San Lucas, sobre la cuenca de los ríos Cauca y Nechí.La minería puede considerarse el renglón más 
                importante de la economía.
                </p>

                <div className='bajo-cauca__carousel'>
                    <SliderRegions
                    imageSources={imagesSources}
                    />
                </div>
            </div>

            <div className='bajo-cauca__map'>
                <BajoCaucaMap />
            </div>
        </div>
    );
};

export default BajoCauca;
