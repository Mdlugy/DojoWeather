var CityA = ''
var CityB = ''
var CityTemp =''
function changeCity(e){
CityA = document.getElementById(e).innerHTML
CityB = document.getElementById("cityName").innerHTML
document.getElementById(e).innerHTML = CityB
document.getElementById("cityName").innerHTML =CityA
alert("loading weather report...")

}
function Acceptcookie(e){
    document.getElementById(e).parentNode.remove()
}
var currentTemp=""


document.getElementById("todayHigh").innerHTML = "23.9°"
document.getElementById("todayLow").innerHTML = "18.3°"

document.getElementById("tomorrowHigh").innerHTML= "26.7°"
document.getElementById("tomorrowLow").innerHTML= "16.1°"

document.getElementById("friHigh").innerHTML= "20.6°"
document.getElementById("friLow").innerHTML= "16.1°"

document.getElementById("satHigh").innerHTML= "25.6°"
document.getElementById("satLow").innerHTML= "21.1°"

function changeTemp(e){
    currentTemp = document.getElementById (e).innerHTML
    document.getElementById("currentTempType" ).innerHTML = currentTemp
    
    if(currentTemp =="°C"){
        console.log(currentTemp)
        console.log(document.getElementById("todayLow").innerHTML)
    document.getElementById("todayHigh").innerHTML = "23.9°"
    document.getElementById("todayLow").innerHTML = "18.3°"

    document.getElementById("tomorrowHigh").innerHTML= "26.7°"
    document.getElementById("tomorrowLow").innerHTML= "16.1°"

    document.getElementById("friHigh").innerHTML= "20.6°"
    document.getElementById("friLow").innerHTML= "16.1°"

    document.getElementById("satHigh").innerHTML= "25.6°"
    document.getElementById("satLow").innerHTML= "21.1°"

    }
    else if(currentTemp == "°F"){
        console.log(currentTemp)
        document.getElementById("todayHigh").innerHTML = "75°"
        document.getElementById("todayLow").innerHTML = "65°"
        
    
        document.getElementById("tomorrowHigh").innerHTML= "80°"
        document.getElementById("tomorrowLow").innerHTML= "61°"
    
        document.getElementById("friHigh").innerHTML= "69°"
        document.getElementById("friLow").innerHTML= "61°"
    
        document.getElementById("satHigh").innerHTML= "78°"
        document.getElementById("satLow").innerHTML= "70°"
    }
    else{
        console.log(currentTemp)
        document.getElementById("todayHigh").innerHTML = "296.9°"
        document.getElementById("todayLow").innerHTML = "291.3°"
    
        document.getElementById("tomorrowHigh").innerHTML= "299.7°"
        document.getElementById("tomorrowLow").innerHTML= "289.1°"
    
        document.getElementById("friHigh").innerHTML= "293.6°"
        document.getElementById("friLow").innerHTML= "289.1°"
    
        document.getElementById("satHigh").innerHTML= "298.6°"
        document.getElementById("satLow").innerHTML= "294.1°"
    }
    // document.getElementById(e ).innerHTML



    // document.getElementById("todayHigh").innerHTML =
    // document.getElementById("todayLow").innerHtm= 

    // document.getElementById("tomorrowHigh").innerHTML=
    // document.getElementById("tomorrowLow").innerHTML=

    // document.getElementById("friHigh").innerHTML= 
    // document.getElementById("friLow").innerHTML=

    // document.getElementById("satHigh").innerHTML=
    // document.getElementById("satLow").innerHTML=

}