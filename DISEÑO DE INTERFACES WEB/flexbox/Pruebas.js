fetch('https://api.open-meteo.com/v1/forecast?latitude=43.3223241&longitude=-1.975910415&current=temperature_2m,weather_code&hourly=temperature_2m,weather_code&timezone=Europe%2FBerlin')
    .then(response=>response.json()) //Cuando se conecte lo anterior y da una respuesta ok el servidor, que haga lo siguiente
    .then(data =>{ //nombre del archivo descargado
        let code=data.current.weather_code//weather_code de hora actual
        let imagen
        let horaAct
        //Variables para calcular las prómas horas
        let hora1
        let hora2
        let hora3
        const ahora = new Date() //obtener hora actual
        horaAct=ahora.getHours()
        hora1= horaAct + 2
        hora2 = horaAct + 5
        hora3= horaAct + 8
        //Variables para las próximas horas
        let proxHora1 = "Hora: " + data.hourly.time[hora1]
        document.getElementById("hora1").innerHTML= proxHora1
        let proxHora2 = "Hora: " + data.hourly.time[hora2]
        document.getElementById("hora2").innerHTML= proxHora2
        let proxHora3 = "Hora: " + data.hourly.time[hora3]
        document.getElementById("hora3").innerHTML= proxHora3
        let proxTemp1="Temperatura: " + Math.floor(data.hourly.temperature_2m[hora1]) + "ºC"
        document.getElementById("temp1").innerHTML= proxTemp1
        let proxTemp2="Temperatura: " + Math.floor(data.hourly.temperature_2m[hora2]) + "ºC"
        document.getElementById("temp2").innerHTML= proxTemp2
        let proxTemp3=" Temperatura: " + Math.floor(data.hourly.temperature_2m[hora3]) + "ºC"
        document.getElementById("temp3").innerHTML= proxTemp3
        //códigos de las proximas horas
        let weathercode1= data.hourly.weather_code[hora1]
        let weathercode2= data.hourly.weather_code[hora2]
        let weathercode3= data.hourly.weather_code[hora3]
        //variables max, min
        let max=Math.floor(data.hourly.temperature_2m[0])
        let min=Math.floor(data.hourly.temperature_2m[0])
        let weathercodeMax=0
        let weatherCodeMin
        for(i=0;i<24;i++){ //bucle para obtener la temperatura mayor y la menor
            if(Math.floor(data.hourly.temperature_2m[i])>max){
                max=Math.floor(data.hourly.temperature_2m[i])
                weathercodeMax=data.hourly.weather_code[i]
            }
            if(Math.floor(data.hourly.temperature_2m[i])<min){
                min=Math.floor(data.hourly.temperature_2m[i])
                weatherCodeMin=data.hourly.weather_code[i]
            }
        }
        document.getElementById("tempMax").innerHTML= max
        document.getElementById("tempMin").innerHTML= min
let Arrayweathercode= [weathercode1, weathercode2, weathercode3, weathercodeMax, weatherCodeMin] //Lista para meter todos los weatherCodes

        if(code==0){
        imagen = "<img src= 'sol.png'>"
        }
        if(code==1 || code==2 || code==3){
        imagen = "<img src= 'sol-nube.png'>"
        }

        if(code==45 || code==48){
            imagen = "<img src= 'nublado.png'>"
        }
       
        if(code==51 || code==53 || code==55){
            imagen = "<img src= 'brisa.png'>"
        }

        if(code==56 || code==57){
            imagen = "<img src= 'brisa.png'>"
        }

        if(code==61 || code==63 || code==65){
            imagen = "<img src= 'lluvia.png'>"
        }

        if(code==66 || code==67){
            imagen = "<img src= 'lluvia.png'>"
        }

        if(code==71 || code==73 || code==75){
            imagen = "<img src= 'nieve.png'>"
        }

        if(code==77){
            imagen = "<img src= 'nieve.png'>"
        }

        if(code==80 || code==81 || code==82){
            imagen = "<img src= 'lluvia.png'>"
        }

        if(code==85 || code==86){
            imagen = "<img src= 'nieve.png'>"
        }

        if(code==95){
            imagen = "<img src= 'tormenta.png'>"
        }

        if(code==96 || code==99){
            imagen = "<img src= 'tormenta.png'>"
        }
        document.getElementById("temperatura").innerHTML= Math.floor(data.current.temperature_2m) + data.current_units.temperature_2m
        document.getElementById("imagenActu").innerHTML= imagen
        document.getElementById("Sitio").innerHTML= "Latitud: "  + data.latitude + "<br> Longitud: " + data.longitude
       
        for(let i=0;i<Arrayweathercode.length;i++){ //bucle para asicnar la imagen a las proximas horas
            if(Arrayweathercode[i]==0){
                    imagen = "<img src= 'sol.png'>"
                    document.getElementById("imagenTemp" + i).innerHTML= imagen
                }
                if(Arrayweathercode[i]==1 || Arrayweathercode[i]==2 || Arrayweathercode[i]==3){
                    imagen = "<img src= 'sol-nube.png'>"
                    document.getElementById("imagenTemp" + i).innerHTML= imagen
                }
       
                if(Arrayweathercode[i]==45 || Arrayweathercode[i]==48){
                    imagen = "<img src= 'nublado.png'>"
                    document.getElementById("imagenTemp" + i).innerHTML= imagen
                }
               
                if(Arrayweathercode[i]==51 || Arrayweathercode[i]==53 || Arrayweathercode[i]==55){
                    imagen = "<img src= 'brisa.png'>"
                    document.getElementById("imagenTemp" + i).innerHTML= imagen
                }
       
                if(Arrayweathercode[i]==56 || Arrayweathercode[i]==57){
                    imagen = "<img src= 'brisa.png'>"
                    document.getElementById("imagenTemp" + i).innerHTML= imagen
                }
       
                if(Arrayweathercode[i]==61 || Arrayweathercode[i]==63 || Arrayweathercode[i]==65){
                    imagen = "<img src= 'lluvia.png'>"
                    document.getElementById("imagenTemp" + i).innerHTML= imagen
                }
       
                if(Arrayweathercode[i]==66 || Arrayweathercode[i]==67){
                    imagen = "<img src= 'lluvia.png'>"
                    document.getElementById("imagenTemp" + i).innerHTML= imagen
                }
       
                if(Arrayweathercode[i]==71 || Arrayweathercode[i]==73 || Arrayweathercode[i]==75){
                    imagen = "<img src= 'nieve.png'>"
                    document.getElementById("imagenTemp" + i).innerHTML= imagen
                }
       
                if(Arrayweathercode[i]==77){
                    imagen = "<img src= 'nieve.png'>"
                    document.getElementById("imagenTemp" + i).innerHTML= imagen
                }
       
                if(Arrayweathercode[i]==80 || Arrayweathercode[i]==81 || Arrayweathercode[i]==82){
                    imagen = "<img src= 'lluvia.png'>"
                    document.getElementById("imagenTemp" + i).innerHTML= imagen
                }
       
                if(Arrayweathercode[i]==85 || Arrayweathercode[i]==86){
                    imagen = "<img src= 'nieve.png'>"
                    document.getElementById("imagenTemp" + i).innerHTML= imagen
                }
       
                if(Arrayweathercode[i]==95){
                    imagen = "<img src= 'tormenta.png'>"
                    document.getElementById("imagenTemp" + i).innerHTML= imagen
                }
       
                if(Arrayweathercode[i]==96 || Arrayweathercode[i]==99){
                    imagen = "<img src= 'tormenta.png'>"
                    document.getElementById("imagenTemp" + i).innerHTML= imagen
                }
        }
    })