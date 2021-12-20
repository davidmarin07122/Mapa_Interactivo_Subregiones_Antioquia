import React, { useState } from 'react';
import './magdalena.scss';

import MagdalenaImg from '../../../assets/images/magdalena-titulo.png';
import MagdalenaMap from '../../molecules/magdalena-map/magdalenaMap';
import SliderRegions from '../../molecules/slider-regions/sliderRegions';

import KevinImageModal from '../../../assets/images/kevin-modal.png';

import ImageNumberOne from '../../../assets/images/Golondrinas.jpeg';
import ImageNumberTwo from '../../../assets/images/ASDASDA.png';
import ImageNumberThree from '../../../assets/images/IMG_20200123_160127.jpg';

import ModalRegions from '../../molecules/modal-regions/modalRegions';

const Magdalena = () => {
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

    const [ currentInfoModal, setCurrentInfoModal ] = useState<any>(modalInfo[0]);
    const [ showModal, setShowModal ] = useState<Boolean>(false);

    const changeModalInfo = (pageModal: number) => {
        setCurrentInfoModal(modalInfo[pageModal]);
        setShowModal(true);
    }

    const closeModal = (event: any) => {
        event.stopPropagation();
        setShowModal(false)
    };

    return(
        <div className='magdalena'>
            <div className='magdalena__info'>
                <div className='magdalena__container'>
                    <img
                    className='magdalena__image'
                    src={MagdalenaImg} 
                    alt="magdalena"
                    />
                </div>

                <p className='magdalena__description'>
                Tierras de cultura costeña, rica en oro y pesca. Esta subregión se ubica en las últimas estribaciones de la cordillera Central, 
                entre las serranías de Ayapel y San Lucas, sobre la cuenca de los ríos Cauca y Nechí.La minería puede considerarse el renglón más 
                importante de la economía.
                </p>

                <div className='magdalena__carousel'>
                    <SliderRegions
                        imageSources={imagesSources}
                    />
                </div>
            </div>

            <div className='magdalena__map'>
                <MagdalenaMap
                changeModalInfo={changeModalInfo}
                />
            </div>

            {
                showModal && (
                <ModalRegions
                currentInformation={currentInfoModal}
                closeModal={closeModal}
                />
                )
            }
        </div>
    );
};

export default Magdalena;
