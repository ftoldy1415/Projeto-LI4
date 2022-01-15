


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

    let horarioJunto = document.getElementById("segundaAbertura").value + ";" + document.getElementById("segundaFecho").value + ";" + document.getElementById("tercaAbertura").value + ";" + document.getElementById("tercaFecho").value + ";" + document.getElementById("quartaAbertura").value + ";" + document.getElementById("quartaFecho").value + ";" + document.getElementById("quintaAbertura").value + ";" + document.getElementById("quintaFecho").value + ";" + document.getElementById("sextaAbertura").value + ";" + document.getElementById("sextaFecho").value + ";" + document.getElementById("sabadoAbertura").value + ";" + document.getElementById("sabadoFecho").value + ";" + document.getElementById("domingoAbertura").value + ";" + document.getElementById("domingoFecho").value;


    var data1 = {
        nome : document.getElementById("nome").value,
        endereco : document.getElementById("endereco").value,
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


    document.getElementById("segunda").textContent = a.segundaAbertura + " -- " + a.segundaFecho;
    document.getElementById("terca").textContent = a.tercaAbertura + " -- " + a.tercaFecho;
    document.getElementById("quarta").textContent = a.quartaAbertura + " -- " + a.quartaFecho;
    document.getElementById("quinta").textContent = a.quintaAbertura + " -- " + a.quintaFecho;
    document.getElementById("sexta").textContent = a.sextaAbertura + " -- " + a.sextaFecho;
    document.getElementById("sabado").textContent = a.sabadoAbertura + " -- " + a.sabadoFecho;
    document.getElementById("domingo").textContent = a.domingoAbertura + " -- " + a.domingoFecho;

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
