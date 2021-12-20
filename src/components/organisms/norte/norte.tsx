import React, { useState } from 'react';
import './norte.scss';

import NorteImg from '../../../assets/images/norte-titulo.png';
import NorteMap from '../../molecules/norte-map/norteMap';
import SliderRegions from '../../molecules/slider-regions/sliderRegions';

import KevinImageModal from '../../../assets/images/kevin-modal.png';

import ImageNumberOne from '../../../assets/images/Angel-Vanegas-4.jpg';
import ImageNumberTwo from '../../../assets/images/ASDASDA.png';
import ImageNumberThree from '../../../assets/images/IMG_20200123_160127.jpg';

import ModalRegions from '../../molecules/modal-regions/modalRegions';

const Norte = () => {
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
        <div className='norte'>
            <div className='norte__info'>
                <div className='norte__container'>
                    <img
                    className='norte__image'
                    src={NorteImg} 
                    alt="norte"
                    />
                </div>

                <p className='norte__description'>
                El Norte ruta lechera de Antioquia, también esconde entre sus montañas, la pujanza y la valentía de sus habitantes. 
                Zona de comunión con la naturaleza donde es muy marcado el tema de ecoturismo donde la diversidad en fauna y flora hacen de esta 
                subregión un ecosistema significativo para el departamento.
                </p>

                <div className='norte__carousel'>
                    <SliderRegions
                    imageSources={imagesSources}
                    />
                </div>
            </div>

            <div className='norte__map'>
                <NorteMap
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

export default Norte;
