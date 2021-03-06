import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = "5a31f6a280fb3a8f981b81c017bb66ae";

//initialise a componet
class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) =>{
    //prevents page from fully refreshing
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const data =  await api_call.json();

    if (city && country){
      console.log(data);

      this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
      });
    }else{
        this.setState({
        temperature: undefined,
        city: undefined,
        country:undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
    });
    }
  }

  render(){
    return (
        <div>
          <Titles />
          <Form
            getWeather={this.getWeather}
          />
          <Weather
            temperature = {this.state.temperature}
            city = {this.state.city}
            country = {this.state.country}
            humidity = {this.state.humidity}
            description = {this.state.description}
            error={this.state.error}
          />
        </div>
    );
  }
}

//make component available for other files to import
export default App;