fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(data =>{
        document.getElementById("datos").innerHTML = data[0].name + ", " + data[0].phone;
                console.log(data[0].name + ", " + data[0].phone)
    });
