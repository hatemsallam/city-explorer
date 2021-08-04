import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weatherday from './Weatherday';

class Weather extends React.Component {


    render() {
        return (
            <>

{
                   this.props.showCard && 
                    this.props.weather.map(element => {
                        return (  <Weatherday weatherDetails= {element}></Weatherday>
                        )
                    })
                }

            </>

        )

    }

}






export default Weather;