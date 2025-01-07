import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Commands from './components/Commands'
import PowerGuage from './components/PowerGuage';
import MotorRPMGuage from './components/MotorRPMGuage';
import BatteryPercentage from './components/BatteryPercentage';
import BatteryTemperature from './components/BatteryTemperature';
import MotorRPM from './components/MotorRPM';
import MotorSpeedSettings from './components/MotorSpeedSettings';

function App() {

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    Commands.GetData()
  });

  return (
    <>
          <div className="TopIconsGroup TopIcons">
            <img id="ParkingIndicator" src = {require('./public/ParkingIndicator.png')}></img>
            <img id="CheckEngineIndicator" src = {require('./public/CheckEngineIndicator.png')}></img>
            <img id="MotorStatusIndicator" src = {require('./public/MotorStatusIndicator.png')}></img>
            <img id="BatteryLowIndicator" src = {require('./public/BatteryLowIndicator.png')}></img>
          </div>

          <div className="GuagesGroup Guages">
            <PowerGuage></PowerGuage>
            <MotorRPMGuage></MotorRPMGuage>
          </div>

          <div className="BotIconsGroup BotIcons">
            <img  src = {require('./public/GearRatio.png')}></img>
            <BatteryPercentage></BatteryPercentage>
            <BatteryTemperature></BatteryTemperature>
            <MotorRPM></MotorRPM>
            <MotorSpeedSettings></MotorSpeedSettings>
          </div>

          <div className="TopIconsGroup TopIcons">
            <img src = {require('./public/GearRatio.png')}></img>
            <img src = {require('./public/MotorRPM.png')}></img>
            <img src = {require('./public/BatteryTemperature.png')}></img>
          </div>

          <button onClick={() =>Commands.AddMessage()
}>Take the Shot!</button>
          <button>asd</button>
    </>
  )
}

export default App;
