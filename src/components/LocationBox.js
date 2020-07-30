import React from 'react'

const LocationBox = (props) => {

    const getDate = () => {

        let date = String(new window.Date())
        let dayName = date.slice(0,3)
        let month = date.slice(4,7)
        let day = date.slice(8,10)
        let year = new Date().getFullYear()

        return `${dayName}, ${month} ${day} ${year}`
    }
    return (
        <div className="location-box">
            <div className="location">{props.city}, {props.country}</div>
            <div className="date">{getDate()}</div>
        </div>
    )
}

export default LocationBox