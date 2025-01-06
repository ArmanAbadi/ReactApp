'use client'
import React from 'react'

const MotorRPMGuage = () => {
  return (
    <div className="parentContainer">
      <img src = {require('../public/MotorRPMGuage.png')}></img>
      <div id="MotorRPMNeedleGuage" className="NeedleGuageContainer">
        <img className="NeedleGuage" src = {require('../public/NeedleGuage.png')}></img>
      </div>
      <div className="GuageReadout" id="MotorRPMText">0</div>
    </div>
)
}

export default MotorRPMGuage;