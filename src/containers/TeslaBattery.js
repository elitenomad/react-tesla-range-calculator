import React from 'react';
import './TeslaBattery.css';

import TeslaNotice from '../components/TeslaNotice/TeslaNotice';

class TeslaBattery extends React.Component {
    render(){
        return(
            <form className="tesla-battery">
                <h1>Range per charge</h1>
                <TeslaNotice/>
            </form>
        )
    }
}

export default TeslaBattery;