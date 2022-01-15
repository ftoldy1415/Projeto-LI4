


// const data = {
//     name:"mariana"
// }; 

// fetch('http://127.0.0.1:8080/api/v1/person', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//     })


// .then((response) => response.json())

// .then((data) => {
//     console.log(data);
// })

// .catch((error) => {
// console.error('Error:', error);
// });



// const Http = new XMLHttpRequest();
// const url = 'http://127.0.0.1:8080/api/v1/person';
// Http.open("GET", url);
// Http.send();


// Http.onreadystatechange = (e) => {

//     const test = JSON.parse(Http.responseText);
//     const x = test[0].id;

//     console.log(x);
//     usernameEl.textContent = Http.responseText;

// }













// function login(){

//     var obj = new Object();
//     obj.username = document.getElementById("username").value;
//     obj.password = document.getElementById("password").value;

//     const data = {
//         nif : "123",
//         nome : "joao",
//         email : ""

//     }
    
//     fetch('http://127.0.0.1:8080/api/cliente/registar', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(obj),
//         })
//         .then((data) => {
//         console.log('Success:', data);
//         })
//         .catch((error) => {
//         console.error('Error:', error);
//     });


//     window.location.replace("http://127.0.0.1:5500/HTML/frontPage.html")
    
// }



//-------------------------------


// const data = {
//     name:"mariana"
// }; 

// fetch('http://127.0.0.1:8080/api/v1/person', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//     })


// .then((response) => response.json())

// .then((data) => {
//     console.log(data);
// })

// .catch((error) => {
// console.error('Error:', error);
// });



// const Http = new XMLHttpRequest();
// const url = 'http://127.0.0.1:8080/api/v1/person';
// Http.open("GET", url);
// Http.send();


// Http.onreadystatechange = (e) => {

//     const test = JSON.parse(Http.responseText);
//     const x = test[0].id;

//     console.log(x);
//     usernameEl.textContent = Http.responseText;

// }






//--------------------------------LOG IN------------------------------------

function loginUser(){

    var data1 = {
        email : document.getElementById("email").value,
        palavra_passe : document.getElementById("password").value
    };


    fetch('http://127.0.0.1:8080/api/cliente/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
    })

    .then(response => {
        return response.json()
    })
    .then((data) => {
        console.log(data.login);
        if(data.login){
            window.location.replace("http://127.0.0.1:5500/HTML/frontPage.html")
        }
        else{
            document.getElementById("response").textContent = "Credencias fornecidas inválidas";
        }
    })

    .catch((error) => {
        console.error('Error:', error);
    })
}

function loginOwner(){

    var data1 = {
        email : document.getElementById("email").value,
        palavra_passe : document.getElementById("password").value
    };


    fetch('http://127.0.0.1:8080/api/cliente/login', {  ////////// qual o url
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
    })

    .then(response => {
        return response.json()
    })
    .then((data) => {
        console.log(data.login);
        if(data.login){
            window.location.replace("http://127.0.0.1:5500/HTML/frontPageOwner.html")
        }
        else{
            document.getElementById("response").textContent = "Credencias fornecidas inválidas";
        }
    })

    .catch((error) => {
        console.error('Error:', error);
    })
}


//--------------------------------SIGN IN-----------------------------------

function signInUser(){

    let password1 = document.getElementById("password").value;
    let password2 = document.getElementById("secondPassword").value;
    
    if( password1 === password2 ){

        var data1 = {
            nif : document.getElementById("nif").value,
            nome : document.getElementById("name").value,
            email : document.getElementById("email").value,
            palavra_passe : document.getElementById("password").value,
            num_telemovel : document.getElementById("phoneNumber").value,
            nome_utilizador : document.getElementById("name").value
        };


        fetch('http://127.0.0.1:8080/api/cliente/registar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
            })
            .then((data) => {
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
        });

        window.location.replace("http://127.0.0.1:5500/HTML/frontPage.html");


    } else {
        document.getElementById("error").textContent = "Palavras passes não coincidem";
    }
}

function signInOwner(){

    let password1 = document.getElementById("password").value;
    let password2 = document.getElementById("secondPassword").value;
    
    if( password1 === password2 ){

        var data1 = {
            nif : document.getElementById("nif").value,
            email : document.getElementById("email").value,
            palavra_passe : document.getElementById("password").value,
        };


        fetch('http://127.0.0.1:8080/api/cliente/registar', {   ////////// qual o url
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
            })
            .then((data) => {
                window.location.replace("http://127.0.0.1:5500/HTML/frontPageOwner.html");
            })
            .catch((error) => {
            console.error('Error:', error);
        });

    } else {
        document.getElementById("error").textContent = "Palavras passes não coincidem";
    }
}

//---------------------------------LOG OUT-----------------------------------

function logOutUser(){

    var data1 ={
        nothing: ""
    }

    fetch('http://127.0.0.1:8080/api/cliente/login', {  ////////// qual o url
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
    })

    .catch((error) => {
        console.error('Error:', error);
    })

    window.location.replace("http://127.0.0.1:5500/HTML/index.html")

}

function logOutOwner(){

    var data1 = {
        nothing: ""
    }

    fetch('http://127.0.0.1:8080/api/cliente/login', {  ////////// qual o url
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
    })

    .catch((error) => {
        console.error('Error:', error);
    })

    window.location.replace("http://127.0.0.1:5500/HTML/index.html")

}


//---------------------------------CHANGE PERFIL-----------------------------


function savePerfil(){

    let password1 = document.getElementById("password").value;
    let password2 = document.getElementById("secondPassword").value;
    
    if( password1 === password2 ){

        var data1 = {
            nome_utilizador : document.getElementById("username"),
            palavra_passe : document.getElementById("password"),
            num_telemovel : document.getElementById("phoneNumber")
        }


        fetch('http://127.0.0.1:8080/api/cliente/alterar_dados', {   ////////// qual o url
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then((data) => {
                document.getElementById("response1").textContent = "Alterações aceites";
            })
            .catch((error) => {
            console.error('Error:', error);
        });

    } else {
        document.getElementById("response1").textContent = "Palavras passes não coincidem";
    }

}


function saveFilter(){

    let km = document.getElementById("kilometers").value;

    if(km > 0){
        var data1 = {
            filter : km
        }


        fetch('http://127.0.0.1:8080/api/cliente/alterar_dados', {   ////////// qual o url
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then((data) => {
                document.getElementById("response2").textContent = "Alteração aceite";
            })
            .catch((error) => {
            console.error('Error:', error);
        });
    }
    else{
        document.getElementById("response2").textContent = "Distância inserida não permitida";
    }


}

//------------------------------------rest-----------------------------------

function addRestaurante(){

    let horarioJunto = createHorario();


    var data1 = {
        nome : document.getElementById("nome").value,
        rua : document.getElementById("rua").value,
        localidade : document.getElementById("localidade").value,
        telefone : document.getElementById("telefone").value,
        horario : horarioJunto
    };

    fetch('http://127.0.0.1:8080/api/restaurante/registar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data1),
    })
}

function createHorario(){
    let segundaHorario = "1:" + document.getElementById("segundaAbertura").value + "--" + document.getElementById("segundaFecho").value + ";";
    
    let tercaHorario = "2:" + document.getElementById("tercaAbertura").value + "--" + document.getElementById("tercaFecho").value + ";";

    let quartaHorario = "3:" + document.getElementById("quartaAbertura").value + "--" + document.getElementById("quartaFecho").value + ";";

    let quintaHorario = "4:" + document.getElementById("quintaAbertura").value + "--" + document.getElementById("quintaFecho").value + ";";

    let sextaHorario = "5:" + document.getElementById("sextaAbertura").value + "--" + document.getElementById("sextaFecho").value + ";";

    let sabadoHorario = "6:" + document.getElementById("sabadoAbertura").value + "--" + document.getElementById("sabadoFecho").value + ";";

    let domingoHorario = "7:" + document.getElementById("domingoAbertura").value + "--" + document.getElementById("domingoFecho").value + ";";

    return segundaHorario + tercaHorario + quartaHorario + quintaHorario + sextaHorario + sabadoHorario + domingoHorario;
}

function getRestaurant(){
    
    fetch('http://127.0.0.1:8080/api/cliente/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
    })

    .then(response => {
        let a = response.json();
        return a;
    })
    .catch((error) => {
        console.error('Error:', error);
    })

    document.getElementById("nomeRest").textContent = a.nome;
    document.getElementById("endereco").textContent = a.endereco;
    document.getElementById("telefone").textContent = a.telefone;
    document.getElementById("localidade").textContent = a.localidade;

    let horarioObj = new timeRest(a);

    document.getElementById("segunda").textContent = horarioObj.segundaAbertura + " -- " + horarioObj.segundaFecho;
    document.getElementById("terca").textContent = horarioObj.tercaAbertura + " -- " + horarioObj.tercaFecho;
    document.getElementById("quarta").textContent = horarioObj.quartaAbertura + " -- " + horarioObj.quartaFecho;
    document.getElementById("quinta").textContent = horarioObj.quintaAbertura + " -- " + horarioObj.quintaFecho;
    document.getElementById("sexta").textContent = horarioObj.sextaAbertura + " -- " + horarioObj.sextaFecho;
    document.getElementById("sabado").textContent = horarioObj.sabadoAbertura + " -- " + horarioObj.sabadoFecho;
    document.getElementById("domingo").textContent = horarioObj.domingoAbertura + " -- " + horarioObj.domingoFecho;

}

function getAbertura(dia){
    return dia.slice(2,6);
}

function getFecho(dia){
    return dia.slide(-5);
}

class timeRest {
    constructor(horario){
        
        const myArray = horario.slipt(";");
        this._segundaAbertura = getAbertura(myArray[0]);
        this._segundaFecho = getFecho(myArray[0]);

        this._tercaAbertura = getAbertura(myArray[1]);
        this._tercaFecho = getFecho(myArray[1]);

        this._quartaAbertura = getAbertura(myArray[2]);
        this._quartaFecho = getFecho(myArray[2]);
        
        this._quintaAbertura = getAbertura(myArray[3]);
        this._quintaFecho = getFecho(myArray[3]);
    
        this._sextaAbertura = getAbertura(myArray[4]);
        this._sextaFecho = getFecho(myArray[4]);

        this._sabadoAbertura = getAbertura(myArray[5]);
        this._sabadoFecho = getFecho(myArray[5]);

        this._domingoAbertura = getAbertura(myArray[6]);
        this._domingoFecho = getFecho(myArray[6]);
        
    }
}



function initMap() {
    const myLatLng = { lat: -25.363, lng: 131.044 };
    const myLatLng1 = { lat: -25.363, lng: 131.55 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatLng,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });



}



//------------------------------CHANGE WINDOW METHODS-----------------------

function toLogInUser(){
    window.location.replace("http://127.0.0.1:5500/HTML/logInUser.html");
}

function toLogInOwner(){
    window.location.replace("http://127.0.0.1:5500/HTML/logInOwner.html");
}

function toOwnerPage(){
    window.location.replace("http://127.0.0.1:5500/HTML/frontPageOwner.html")
}

function toSignInUser(){
    window.location.replace("http://127.0.0.1:5500/HTML/signInUser.html")
}

function toSignInOwner(){
    window.location.replace("http://127.0.0.1:5500/HTML/signInOwner.html")
}

function toAboutUs(){
    window.location.replace("http://127.0.0.1:5500/HTML/aboutUs.html")
}

function toFrontPage(){
    window.history.pushState("", "", "http://127.0.0.1:5500/HTML/frontPage.html");
    window.location.reload();
}

function toIndex(){
    window.location.replace("http://127.0.0.1:5500/HTML/index.html")
}

function toPerfil(){
    window.location.replace("http://127.0.0.1:5500/HTML/perfil.html")
}

function toCodes(){
    window.location.replace("http://127.0.0.1:5500/HTML/codes.html")
}

function toAval(){
    window.location.replace("http://127.0.0.1:5500/HTML/avaliacao.html")
}

function toBookings(){
    window.location.replace("http://127.0.0.1:5500/HTML/reservas.html")
}

function toRestaurante(){
    window.location.replace("http://127.0.0.1:5500/HTML/restaurante.html")
}

function toAddRest(){
    window.location.replace("http://127.0.0.1:5500/HTML/addRestaurante.html")
}

function toMap(){
    window.location.replace("http://127.0.0.1:5500/HTML/map.html");
    initMap();
    
}
