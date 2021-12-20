import React, { useState } from 'react';
import './oriente.scss';

import Maricela from '../../../assets/images/oriente/maricela.png';

import OrienteImg from '../../../assets/images/titulo-oriente.png';
import OrienteMap from '../../molecules/oriente-map/orienteMap';
import SliderRegions from '../../molecules/slider-regions/sliderRegions';

import ImageNumberOne from '../../../assets/images/Angel-Vanegas-4.jpg';
import ImageNumberTwo from '../../../assets/images/ASDASDA.png';
import ImageNumberThree from '../../../assets/images/IMG_20200123_160127.jpg';

import ModalRegions from '../../molecules/modal-regions/modalRegions';

const Oriente = () => {

    const modalInfo = [
        {
            id: 0,
            image: Maricela,
            description: `Lo presencial: tesoro de la actualidad. Mirar a otros 
            ojos sin intermediarios digitales o electrónicos, solo con la luz del sol. `,
            videoUrl: 'https://www.youtube.com/embed/znFdI7vro0g',
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
        <div className='oriente'>
            <div className='oriente__info'>
                <div className='oriente__container'>
                    <img
                    className='oriente__image'
                    src={OrienteImg} 
                    alt="magdalena"
                    />
                </div>

                <p className='oriente__description'>
                El Oriente antioqueño es una región rica en aguas, en trapiches, en cultivo de flores, papa, mora, en arquitecturas 
                que se debaten entre lo moderno y lo colonial su paisaje montañoso permite apreciar en las laderas la diversidad de la
                 tierra. Una subregión con todos los climas, hasta un páramo que permite apreciar la relación ecosistémica del hombre y la naturaleza. 
                </p>

                <div className='oriente__carousel'>
                    <SliderRegions
                    imageSources={imagesSources}
                    />
                </div>
            </div>

            <div className='oriente__map'>
                <OrienteMap openModalPage={changeModalInfo} />
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

export default Oriente;
