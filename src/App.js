import React from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './components/Map';
import Weather from './components/Weather';
import Movies from './components/Movies';



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
      weather: [],
      movies: []
    }
  }
  getLocationandWeatherData = async (event) => {
    event.preventDefault();
    let cityName = event.target.city.value;
    console.log(cityName);
    let Url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${cityName}&format=json`;
    let URLlocalHost = `${process.env.REACT_APP_SERVER}/getWeather?lat=${this.state.lat}&lon=${this.state.lon}&cityname=${cityName}`
    let URLmovies = `${process.env.REACT_APP_SERVER}/movies?cityname=${cityName}`



    try {
      let locResult = await axios.get(Url)


      this.setState(
        {
          displayName: locResult.data[0].display_name,
          lon: locResult.data[0].lon,
          lat: locResult.data[0].lat,
          showMap: true,
          showCard: true,

        }
      )


      let weatherResult = await axios.get(URLlocalHost)


      this.setState(
        {
          weather: weatherResult.data

        }
      )
      let moviesResult = await axios.get(URLmovies)


      this.setState(
        {
          movies: moviesResult.data

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

        <Weather showCard= {this.state.showCard} weather={this.state.weather}  ></Weather>

        <Movies showCard= {this.state.showCard} movies={this.state.movies}  ></Movies>







      </>
    )
  }
}


export default App;
