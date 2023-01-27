import logout from "./logout.html"

export function createModalSignOut(){
    let buttonSignOut = document.getElementById("signOutButton");
    buttonSignOut.setAttribute("data-bs-toggle", "modal");
    buttonSignOut.setAttribute("data-bs-target", "#signOutModal");
    document.getElementById("main").innerHTML += logout;  
}