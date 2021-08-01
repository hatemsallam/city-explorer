import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Map extends React.Component {


    render() {
        return (
            <>



                {this.props.showCard &&
                    <div my-15 class="card" style={{ width: '22rem', color: 'green', border: ' 2px solid black', marginTop: '30px' }}>
                        <div class="card-header">
                            <h3>{this.props.displayName}</h3>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><h5 style = {{color: 'red' , textAlign : 'center'}}> Longitude: {this.props.lon}</h5></li>
                            <li class="list-group-item"><h5  style = {{color: 'red' , textAlign : 'center'}}> Latitude: {this.props.lat}</h5></li>
                        </ul>
                    </div>
                }


                {
                    this.props.showMap &&
                    <div class="card" style={{ width: "30rem", marginTop: '30px' }}>
                        <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.5fb79615c462bb7a6bbd8e4280a79d7a&center=${this.props.lat},${this.props.lon}`} class="card-img-top" alt="map" />
                        <div class="card-body">
                            <p class="card-text">
                                This is {this.props.displayName} map
                            </p>
                        </div>
                    </div>
                }



                {
                    this.props.displayErr &&
                    this.props.errorMsg
                }

            </>
        )
    }
}

export default Map;