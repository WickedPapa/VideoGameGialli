import nav from "./navbar.html"
import createModalSignUp from "../registrazione/registrazione"
import createModalSignIn from "../login/login"
import createModalSignOut from "../logout/logout"

export function createNav() {
    document.getElementById("header").innerHTML = nav;
    createModalSignUp();
    createModalSignIn();
    createModalSignOut();
}

export function setNav() {
    document.getElementById("header").innerHTML = nav;
}

export default createNav;
