import React from 'react';

const TemperatureAndDetails = () => {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Cloudy</p>
        </div>
        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fmooreforstaterep.info%2Fclear-weather-symbol&psig=AOvVaw2vb7LJcSkLMPtnkaGJtrLO&ust=1698481983123000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLD__cvolYIDFQAAAAAdAAAAABAJ'
            alt='' className='w-20' />
        </div>
    </div>
  )
}

export default TemperatureAndDetails;