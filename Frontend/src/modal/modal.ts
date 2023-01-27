import modal from './modal.html'
import login from '../login/login.html'
import loginFooter from '../login/loginFooter.html'
import registrazione from '../registrazione/registrazione.html'
import regFooter from '../registrazione/registrazioneFooter.html'
import signUp from '../registrazione/registrazione.html'



export function createModal(){
    let divModal = document.createElement("div");
    divModal.innerHTML = modal;
    document.body.appendChild(divModal);
    showLoginModal();
}

function showSignUpModal(){
    document.getElementById("myModalBody").innerHTML = registrazione;
    document.getElementById("myModalFooter").innerHTML = regFooter;
    document.getElementById("signUpLogin").onclick = showLoginModal; 
}

function showLoginModal(){
    document.getElementById("myModalBody").innerHTML = login;
    document.getElementById("myModalFooter").innerHTML = loginFooter;
    document.getElementById("loginSignUp").onclick = showSignUpModal;
}

export default createModal;