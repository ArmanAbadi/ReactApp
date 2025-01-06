'use client'
import React from 'react'

const BatteryTemperature = () => {
  return (
    <div className='parentContainer'>
        <img src = {require('../public/BatteryTemperature.png')}></img>
        <div id="BatteryTemperatureText" className='BatteryTemperatureText'><div></div></div>
    </div>
)
}

export default BatteryTemperature;