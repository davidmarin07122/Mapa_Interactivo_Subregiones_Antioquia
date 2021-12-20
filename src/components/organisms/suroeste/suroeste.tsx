import React, { useState } from 'react';
import './suroeste.scss';

import SuroesteImg from '../../../assets/images/titulo.suroeste.png';
import SuroesteMap from '../../molecules/suroeste-map/suroesteMap';
import SliderRegions from '../../molecules/slider-regions/sliderRegions';

import KevinImageModal from '../../../assets/images/kevin-modal.png';

import ImageNumberOne from '../../../assets/images/Angel-Vanegas-4.jpg';
import ImageNumberTwo from '../../../assets/images/ASDASDA.png';
import ImageNumberThree from '../../../assets/images/IMG_20200123_160127.jpg';

import ModalRegions from '../../molecules/modal-regions/modalRegions';

const Suroeste = () => {
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
        <div className='suroeste'>
            <div className='suroeste__info'>
                <div className='suroeste__container'>
                    <img
                    className='suroeste__image'
                    src={SuroesteImg} 
                    alt="suroeste"
                    />
                </div>

                <p className='suroeste__description'>
                El suroeste huele a café recién molido y a tertulia. Considerada una de las subregiones con mayor memoria histórica y viva de las 
                comunidades indígenas de Antioquia donde se encuentran inclusive petroglifos.Ese contraste entre balcones, casas campesinas, paisajes 
                amplios y misteriosos, albergan los paisajes escondidos de Antioquia. 
                </p>

                <div className='suroeste__carousel'>
                    <SliderRegions
                    imageSources={imagesSources}
                    />
                </div>
            </div>

            <div className='suroeste__map'>
                <SuroesteMap
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

export default Suroeste;
