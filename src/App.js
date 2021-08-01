import React from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

constructor(props){
  super(props)
  this.state = {
    displayName: '' ,
    lat: '' ,
    lon: '' ,
  }
}
  getLocationData = async(event) => {
    event.preventDefault();
    let cityName = event.target.city.value;
    console.log(cityName);
    let Url = `https://eu1.locationiq.com/v1/search.php?key=pk.5fb79615c462bb7a6bbd8e4280a79d7a&q=${cityName}&format=json`;

    // try {
    let locResult = await axios.get(Url)

    this.setState(
      {
        displayName : locResult.data[0].display_name,
        lon: locResult.data[0].lon,
        lat: locResult.data[0].lat,
      }
    )
  }

   

  render() {
    return (
      <>
       <h1>City Explorer</h1>
        <form onSubmit={this.getLocationData}>
        <input type='text' placeholder='Enter City' name='city' />
        <button type='submit'>Explore!</button>
      </form>

      <div class="card" style= {{width: '22rem' , color: 'green' , border :' 2px solid black'}}>
  <div class="card-header">
    <h3>{this.state.displayName}</h3>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><h5>{this.state.lon}</h5></li>
    <li class="list-group-item"><h5>{this.state.lat}</h5></li>
  </ul>
</div>
      </>
    )
  }
}


export default App;
