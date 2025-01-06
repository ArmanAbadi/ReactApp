'use client'
import React from 'react'

const BatteryPercentage = () => {
  return (
    <div className='parentContainer'>
        <img src = {require('../public/BatteryPercentage.png')}></img>
        <div id="BatteryPercentageText" className='BatteryPercentageText'><div></div></div>
    </div>
)
}

export default BatteryPercentage;