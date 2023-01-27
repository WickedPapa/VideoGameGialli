import nav from "./navbar.html"
import createModalSignUp from "../registrazione/registrazione"
import createModalSignIn from "../login/login"
import createModalSignOut from "../logout/logout"
import registrazione from "../registrazione/registrazione.html"

function stamp(){
    console.log("porca puttana funziona");
}

export function createNav() {
    document.getElementById("header").innerHTML = nav;
    let divSignUp = document.createElement("div");
    divSignUp.innerHTML = registrazione;
    document.body.appendChild(divSignUp);
    let submitSignUp = document.getElementById("submitSignUp");
    submitSignUp.onclick = stamp;
    //createModalSignUp();
    //createModalSignIn();
    //createModalSignOut();
}

export function setNav() {
    document.getElementById("header").innerHTML = nav;
}

export default createNav;
