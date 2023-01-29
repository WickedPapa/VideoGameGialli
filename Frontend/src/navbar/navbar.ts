import nav from "./navbar.html"
import createModal from "../modal/modal";
import createModalSignUp from "../registrazione/registrazione"


export function createNav() {
    document.getElementById("header").innerHTML = nav;
    createModal();
    //createModalSignUp();
    //createModalSignIn();
    //createModalSignOut();
}

export function setNav() {
    document.getElementById("header").innerHTML = nav;
}

export default createNav;
