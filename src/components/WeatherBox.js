import React from 'react'

const WeatherBox = (props) => {
    return (
        <div className="weather-box">
            <div className="temp">
                {Math.round(props.temp)}°C
            </div>
            <div className="weather">
                {props.weatherSky}
            </div>
        </div>
    )
}

export default WeatherBox