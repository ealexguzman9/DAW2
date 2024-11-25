//Establecer la Cookie
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

//Chequear Cookie
  function checkCookie() {
    let languageCookie  = getCookie("language");
    if (!languageCookie) {
      setCookie("language", "en", 365);
    } else if (languageCookie === "en") {
      window.location.href = "index.html";
    } else if (languageCookie === "eu") {
      window.location.href = "index_eu.html";
    } else if (languageCookie === "es") {
      window.location.href = "index_es.html";
    }
    console.log(languageCookie);
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
  }
  checkCookie();
