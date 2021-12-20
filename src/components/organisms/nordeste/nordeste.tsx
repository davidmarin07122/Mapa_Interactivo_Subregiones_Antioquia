import React from 'react';
import './nordeste.scss';

import NordesteImg from '../../../assets/images/nordeste-Titulo.png';
import NordesteMap from '../../molecules/nordeste-map/nordesteMap';
import SliderRegions from '../../molecules/slider-regions/sliderRegions';

import KevinImageModal from '../../../assets/images/kevin-modal.png';

import ImageNumberOne from '../../../assets/images/Angel-Vanegas-4.jpg';
import ImageNumberTwo from '../../../assets/images/ASDASDA.png';
import ImageNumberThree from '../../../assets/images/IMG_20200123_160127.jpg';

import ModalRegions from '../../molecules/modal-regions/modalRegions';

const Nordeste = () => {
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
        <div className='nordeste'>
            <div className='nordeste__info'>
                <div className='nordeste__container'>
                    <img
                    className='nordeste__image'
                    src={NordesteImg} 
                    alt="nordeste"
                    />
                </div>

                <p className='nordeste__description'>
                    El Nordeste antioqueño tan diverso como sus actividades productivas que van desde la minería aurífera 
                    hasta la producción de leche y cárnicos. Esta subregión de contrastes paisajísticos inigualables donde el olor 
                    dulce de la caña se combina con el café y el olor de los bosques se une a este mapa de diversidad.
                </p>

                <div className='nordeste__carousel'>
                    <SliderRegions
                    imageSources={imagesSources}
                    />
                </div>
            </div>

            <div className='nordeste__map'>
                <NordesteMap />
            </div>
        </div>
    );
};

export default Nordeste;
