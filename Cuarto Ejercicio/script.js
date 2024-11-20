fetch('https://api.open-meteo.com/v1/forecast?latitude=43.3128&longitude=-1.975&current=temperature_2m,is_day,weather_code')
.then(Response => Response.json())
    .then(data =>{
        document.getElementById("temp").innerHTML = data.current.temperature_2m;
                console.log(data.current.temperature_2m)
    });