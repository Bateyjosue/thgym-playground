let timerID  =0;
function repeatEvery(func, time){
    timerID = setInterval(func, time)
}

console.log(repeatEvery(()=> {
    if(timerID > 5000){
        clearInterval(timerID)
    }
    console.log('Josh')
},1000))

let baseURL =`https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2`
async function fetchVehicles(url) {
    try {
        let response = await fetch(url)
        let data = await response.json()
         console.log(data.Results.filter(vehicle => vehicle.Country == 'UNITED STATES ()'))
    }
    catch(error) {
        console.log(error);
    }
}

