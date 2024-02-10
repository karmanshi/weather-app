import React from 'react'
import { useState } from 'react'
import Weather from './weather'
const axios = require('axios')

const Search = () => {

    const [data, setData] = useState({})
    const [location, setLocation] = useState("Delhi")
    const API_Key = process.env.REACT_APP_API_Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_Key}`
    const searchLocation = (event) => {
        if (event.key === "Enter") {
            axios.get(url)
                .then((response) => {
                    setData(response.data)
                    console.log(response.data)
                })
        }
    }
    return (
        <div>
            <div>
                <div className='w-full h-full relative'>
                    <div className='text-center p-4'>
                        <input type='text' className='py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600
            placeholder: text-gray-400 focus:outline-none bg-white-600/100 shadow-md' placeholder='Enter location'
                            value={location} onChange={(event) => setLocation(event.target.value)} onKeyDownCapture={searchLocation}></input>
                    </div>
                </div>
            </div>
            <Weather weatherData={data} />
        </div>
    )
}

export default Search
