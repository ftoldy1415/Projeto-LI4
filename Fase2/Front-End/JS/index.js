


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









function login(){

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
        let a = response.json();
        let b = a.login;
        console.log(b);
    })
    .then((data) => {
        return data.login;
    })
    // .then()
    //     if(resp === true){
    //         window.location.replace("http://127.0.0.1:5500/HTML/frontPage.html");
    //     } else { document.getElementById("response").textContent = "Dados fornecidos Errados";}
    // })

    .catch((error) => {
        console.error('Error:', error);
    })





    // window.location.replace("http://127.0.0.1:5500/HTML/frontPage.html")
    
}


function signInUser(){

    let password1 = document.getElementById("password").value;
    let password2 = document.getElementById("secondPassword").value;
    
    if( password1 === password2 ){

        var data = {
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
            body: JSON.stringify(data),
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

function toSignInUser(){
    window.location.replace("http://127.0.0.1:5500/HTML/signInUser.html");
    signInUser();
}

function toSignIn(){
    window.location.replace("http://127.0.0.1:5500/HTML/signIn.html")
}

function toOwnerPage(){
    window.location.replace("http://127.0.0.1:5500/HTML/frontPageOwner.html")
}

function toSignInClient(){
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
