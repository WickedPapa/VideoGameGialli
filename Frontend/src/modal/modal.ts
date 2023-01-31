import modal from './modal.html'
import login from '../login/login.html'
import loginFooter from '../login/loginFooter.html'
import registrazione from '../registrazione/registrazione.html'
import regFooter from '../registrazione/registrazioneFooter.html'
import logout from '../logout/logout.html'
import profile from '../profiloUtente/profile.html'
import * as nav from "../navbar/navbar";
import logged from '../interfaces/logged'

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
    document.getElementById("passwordSignUp").onkeyup = validatePassword;
    document.getElementById("confirm_passwordSignUp").onkeyup = validatePassword;
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
    }
}

function tryToSignUp() {
    console.log("e facciamola sta fecci");
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

    fetch("/user", request).then((response)=>response.json()).then((data)=>console.log(data));
    document.getElementById("main").innerHTML = profile;
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
            nav.setNav("");
        }
        return data});
    return promiseResult;
}

function validatePassword(): void {
    let password = document.getElementById("passwordSignUp") as HTMLInputElement;
    let confirm_password = document.getElementById("confirm_passwordSignUp") as HTMLInputElement;
    confirm_password.setAttribute("style", "");
    if (password.value != confirm_password.value) {
        console.log("ciao dall'if");
        confirm_password.setAttribute("style", "border-color: red;");
        (document.getElementById("trytoSignUp") as HTMLButtonElement).disabled = true;
    }else{
        confirm_password.setAttribute("style", "border-color: green;");
        document.getElementById("trytoSignUp").removeAttribute("disabled");
    }
}


export default createModal;