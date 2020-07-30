import React,{ useState }from 'react'
import SearchBox from './SearchBox'
import LocationBox from './LocationBox'
import WeatherBox from './WeatherBox'

const api = {
    key: "44e58be5753bc1e714c0d371b5ad00fb",
    url: "https://api.openweathermap.org/data/2.5/"
}

const App = () => {

    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    const search = event => {
        if(event.key === "Enter") {
            fetch(`${api.url}weather?q=${query}&units=metric&appid=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setQuery('')
                setWeather(result)
            })
        }
    }

    return (
        <div className="app">
            <main>
                <SearchBox search={search} value={query} setQuery={setQuery} />
                {(typeof weather.main != "undefined") ?
                    (<div>
                        <LocationBox city={weather.name} country={weather.sys.country}/>
                        <WeatherBox temp={weather.main.temp} weatherSky={weather.weather[0].main}/>
                    </div>)
                    : ('')
                }
            </main>
        </div>
    )
}

export default App