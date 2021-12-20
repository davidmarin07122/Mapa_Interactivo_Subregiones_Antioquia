import React from "react";
import './mainDescription.scss';

import MainImage from '../../../assets/images/banner-1.png'

const MainDescription = () => {
    return (
        <div className='m-main-description'>
            <h2 className='m-main-description__title'>Biblioteca Móvil</h2>

            <p className='m-main-description__paragraph'>
            Razones sobran para enamorarse de Antioquia. Las personas, las culturas, las historias, los tesoros que se encuentran en cada territorio desde lo natural, 
            lo gastronómico, lo artístico, en fin, son un patrimonio vivo, dinámico que da muestra de las muchas otredades que se encuentran en sus paisajes, en sus territorios.
            </p>

            <div className='m-main-description__container'>
                <img
                className='m-main-description__image'
                src={MainImage}
                alt="biblioteca virtual"
                />
            </div>
        </div>
    )
};

export default MainDescription;
