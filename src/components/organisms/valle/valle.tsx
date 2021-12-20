import React, { useState } from 'react';
import './valle.scss';

import ValleImg from '../../../assets/images/titulo-valle-de-aburra.png';
import ValleMap from '../../molecules/valle-map/valleMap';
import SliderRegions from '../../molecules/slider-regions/sliderRegions';

import KevinImageModal from '../../../assets/images/kevin-modal.png';

import ImageNumberOne from '../../../assets/images/Angel-Vanegas-4.jpg';
import ImageNumberTwo from '../../../assets/images/ASDASDA.png';
import ImageNumberThree from '../../../assets/images/IMG_20200123_160127.jpg';

import ModalRegions from '../../molecules/modal-regions/modalRegions';


const Valle = () => {
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
        },
        {
            id: 2,
            image: KevinImageModal,
            description: `adipisci rerum nulla reiciendis illum fuga reprehenderit delectus quisquam, eos nihil. Sequi maxime odio sapiente ullam mollitia.`,
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
        <div className='valle'>
            <div className='valle__info'>
                <div className='valle__container'>
                    <img
                    className='valle__image'
                    src={ValleImg} 
                    alt="valle"
                    />
                </div>

                <p className='valle__description'>
                El Valle de Aburrá es el centro de la diversidad, allí confluyen todas las culturas de Antioquia, aquellas que han llegado 
                para sentirse abrazados y protegidos por las montañas cálidas y esperanzadoras.  Cuna que reúne la música, la palabra, los gestos, 
                la tenacidad, la gastronomía de la Antioquia tan multicultural. 
                </p>

                <div className='valle__carousel'>
                    <SliderRegions
                    imageSources={imagesSources}
                    />
                </div>
            </div>

            <div className='valle__map'>
                <ValleMap
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

export default Valle;
