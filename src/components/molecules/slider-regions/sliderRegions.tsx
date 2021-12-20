import React, { useState, useEffect } from 'react';
import './sliderRegions.scss';

interface SliderRegionsInterface {
    imageSources: any;
}

const SliderRegions = (props: SliderRegionsInterface) => {
    let { imageSources } = props;

    const [ currentImage, setCurrentImage] = useState(null);
    const [ imagesArray, setImagesArray ] = useState<any>([]);
    const [ currentIndex, setCurrentIndex ] = useState<any>(0);

    const getImages = () => {
        imageSources.forEach((imageSource: any) => {
            let imageElem = <img 
            src={imageSource.src}
            alt={imageSource.alt}
            className='slider-regions__image'
            />

            setImagesArray((oldState: any) => {
                let newState = [ ...oldState ];

                newState.push(imageElem);
                return newState;
            })
        })
    }

    const goNextModal = () => {
        const imagesArrayLength = imagesArray.length - 1;
    
        if (currentIndex === imagesArrayLength) {
            setCurrentImage(imagesArray[0]);
            setCurrentIndex(0);
        } else {
            setCurrentImage(imagesArray[currentIndex + 1]);
            setCurrentIndex(currentIndex + 1);
        }
    }

    const goBackModal = () => {
        const imagesArrayLength = imagesArray.length - 1;

        if (currentIndex === 0) {
            setCurrentImage(imagesArray[imagesArrayLength]);
            setCurrentIndex(imagesArrayLength);
        } else {
            setCurrentImage(imagesArray[currentIndex - 1]);
            setCurrentIndex(currentIndex - 1);
        }
    }

    useEffect(() => {
        getImages();
        setCurrentImage(imagesArray[0]);
    }, [])

    console.log("Images Array: ", imagesArray)

    return(
        <div className='slider-regions'>
            <div className='slider-regions__back'>
                <svg
                onClick={() => goBackModal()}
                xmlns="http://www.w3.org/2000/svg"
                className='slider-regions__back-btn --btn'
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth={"2"} d="M15 19l-7-7 7-7" />
                </svg>
            </div>

            <div className='slider-regions__images'>
                {
                    currentImage || imagesArray[0]
                }
            </div>

            <div className='slider-regions__next'>
                <svg
                onClick={() => goNextModal()}
                xmlns="http://www.w3.org/2000/svg"
                className='slider-regions__next-btn --btn'
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth={"2"} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    );
};

export default SliderRegions;
