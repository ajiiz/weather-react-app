import React,{ useState }from 'react'
import SearchBox from './SearchBox'
import LocationBox from './LocationBox'
import WeatherBox from './WeatherBox'

const App = () => {
    return (
        <div className="app">
            <main>
                <SearchBox />
                <LocationBox />
                <WeatherBox />
            </main>
        </div>
    )
}

export default App