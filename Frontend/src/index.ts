import * as navts from "./navbar/navbar"
import * as registrazionets from "./registrazione/registrazione"
import * as logints from "./login/login"
import * as logoutts from "./logout/logout"

navts.createNav();
window.onload= () => {
    registrazionets.createModalSignUp();
    //document.getElementById("submitSignUp").onclick = registrazionets.tryToSignUp;
    logints.createModalSignIn();
    logoutts.createModalSignOut();
}

