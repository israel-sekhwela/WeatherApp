import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <div>
                City: {this.props.city} <br/>
                Country: {this.props.country}<br/>
                Temperature: {this.props.temperature}<br/>
                Humidity: {this.props.humidity}<br/>
                Description: {this.props.description}<br/>
                
            </div>
        );
    }
}

export default Weather;