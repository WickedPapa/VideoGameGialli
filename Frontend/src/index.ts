import nav from "./navbar/navbar.html"
import registrazione from "./registrazione/registrazione.html"

document.getElementById("header").innerHTML = nav;
document.getElementById("signUp").onclick = () => {
    document.getElementById("main").innerHTML = registrazione;
}
