import React, { useState } from 'react';
import './uraba.scss';

import UrabaImg from '../../../assets/images/titulo-uraba.png';
import UrabaMap from '../../molecules/uraba-map/urabaMap';
import SliderRegions from '../../molecules/slider-regions/sliderRegions';

import KevinImageModal from '../../../assets/images/kevin-modal.png';

import ImageNumberOne from '../../../assets/images/Angel-Vanegas-4.jpg';
import ImageNumberTwo from '../../../assets/images/ASDASDA.png';
import ImageNumberThree from '../../../assets/images/IMG_20200123_160127.jpg';

import ModalRegions from '../../molecules/modal-regions/modalRegions';

const Uraba = () => {
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
        <div className='uraba'>
            <div className='uraba__info'>
                <div className='uraba__container'>
                    <img
                    className='uraba__image'
                    src={UrabaImg} 
                    alt="uraba"
                    />
                </div>

                <p className='uraba__description'>
                Tierra de paisajes amplios como la sonrisa y generosidad de las personas que habitan esta subregión, tierra de banano, piña y palma cultivada 
                en la bondad de su clima.  Esta subregión ofrece la cercanía al Mar Caribe y suena a bullerengue, a alegría y a una tierra pujante que han ensañado 
                la valentía y que el sueño de vivir es más fuerte que el dolor.
                </p>

                <div className='uraba__carousel'>
                    <SliderRegions
                    imageSources={imagesSources}
                    />
                </div>
            </div>

            <div className='uraba__map'>
                <UrabaMap
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

export default Uraba;
