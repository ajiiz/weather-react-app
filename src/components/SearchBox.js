import React from 'react'

const SearchBox = () => {
    return (
        <div className="search-box">
            <input
                type="text"
                className="search-bar"
                placeholder="search by city name..."
            />
        </div>
    )
}

export default SearchBox