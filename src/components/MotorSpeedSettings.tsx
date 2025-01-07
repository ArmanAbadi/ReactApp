'use client'
import React from 'react'
import Commands from '../components/Commands'

const MotorSpeedSettings = () => {
  return (
    <div className='parentContainer'>
        <img src = {require('../public/MotorSpeedSetting.png')}></img>
        <div className="slidecontainer">
            <input type="range" min="0" max="4" className="slider" id="myRange" onClick={() => Commands.SliderUpdate()}></input>
        </div>
    </div>
)
}

export default MotorSpeedSettings;