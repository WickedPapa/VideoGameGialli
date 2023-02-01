import modal from './modal.html'
import login from '../login/login.html'
import loginFooter from '../login/loginFooter.html'
import registrazione from '../registrazione/registrazione.html'
import regFooter from '../registrazione/registrazioneFooter.html'
import logout from '../logout/logout.html'
import profile from '../profiloUtente/profile.html'
import * as nav from "../navbar/navbar";
import logged from '../interfaces/logged'
import createHome from '../home/home'

export function createModal(){
    let divModal = document.createElement("div");
    divModal.innerHTML = modal;
    document.getElementById("container").appendChild(divModal);
    showLogInModal();
    document.getElementById("login").onclick = showLogInModal;
    document.getElementById("signOutButton").onclick = showLogOutModal;
}

function showSignUpModal(){
    document.getElementById("myModalBody").innerHTML = registrazione;
    document.getElementById("myModalFooter").innerHTML = regFooter;
    document.getElementById("trytoSignUp").onclick = tryToSignUp;
    document.getElementById("signUpLogin").onclick = showLogInModal;
    document.getElementById("nameSignUp").onkeyup = validateForm;
    document.getElementById("surnameSignUp").onkeyup = validateForm;
    document.getElementById("usernameSignUp").onkeyup = validateForm;
    document.getElementById("emailSignUp").onkeyup = validateForm;
    document.getElementById("passwordSignUp").onkeyup = validateForm;
    document.getElementById("confirm_passwordSignUp").onkeyup = validateForm;
}

function showLogInModal(){
    document.getElementById("myModalBody").innerHTML = login;
    document.getElementById("myModalFooter").innerHTML = loginFooter;
    document.getElementById("loginSignUp").onclick = showSignUpModal;
    document.getElementById("tryToLog").onclick = tryToLogIn;
}

async function showLogOutModal(){
    let result : boolean= await tryToLogOut();
    if(result){
        document.getElementById("myModalBody").innerHTML = logout;
        document.getElementById("myModalFooter").innerHTML = "";
        createHome();
    }
}

function tryToSignUp() {
    const user = {
        username: (document.getElementById("usernameSignUp") as HTMLInputElement).value ,
        password: (document.getElementById("passwordSignUp") as HTMLInputElement).value,
        name: (document.getElementById("nameSignUp") as HTMLInputElement).value,
        surname: (document.getElementById("surnameSignUp") as HTMLInputElement).value,
        email: (document.getElementById("emailSignUp") as HTMLInputElement).value
    };

    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }

    fetch("/user", request).then((response)=>response.json()).then((data)=>{
        if(data){
            document.getElementById("signUpResult").innerHTML="Registrato con successo!";
            document.getElementById("trytoSignUp").setAttribute("disabled", "true");
        }else{
            document.getElementById("signUpResult").innerHTML="Ops, qualcosa è andato storto!";
            document.getElementById("trytoSignUp").removeAttribute("disabled");
        }
    });
    
}

function tryToLogIn() {
    const login = {
        username: (document.getElementById("usernameSignIn") as HTMLInputElement).value,
        password: (document.getElementById("passwordSignIn") as HTMLInputElement).value
    }

    const request = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(login)
    };
    let result : any = fetch("/login", request)
    .then((response)=>response.json())
    .then((data)=>{
        if(data.logged){
            document.getElementById("loginResult").innerHTML="Loggato con successo!";
            nav.setNav(data.accountType);
            document.getElementById("tryToLog").setAttribute("disabled", "true");
            document.getElementById("loginSignUp").setAttribute("disabled", "true");
            createHome();
        }else{
            document.getElementById("loginResult").innerHTML="Ops, qualcosa è andato storto";
        }
    });
}

async function tryToLogOut() :Promise<boolean>{
    let promiseResult = fetch("/logout")
    .then((response)=>response.json())
    .then((data)=>{
        if(data){
            nav.setNav("GUEST");
            document.getElementById("tryToLog").removeAttribute("disabled");
            document.getElementById("loginSignUp").removeAttribute("disabled");
        }
        return data});
    return promiseResult;
}

function validateForm(){
    let username = (document.getElementById("usernameSignUp") as HTMLInputElement).value ;
    let password = (document.getElementById("passwordSignUp") as HTMLInputElement).value;
    let name = (document.getElementById("nameSignUp") as HTMLInputElement).value;
    let surname = (document.getElementById("surnameSignUp") as HTMLInputElement).value;
    let email = (document.getElementById("emailSignUp") as HTMLInputElement).value;
    let confirm_password = document.getElementById("confirm_passwordSignUp") as HTMLInputElement;
    confirm_password.setAttribute("style", "");
    
    if(username=="" || password=="" ||name=="" || surname=="" || email==""){
        (document.getElementById("trytoSignUp") as HTMLInputElement ).disabled = true;
        if (password != confirm_password.value) {
            confirm_password.setAttribute("style", "border-color: red;");
        }else{
            confirm_password.setAttribute("style", "border-color: green;");
        }
    }else{
        if (password != confirm_password.value) {
            confirm_password.setAttribute("style", "border-color: red;");
        }else{
            confirm_password.setAttribute("style", "border-color: green;");
            document.getElementById("trytoSignUp").removeAttribute("disabled");
        }
    }
    
}

export default createModal;