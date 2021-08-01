import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Map extends React.Component {


    render() {
        return (
            <>



{ this.props.showCard &&
      <div  class="card" style= {{width: '22rem' , color: 'green' , border :' 2px solid black'}}>
  <div class="card-header">
    <h3>{this.props.displayName}</h3>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><h5>{this.props.lon}</h5></li>
    <li class="list-group-item"><h5>{this.props.lat}</h5></li>
  </ul>
</div>
}


{ 
        this.props.showMap &&
<div class="card" style={{ width: "30rem" }}>
          <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.5fb79615c462bb7a6bbd8e4280a79d7a&center=${this.props.lat},${this.props.lon}`} class="card-img-top" alt="map" />
          <div class="card-body">
            <p class="card-text">
              {this.props.lon} , {this.props.lat}
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