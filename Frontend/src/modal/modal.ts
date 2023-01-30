import modal from './modal.html'
import login from '../login/login.html'
import loginFooter from '../login/loginFooter.html'
import registrazione from '../registrazione/registrazione.html'
import regFooter from '../registrazione/registrazioneFooter.html'
import logout from '../logout/logout.html'
import profile from '../profiloUtente/profile.html'





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
}

function showLogOutModal(){
    document.getElementById("myModalBody").innerHTML = logout;
    document.getElementById("myModalFooter").innerHTML = "";
    //TODO: changeNavBar
}

function tryToSignUp() {
    /*
    if (!validatePassword2()) {
        return;
    }
    */
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
    //$("#myModal").modal("toggle");
    document.getElementById("main").innerHTML = profile;
}

function tryToLogIn() {
    //TODO
}

function tryToLogOut() {
    //TODO
}

function validatePassword(): void {
    console.log("ciao da validate2");
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