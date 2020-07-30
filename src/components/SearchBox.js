import React from 'react'

const SearchBox = (props) => {

    return (
        <div className="search-box">
            <input
                type="text"
                className="search-bar"
                placeholder="search by city name..."
                onChange={e => props.setQuery(e.target.value)}
                value={props.value}
                onKeyPress={props.search}
            />
        </div>
    )
}

export default SearchBox