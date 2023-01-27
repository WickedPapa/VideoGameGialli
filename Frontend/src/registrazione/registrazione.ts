import registrazione from "./registrazione.html"

export function createModalSignUp() {
    let buttonSignUp = document.getElementById("signUpButton");
    buttonSignUp.setAttribute("data-bs-toggle", "modal");
    buttonSignUp.setAttribute("data-bs-target", "#signUpModal");
    document.getElementById("main").innerHTML += registrazione;

    //document.getElementById("submitSignUp").setAttribute("onclick", "tryToSignUp()");
    document.getElementById("submitSignUp").onclick = tryToSignUp;
    //console.log(document.getElementById("submitSignUp").onclick);
}

export function tryToSignUp() {
    let name = document.getElementById('nameSignUp') as HTMLInputElement;
    name.validity.valid;
    let surname = document.getElementById('surnameSignUp') as HTMLInputElement;
    surname.validity.valid;
    let username = document.getElementById('usernameSignUp') as HTMLInputElement;
    username.validity.valid;
    let email = document.getElementById('emailSignUp') as HTMLInputElement;
    email.validity.valid;
    let password = document.getElementById('passwordSignUp') as HTMLInputElement;
    password.validity.valid;
    let confirm_password = document.getElementById('confirm_passwordSignUp') as HTMLInputElement;
    confirm_password.validity.valid;


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