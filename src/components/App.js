import React,{ useState }from 'react'
import SearchBox from './SearchBox'
import LocationBox from './LocationBox'

const App = () => {
    return (
        <div className="app">
            <main>
                <SearchBox />
                <LocationBox />
            </main>
        </div>
    )
}

export default App