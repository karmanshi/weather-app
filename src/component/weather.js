import React, { useState } from 'react'

const Weather = (weatherData) => {
    console.log(weatherData)
     
  return (
    <>
    <div>{weatherData.weather?(
        <div className='w-[500px] h-[250px] bg-gray-300 shadow-lg rounded-xl m-auto relative px-6 top-[10%]'>
            <div className='flex justify-between w-full'>
                <div className='w-1/2 my-4 mx-auto flex justify-between item-center'>
                    <div className='flex flex-col  items-start justify-between h-full'>
                        <div>
                            <p className='text-xl'>
                                {weatherData.name},
                                {weatherData.sys.country}
                            </p>
                            <p className='text-sm'>
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    ):null}</div>

    </>
  )
}

export default Weather