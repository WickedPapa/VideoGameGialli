import modal from './modal.html'
import login from '../login/login.html'
import loginFooter from '../login/loginFooter.html'
import registrazione from '../registrazione/registrazione.html'
import regFooter from '../registrazione/registrazioneFooter.html'
import logout from '../logout/logout.html'




export function createModal(){
    let divModal = document.createElement("div");
    divModal.innerHTML = modal;
    document.body.appendChild(divModal);
    showLogInModal();
    document.getElementById("login").onclick = showLogInModal;
    document.getElementById("signOutButton").onclick = showLogOutModal;
}

function showSignUpModal(){
    document.getElementById("myModalBody").innerHTML = registrazione;
    document.getElementById("myModalFooter").innerHTML = regFooter;
    document.getElementById("signUpLogin").onclick = showLogInModal; 
}

function showLogInModal(){
    document.getElementById("myModalBody").innerHTML = login;
    document.getElementById("myModalFooter").innerHTML = loginFooter;
    document.getElementById("loginSignUp").onclick = showSignUpModal;
}

function showLogOutModal(){
    document.getElementById("myModalBody").innerHTML = logout;
    document.getElementById("myModalFooter").innerHTML = "";
    //TODO: changeNavBar
}

function tryToSignUp() {
    if (!validatePassword2()) {
        return;
    }
    console.log("e facciamola sta fecci");
    const user = {
        username: "",
        password: "",
        name: "",
        surname: "",
        email: ""
    }

    //fetch("/account");
}

function tryToLogIn() {
    //TODO
}

function tryToLogOut() {
    //TODO
}

function validatePassword() {
    let password = document.getElementById("passwordSignUp") as HTMLInputElement;
    let confirm_password = document.getElementById("confirm_passwordSignUp") as HTMLInputElement;
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

function validatePassword2(): boolean {
    console.log("ciao da validate2");
    let password = document.getElementById("passwordSignUp") as HTMLInputElement;
    let confirm_password = document.getElementById("confirm_passwordSignUp") as HTMLInputElement;
    confirm_password.setAttribute("style", "");
    if (password.value != confirm_password.value) {
        console.log("ciao dall'if");
        confirm_password.setAttribute("style", "border-color: red;");
        return false;
    }
    return true;
}


export default createModal;