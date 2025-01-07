'use client'
import React from 'react'

const MotorRPM = () => {
  return (
    <div className='parentContainer'>
        <img src = {require('../public/MotorRPM.png')}></img>
        <div id="MotorRPMTextSmall" className='MotorRPMText'>0</div>
    </div>
)
}

export default MotorRPM;