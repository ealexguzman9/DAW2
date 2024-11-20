// Variables
let hora = 0;
let minuto = 0;
let segundos = 0;

let sumHora = 0;
let sumMinuto = 0;
let sumSegundo =  0;

let enMarcha = false;
let restart = false;

/* Activar Cronometro */
let intervalo = setInterval(actualizarCronometro, 1000);
function activarCronometro() {
    enMarcha = !enMarcha;
    if (enMarcha) {
        document.getElementById("start").innerHTML = "Pause";
    } else {
        document.getElementById("start").innerHTML = "Continue";
    }
    if (restart) {
        enMarcha = false;
        document.getElementById("nums").innerHTML = "00:00:00";
        restart = false;
        document.getElementById("start").innerHTML = "Start";
    }
}

/* Reiniciar Cronometro */
function reiniciarCronometro() {
    enMarcha = false;
    hora = 0;
    minuto = 0;
    segundos = 0;
    document.getElementById("nums").innerHTML = "00:00:00";
    document.getElementById("start").innerHTML = "Start";
}

/* Actualizar cronometro */
function actualizarCronometro() {
    if (enMarcha) {
        segundos++;
        if (segundos == 60) {
            segundos = 0;
            minuto++;
        }
        if (minuto == 60) {
            minuto = 0;
            hora++;
        }

        if (segundos < 10) {
            sumSegundo = "0" + segundos;
        } else {
            sumSegundo = segundos;
        }

        if (minuto < 10) {
            sumMinuto = "0" + minuto;
        } else {
            sumMinuto = minuto;
        }

        if (hora < 10) {
            sumHora = "0" + hora;
        } else {
            sumHora = hora;
        }

        document.getElementById("nums").innerHTML = sumHora + ":" + sumMinuto + ":" + sumSegundo;
    }
}
