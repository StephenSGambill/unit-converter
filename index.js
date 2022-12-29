const number = document.getElementById("number")
const buttonClick = document.getElementById("convert-btn")
const lengthConversion = 3.28084
const volumeConversion = 0.264172
const massConversion = 2.20462

buttonClick.addEventListener("click", function(){
    length()
    volume()
    mass()
    
})

function length(){
    let meterTofeet = (number.value * lengthConversion)
    meterTofeet = meterTofeet.toFixed(3)
    let feetTometer = number.value / lengthConversion
    feetTometer = feetTometer.toFixed(3)
    
    document.getElementById("length-result").innerText = `${number.value} meters = ${meterTofeet} feet | ${number.value} feet = ${feetTometer} meters`
    }

function volume (){
    let literTogallon = number.value * volumeConversion
    literTogallon = literTogallon.toFixed(3)    
    let gallonToliter = number.value / volumeConversion
    gallonToliter = gallonToliter.toFixed(3)
    
    document.getElementById("volume-result").innerText = `${number.value} liters = ${literTogallon} gallons | ${number.value} gallons = ${gallonToliter} liters`
}
 
 function mass(){   
    let kiloTolb = number.value * massConversion
    kiloTolb = kiloTolb.toFixed(3)
    let lbTokilo = number.value / massConversion
    lbTokilo = lbTokilo.toFixed(3)
    
    document.getElementById("mass-result").innerText = `${number.value} kilos = ${kiloTolb} pounds | ${number.value} pounds = ${lbTokilo} kilos`
 }