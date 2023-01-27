import login from "./login.html"

export function createModalSignIn(){
    let buttonSignIn = document.getElementById("signInButton");
    buttonSignIn.setAttribute("data-bs-toggle", "modal");
    buttonSignIn.setAttribute("data-bs-target", "#signInModal");
    document.getElementById("main").innerHTML += login;
}