'use client'
import React from 'react'

const PowerGuage = () => {
  return (
    <div className="parentContainer">
      <img src = {require('../public/PowerGuage.png')}></img>
      <div className="GuageReadout" id="PowerGuage">0</div>
      <div id="PowerConsumptionNeedleGuage" className="NeedleGuageContainer">
        <img className="NeedleGuage" src = {require('../public/NeedleGuage.png')}></img>
      </div>
    </div>

)
}

export default PowerGuage;