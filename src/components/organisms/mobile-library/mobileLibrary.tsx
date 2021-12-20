import React, { useState } from 'react';
import './mobileLibrary.scss';

import MainMap from '../../molecules/main-map/mainMap';
import MainDescription from '../../molecules/main-description/mainDescription';
import Nordeste from '../nordeste/nordeste';
import Norte from '../norte/norte';
import BajoCauca from '../bajo-cauca/bajoCauca';
import Magdalena from '../magdalena/magdalena';
import Oriente from '../oriente/oriente';
import Valle from '../valle/valle';
import Suroeste from '../suroeste/suroeste';
import Occidente from '../occidente/occidente';
import Uraba from '../uraba/uraba';

const MobileLibrary = () => {
    const [ currentRegion, setCurrentRegion ] = useState<string>('');

    const chooseRegionHandler = (event: any) => {
        let { id } = event.target;
        id = id.split('-')[0];

        setCurrentRegion(id);
    }
    return(
        <div className='o-mobile-library'>
            <div className='o-mobile-library__map'>
                <MainMap
                clickHandler={chooseRegionHandler}
                />
            </div>

            <div className='o-mobile-library__description'>
                {
                    currentRegion.length === 0 && (<MainDescription />)
                }
                {
                    currentRegion === 'nordeste' && (<Nordeste />)
                }
                {
                    currentRegion === 'norte' && (<Norte />)
                }
                {
                    currentRegion === 'bajo' && (<BajoCauca />)
                }
                {
                    currentRegion === 'magdalena' && (<Magdalena />)
                }
                {
                    currentRegion === 'oriente' && (<Oriente />)
                }
                {
                    currentRegion === 'valle' && (<Valle />)
                }
                {
                    currentRegion === 'suroeste' && (<Suroeste />)
                }
                {
                    currentRegion === 'occidente' && (<Occidente />)
                }
                {
                    currentRegion === 'uraba' && (<Uraba />)
                }
            </div>
        </div>
    )
};

export default MobileLibrary;
