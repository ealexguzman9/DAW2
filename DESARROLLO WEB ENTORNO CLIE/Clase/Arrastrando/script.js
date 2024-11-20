let cuadrado = document.getElementById("cuadrado");
let arrastrando = false;
let offSetX = 0;
let offSetY = 0;

    cuadrado.addEventListener("mousedown", function(e){
        console.log("Ratón pulsado en: " + e.clientX + ", " + e.clientY);
        arrastrando = true;
        cuadrado.style.cursor = "grabbing";
        offSetX = e.clientX - cuadrado.offsetLeft;
        offSetY = e.clientY - cuadrado.offsetTop;
    });

    cuadrado.addEventListener("mousemove", function(e){
        if(arrastrando){
            console.log("Arrastrando ratón en: " + e.clientX + ", " + e.clientY);
            cuadrado.style.left = e.clientX - offSetX + "px";
            cuadrado.style.top = e.clientY - offSetY + "px";
        }
    });
    
    cuadrado.addEventListener("mouseup", function(e){
        console.log("Ratón soltado en: " + e.clientX + ", " + e.clientY);
        arrastrando = false;
        cuadrado.style.cursor = "grab";
    });