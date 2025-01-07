'use client'
import React, { useEffect } from 'react'
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
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

async function Commands1(){
  const vehicle = doc(db, "vehicles", "vehicle1");
  await updateDoc(vehicle, {
    BatteryLowIndicator: false
  });
}

async function Commands2(){
  const vehicle = doc(db, "vehicles", "vehicle1");
  await updateDoc(vehicle, {
    CheckEngineIndicator: false
  });
}

// -< Firestore >-
async function GetData(){
  const postsRef = collection(db, 'vehicles')
  const snapshot = await getDocs(postsRef)
  const vehicles = snapshot.docs;

  SetParkingIndicator(vehicles[0].data().ParkingBrakeIndicator);
  SetCheckEngineIndicator(vehicles[0].data().CheckEngineIndicator);
  SetMotorStatusIndicator(vehicles[0].data().MotorStatusIndicator);
  SetBatteryLowIndicator(vehicles[0].data().BatteryLowIndicator);

  SetMotorNeedleGuage(vehicles[0].data().MotorRPM);
  SetPowerConsumption(vehicles[0].data().PowerConsumption);

  
  SetBatteryPercentageText(vehicles[0].data().BatteryPercentage);
  SetBatteryTemperatureText(vehicles[0].data().BatteryTemperature);
  SetMotorRPMText(vehicles[0].data().MotorRPM);
  return (
    <>
    </>
  )
}

function SetParkingIndicator(state: boolean){
  const ParkingIndicator = document.getElementById("ParkingIndicator") as HTMLImageElement;
  if(state){
    ParkingIndicator.src = require('../public/BatteryTemperature.png');
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
}

const addMessage = httpsCallable(functions, 'addMessage');
function AddMessage(){ 
    addMessage({
    uploadType: "Albums",
    albumName: "TheBestAlbumEver",
    fileName: "Bravado.wav",
    SongTitle: "wop wop",
    description: "dark and edgy"
  })
    .then((result) => {
      console.log("bro");
      console.log(result);
    });
  }

const Commands ={
  Commands1,
  Commands2,
  GetData,
  AddMessage
}

export default Commands;
