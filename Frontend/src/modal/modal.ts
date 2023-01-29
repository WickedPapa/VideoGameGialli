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

export default createModal;