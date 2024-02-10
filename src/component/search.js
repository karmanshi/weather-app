import React from 'react'
import Weather from './weather'
const search = () => {
    const [data,setData]= useState({})
    const [location,setLocation]= useState("")
    const API_Key=""
    const url =" "
    const searchLocation=(event)=>{
        if(event.key === "Enter"){
        axios.get(url)
        .then((response)=>{
            setData (response.data)
            console.log(response.data)
        })
        setLocation("")
    }
     }
  return (
    <div>
      <div>
        <div className='w-full h-full relative'>
        <div className='text-center p-4'>
            <input type='text' className='py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600
            placeholder: text-gray-400 focus:outline-none bg-white-600/100 shadow-md' placeholder='Enter location'
            value={location} onChange={(event)=>setLocation(event.target.value)} onKeyDownCapture={searchLocation}></input>
        </div>
      </div>
    </div>
    <Weather weatherData = {data}/>
    </div>
  )
}

export default search
