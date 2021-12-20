import React, { useState } from 'react';
import './occidente.scss';

import OccidenteImg from '../../../assets/images/occidente-titulo.png';
import OccidenteMap from '../../molecules/occidente-map/bajo-cauca-map/occidenteMap';
import SliderRegions from '../../molecules/slider-regions/sliderRegions';

import KevinImageModal from '../../../assets/images/kevin-modal.png';

import ImageNumberOne from '../../../assets/images/Angel-Vanegas-4.jpg';
import ImageNumberTwo from '../../../assets/images/ASDASDA.png';
import ImageNumberThree from '../../../assets/images/IMG_20200123_160127.jpg';

import ModalRegions from '../../molecules/modal-regions/modalRegions';

const Occidente = () => {
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
        <div className='occidente'>
            <div className='occidente__info'>
                <div className='occidente__container'>
                    <img
                    className='occidente__image'
                    src={OccidenteImg} 
                    alt="occidente"
                    />
                </div>

                <p className='occidente__description'>
                El Occidente alberga varias generaciones históricas del departamento.  Allí se encuentran los Emberá Katíos con sus tradiciones 
                e identidad y también la infraestructura colonial que nos recuerdan el mestizaje.  Tierra cálida que abraza con sus olores dulzones 
                de la fruta y el café, además es un corredor en biodiversidad muy significativo para el departamento.
                </p>

                <div className='occidente__carousel'>
                    <SliderRegions
                    imageSources={imagesSources}
                    />
                </div>
            </div>

            <div className='occidente__map'>
                <OccidenteMap
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

export default Occidente;
