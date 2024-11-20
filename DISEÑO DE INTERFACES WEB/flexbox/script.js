fetch('https://api.open-meteo.com/v1/forecast?latitude=43.3128&longitude=-1.975&current=temperature_2m,apparent_temperature,is_day,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin')
    .then(Response => Response.json())
        .then(data => {
            //Variables
            let tempMax = Math.floor(data.daily.temperature_2m_max[0]);
            let tempMin = Math.floor(data.daily.temperature_2m_min[0]);
            let sensTermica = Math.floor(data.current.apparent_temperature);
            let codigoT = data.current.weather_code;
            let doN = data.current.is_day;

            //Mostrando en pantalla
            document.getElementById("tempAct").innerHTML = "Temperatura actual: " + Math.floor(data.current.temperature_2m) + "ºC";
            document.getElementById("tempMax").innerHTML = "Temperatura máxima hoy: " + tempMax + "ºC";
            document.getElementById("tempMin").innerHTML = "Temperatura mínima hoy: " + tempMin + "ºC";
            document.getElementById("sensTermica").innerHTML = "Sensación Térmica ahora: " + sensTermica + "ºC";

            //Es de dia o de Noche
            if (doN == 1) {
                document.getElementById("DiaONoche").innerHTML = "Es de Día";
            }else{
                document.getElementById("DiaONoche").innerHTML = "Es de Noche";
            }

            //Mostrando las imagenes
            let imagen;
            //codigo 0
            if (codigoT == 0 && doN == true) {
                imagen = "<img src='/Imagenes/0.png' alt='Sol'>";
            }else if(codigoT == 0 && doN == false){
                imagen = "<img src='/Imagenes/0.2.png' alt='Luna'>";
            }

            //Código 1,2,3
            if (codigoT == 1 && doN == true) {
                imagen = "<img src='/Imagenes/1.png' alt='Parcialmente despejado'>";
            }else if(codigoT == 1 && doN == false){
                imagen = "<img src='/Imagenes/1.2.png' alt='Parcialmente despejado de noche'>";
            }
            if (codigoT == 2 && doN == true) {
                imagen = "<img src='/Imagenes/2.png' alt='Parcialmente nublado'>";
            }else if(codigoT == 2 && doN == false){
                imagen = "<img src='/Imagenes/2.2.png' alt='Parcialmente nublado de noche'>";
            }
            if (codigoT == 3 && doN == true) {
                imagen = "<img src='/Imagenes/3.png' alt='Cubierto'>";
            }else if(codigoT == 3 && doN == false){
                imagen = "<img src='/Imagenes/3.2.png' alt='Cubierto noche'>";
            }

            //Código 45, 48
            if (codigoT == 45 || codigoT == 48) {
                imagen = "<img src='/Imagenes/45.png' alt='Nublado'>";
            }
            //Código 51, 53, 55
            if (codigoT == 51 ||codigoT == 53) {
                imagen = "<img src='/Imagenes/51.png' alt='Llovizna'>";
            }else if(codigoT == 53){
                imagen = "<img src='/Imagenes/63.png' alt='Llovizna densa'>";
            }
            //Código 56, 57
            if (codigoT == 56) {
                imagen = "<img src='/Imagenes/56.png' alt='Llovizna helada ligera'>";
            }else if (codigoT == 57) {
                imagen = "<img src='/Imagenes/57.png' alt='Llovizna helada densa'>";
            }
            //Código 61,63,65
            if (codigoT == 61) {
                imagen = "<img src='/Imagenes/61.png' alt='Lluvia ligera'>";
            }else if (codigoT == 63) {
                imagen = "<img src='/Imagenes/63.png' alt='Lluvia moderada'>";
            }else if(codigoT == 65){
                imagen = "<img src='/Imagenes/65.png' alt='Lluvia fuerte'>";
            }
            //Código 66, 67
            if (codigoT == 66) {
                imagen = "<img src='/Imagenes/66.png' alt='Lluvia helada ligera'>";
            }else if (codigoT == 67) {
                imagen = "<img src='/Imagenes/67.png' alt='Lluvia helada fuerte'>";
            }
            //Código 71, 73, 75
            if (codigoT == 71) {
                imagen = "<img src='/Imagenes/71.png' alt='Nevada ligera'>";
            }else if (codigoT == 73) {
                imagen = "<img src='/Imagenes/73.png' alt='Nevada moderada'>";
            }else if(codigoT == 75){
                imagen = "<img src='/Imagenes/75.png' alt='Nevada fuerte'>";
            }
            //Código 77
            if (codigoT == 77) {
                imagen = "<img src='/Imagenes/77.png' alt='Granizos de nieve'>";
            }
            //Código 80, 81, 82
            if (codigoT == 80) {
                imagen = "<img src='/Imagenes/61.png' alt='Lluvias ligeras'>";
            }else if (codigoT == 81) {
                imagen = "<img src='/Imagenes/63.png' alt='Lluvias moderadas'>";
            }else if(codigoT == 82){
                imagen = "<img src='/Imagenes/65.png' alt='Lluvias fuertes'>";
            }
            //Código 85, 86
            if (codigoT == 85 || codigoT == 86) {
                imagen = "<img src='/Imagenes/85.png' alt='Chubascos de nieve'>";
            }
            //Código 95, 96, 99
            if (codigoT == 95) {
                imagen = "<img src='/Imagenes/95.png' alt='Tormenta electrica'>";
            }else if(codigoT == 96 || codigoT == 99){
                imagen = "<img src='/Imagenes/96.png' alt='Tormenta electrica con granizo'>";
            } 

            document.getElementById("imagen_icon").innerHTML = imagen;
        })
        .catch(error => {
            console.error('Error en la conexión o en el mostrado de datos JSON:', error);
});