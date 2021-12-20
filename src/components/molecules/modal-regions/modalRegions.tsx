import React from 'react';
import ReactDOM from 'react-dom';

import './modalRegions.scss';

import ComfamaLogo from '../../../assets/images/COMFAMA-LOGO.png';

interface ModalRegionsInterface {
    currentInformation: any;
    closeModal: any;
}

const portalDom = document.querySelector("#modal")!;

const ModalRegions = (props: ModalRegionsInterface) => {
    let { currentInformation, closeModal } = props;

    const ModalComponent = <div className='modal-background' onClick={closeModal}>
        <div className='modal' onClick={(event) => event.stopPropagation() }>
            <div className='modal__container'>
                <img 
                src={currentInformation ? currentInformation.image : ''} 
                alt=""
                className='modal__name'
                />

                <p className='modal__description'>
                {
                    currentInformation ? currentInformation.description : ''
                }
                </p>
            </div>


            <div className='modal__media'>
                <iframe className='modal__video' 
                width="100%"
                height="400px" 
                src={currentInformation.videoUrl} 
                title="YouTube video player" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
                </iframe>
            </div>
 

            <div className='modal__arrows'>
                <svg
                onClick={() => {}}
                xmlns="http://www.w3.org/2000/svg"
                className='modal__arrows--back'
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth={"2"} d="M15 19l-7-7 7-7" />
                </svg>

                <svg
                onClick={() => {}}
                xmlns="http://www.w3.org/2000/svg"
                className='modal__arrows--next'
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth={"2"} d="M9 5l7 7-7 7" />
                </svg>
            </div>

            <img src={ComfamaLogo} alt="" className='modal__comfama'/>
        </div>
    </div>;

    return(ReactDOM.createPortal(ModalComponent, portalDom));
};

export default ModalRegions;
