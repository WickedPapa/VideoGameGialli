import registrazione from "./registrazione.html"
import registrazioneFooter from "./registrazioneFooter.html"

/*
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
*/

function stamp(){
    console.log("porca puttana funziona");
}

export function createModalSignUp() {

    let divSignUp = document.createElement("div");
    divSignUp.innerHTML = registrazione;
    document.body.appendChild(divSignUp);
    let submitSignUp = document.getElementById("submitSignUp");
    submitSignUp.onclick = stamp;
}

/*
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

    fetch("/account");
}
*/
export default createModalSignUp;