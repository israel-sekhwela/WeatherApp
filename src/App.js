import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = "5a31f6a280fb3a8f981b81c017bb66ae";

//initialise a componet
class App extends React.Component {
  getWeather = async () =>{
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Pretoria,Gauenteng&APPID=${API_KEY}`);
  }
  render(){
    return (
        <div>
          <Titles />
          <Form />
          <Weather />
        </div>
    );
  }
}

//make componet available for other files to import
export default App;