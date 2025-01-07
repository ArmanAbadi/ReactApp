'use client'
import React from 'react'

const MotorSpeedSettings = () => {
  return (
    <div className='parentContainer'>
        <img src = {require('../public/MotorSpeedSetting.png')}></img>
        <div className="slidecontainer">
            <input type="range" min="0" max="4" className="slider" id="myRange"></input>
        </div>
    </div>
)
}

export default MotorSpeedSettings;