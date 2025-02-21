
let personas = [];


function cargarUsuarios(){
    fetch("../data/user_data.json").then(function(response){
        return response.json();
    }).then(function(dataJson){
        console.log(dataJson);
        personas = dataJson;  
    });
}

function validarLogin(){
    cargarUsuarios();
    let user = document.getElementById("txtUsuario").value;
    let pass = document.getElementById("txtContrasenia").value;
    let persona = null;
    personas.forEach(function(item){
        if(user === item.usuario && pass === item.contrasenia){
            persona = item;
        }
    });
    if(persona != null){
        alert("Bienvenido: " + persona.nombrePersona );
        window.location.href = "../views/principal.html";
    }else{
        alert("Usuario o contraseña incorrectos");
    }
}











//API FETCH
    /*
    fetch("url").then(function(data){
        return data;
    }).then(
        function(response){

        }
    );*/