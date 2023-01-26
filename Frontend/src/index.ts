import nav from "./navbar/navbar.html"
import registrazione from "./registrazione/registrazione.html"

document.body.onload= () => {
    let button = document.getElementById("signUp");
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#exampleModal");
    document.getElementById("main").innerHTML = registrazione;   
}
document.getElementById("header").innerHTML = nav;
