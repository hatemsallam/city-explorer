import React from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './components/Map';
import Weather from './components/Weather';



class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      lat: '',
      lon: '',
      showMap: false,
      errorMsg: 'bad response',
      displayErr: false,
      showCard: false,
      weather : ''
    }
  }
  getLocationandWeatherData = async (event) => {
    event.preventDefault();
    let cityName = event.target.city.value;
    console.log(cityName);
    let Url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${cityName}&format=json`;
    let URL = '';



    if(cityName === 'amman' || cityName === 'AMMAN')
    {
      URL = `${process.env.REACT_APP_SERVER_URL}/weather?lat=31.95&lon=35.91&searchQuery=Amman`;
    }
    else if(cityName === 'paris' || cityName === 'PARIS')
    {
      URL = `${process.env.REACT_APP_SERVER_URL}/weather?lat=48.86&lon=2.35&searchQuery=Paris`;
    }
    else if(cityName === 'seattle' || cityName === 'SEATTLE')
    {
      URL = `${process.env.REACT_APP_SERVER_URL}/weather?lat=47.60621&lon=-122.33207&searchQuery=Seattle`;
    }





    try {
      let locResult = await axios.get(Url)


      

      let weatherData =  axios.get(URL);

      this.setState(
        {
          displayName: locResult.data[0].display_name,
          lon: locResult.data[0].lon,
          lat: locResult.data[0].lat,
          showMap: true,
          showCard: true,
          weather : weatherData.data

        }
      )

    }


    catch {
      this.setState({
        showMap: false,
        displayErr: true,
        showCard: false
      })
    }

  

   




  }


  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <form onSubmit={this.getLocationandWeatherData}>
          <input type='text' placeholder='Enter City' name='city' />
          <button type='submit'>Explore!</button>
        </form>


        <Map displayName={this.state.displayName} showMap={this.state.showMap} lat={this.state.lat} lon={this.state.lon} displayErr={this.state.displayErr} errorMsg={this.state.errorMsg} showCard={this.state.showCard} ></Map>

         <Weather weather={this.state.weather}  ></Weather>







      </>
    )
  }
}


export default App;
