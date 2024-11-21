  //Establecer la Cookie idioma
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  //Obtener idiomas
  function getCookie(cname) {
    let idioma = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(idioma) == 0) {
        return c.substring(idioma.length, c.length);
      }
    }
    return "";
  }
  //Chequear Cookie idioma
  function checkCookie() {
    let username = getCookie("username");
    if (username != "") {
      console.log(username);
      if (username == "Español") {
        // Redirige a la segunda página
        window.location.href = "index_es.html";
      }
      if (username == "Euskera") {
      // Redirige a la segunda página
      window.location.href = "index_eu.html";
      }
    } else {
      username = prompt("¿Qué idioma prefieres?: Español, Euskera, Ingles", "");
      if (username != "" && username != null) {
        setCookie("username", username, 365);
      }
    }
  }
  /*
  //Establecer la Cookie
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  //Chequear Cookie
  function checkCookie() {
    let username = getCookie("username");
    if (username != "") {
     alert("Welcome again " + username);
    } else {
      username = prompt("Please enter your name:", "");
      if (username != "" && username != null) {
        setCookie("username", username, 365);
      }
    }
  }

  //Obtener la cookie
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }*/
  checkCookie();
