


const data = {
    name:"mariana"
};

fetch('http://127.0.0.1:8080/api/v1/person', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then((response) =>{

    const test = JSON.parse(response);

    console.log(test[0].id);
    })
    
    .then((data) => {
    // console.log('Success:', data);
    })

    .catch((error) => {
    console.error('Error:', error);
});



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

    // var obj = new Object();
    // obj.username = document.getElementById("username").value;
    // obj.password = document.getElementById("password").value;

    
    // fetch('http://127.0.0.1:8080/api/v1/person', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(obj),
    //     })
    //     .then((data) => {
    //     console.log('Success:', data);
    //     })
    //     .catch((error) => {
    //     console.error('Error:', error);
    // });


    window.location.replace("http://127.0.0.1:5500/HTML/frontPage.html")
    
}

function toSignIn(){
    window.location.replace("http://127.0.0.1:5500/HTML/signIn.html")
}

function toOwnerPage(){
    window.location.replace("http://127.0.0.1:5500/HTML/ownerPage.html")

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
