'use client'
import React, { useEffect } from 'react'
import { collection, doc, getDocs, onSnapshot, updateDoc } from "firebase/firestore";
import { getFunctions, httpsCallable } from 'firebase/functions';
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC2wctSVEFXGSwEy1N5866udMXUQqTHKYc',
  authDomain: 'eaec-79c34.firebaseapp.com',
  projectId: 'eaec-79c34',
  storageBucket: 'eaec-79c34.firebasestorage.app',
  messagingSenderId: '230435794102',
  appId: '1:230435794102:web:65c1197186babd8e63ca17',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const functions = getFunctions(app);

var Charging = false;

// -< Firestore >-
async function GetData(){
  const postsRef = collection(db, 'vehicles')
  const snapshot = await getDocs(postsRef)
  const vehicles = snapshot.docs;

  SetData(vehicles[0].data());

  return (
    <>
    </>
  )
}

//Updates the UI based on vehicle data
function SetData(vehicle: any){

  SetParkingIndicator(vehicle.ParkingBrakeIndicator);
  SetCheckEngineIndicator(vehicle.CheckEngineIndicator);
  SetMotorStatusIndicator(vehicle.MotorStatusIndicator);
  SetBatteryLowIndicator(vehicle.BatteryLowIndicator);

  SetMotorNeedleGuage(vehicle.MotorRPM);
  SetPowerConsumption(vehicle.PowerConsumption);

  
  SetBatteryPercentageText(vehicle.BatteryPercentage);
  SetBatteryTemperatureText(vehicle.BatteryTemperature);
  SetMotorRPMText(vehicle.MotorRPM);
  SetPowerGuageText(vehicle.PowerConsumption);

  SetMotorSpeedSettingSlider(vehicle.MotorSpeedSetting);

  Charging = vehicle.Charging;

  SetChargingIndicator(Charging);
}

function SetParkingIndicator(state: boolean){
  const ParkingIndicator = document.getElementById("ParkingIndicator") as HTMLImageElement;
  if(state){
    ParkingIndicator.src = require('../public/ParkingIndicatorRed.png');
  }
  else{
    ParkingIndicator.src = require('../public/ParkingIndicator.png');
  }
}
function SetCheckEngineIndicator(state: boolean){
  const ParkingIndicator = document.getElementById("CheckEngineIndicator") as HTMLImageElement;
  if(state){
    ParkingIndicator.src = require('../public/CheckEngineIndicatorRed.png');
  }
  else{
    ParkingIndicator.src = require('../public/CheckEngineIndicator.png');
  }
}
function SetMotorStatusIndicator(state: boolean){
  const ParkingIndicator = document.getElementById("MotorStatusIndicator") as HTMLImageElement;
  if(state){
    ParkingIndicator.src = require('../public/MotorStatusIndicatorRed.png');
  }
  else{
    ParkingIndicator.src = require('../public/MotorStatusIndicator.png');
  }
}
function SetBatteryLowIndicator(state: boolean){
  const ParkingIndicator = document.getElementById("BatteryLowIndicator") as HTMLImageElement;
  if(state){
    ParkingIndicator.src = require('../public/BatteryLowIndicatorRed.png');
  }
  else{
    ParkingIndicator.src = require('../public/BatteryLowIndicator.png');
  }
}
function SetMotorNeedleGuage(RPM: number){
  const MotorRPMNeedleGuage = document.getElementById("MotorRPMNeedleGuage") as HTMLImageElement;
  const Rotation = (RPM-400)*140/400;
  
  MotorRPMNeedleGuage.style.transform 
  = 'rotate('+Rotation+'deg)'; 
}
function SetPowerConsumption(Power: number){
  const PowerConsumptionGuage = document.getElementById("PowerConsumptionNeedleGuage") as HTMLImageElement;
  const Rotation = (Power)*140/1000;
  
  PowerConsumptionGuage.style.transform 
  = 'rotate('+Rotation+'deg)'; 
}
function SetBatteryPercentageText(BatteryPercent: number){
  const BatteryPercentText = document.getElementById("BatteryPercentageText") as HTMLImageElement;
  BatteryPercentText.textContent = BatteryPercent.toString();
}
function SetBatteryTemperatureText(BatteryTemperature: number){
  const BatteryTemperatureText = document.getElementById("BatteryTemperatureText") as HTMLImageElement;
  BatteryTemperatureText.textContent = BatteryTemperature.toString();
}
function SetMotorRPMText(MotorRPM: number){
  const MotorRPMText = document.getElementById("MotorRPMText") as HTMLImageElement;
  MotorRPMText.textContent = MotorRPM.toString();

  const MotorRPMTextSmall = document.getElementById("MotorRPMTextSmall") as HTMLImageElement;
  MotorRPMTextSmall.textContent = MotorRPM.toString();
}
function SetPowerGuageText(Power: number){
  const PowerGuageText = document.getElementById("PowerGuageText") as HTMLImageElement;
  PowerGuageText.textContent = Power.toString();
}
function SetMotorSpeedSettingSlider(MotorSpeedSetting: number){
  (document.getElementById("myRange") as HTMLInputElement).value = MotorSpeedSetting.toString();
}
function SetChargingIndicator(state: boolean){
  const ParkingIndicator = document.getElementById("ChargingButton") as HTMLImageElement;
  if(state){
    ParkingIndicator.src = require('../public/ChargingButtonGreen.png');
  }
  else{
    ParkingIndicator.src = require('../public/ChargingButton.png');
  }
}

//Sets the motor speed through a firebase cloud function api
const SetMotorSpeed = httpsCallable(functions, 'SetMotorSpeed');
function setMotorSpeed(MotorSpeed: number){ 
  console.log(MotorSpeed);
    SetMotorSpeed({
      MotorSpeedSetting: MotorSpeed
  })
    .then((result: any) => {
      SetData(result.data);
    });
  }

//Sets the motor speed through a firebase cloud function api
const SetCharging = httpsCallable(functions, 'SetCharging');
function setCharging(){ 
    SetCharging({
      Charging: !Charging
  })
    .then((result: any) => {
      SetData(result.data);
    });
  }

function SliderUpdate(){
  var slider = (document.getElementById("myRange") as HTMLInputElement).value;
  
  setMotorSpeed(Number.parseInt(slider));
}

//Listen to changes to vehicle data
onSnapshot(
  doc(db, "vehicles", "vehicle1"), 
  (doc) => {
    SetData(doc.data());
  });


//Commands to export
const Commands ={
  GetData,
  SliderUpdate,
  setCharging
}

export default Commands;
