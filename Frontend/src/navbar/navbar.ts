import nav from "./navbar.html";
import createModal from "../modal/modal";
import annunci from "../annunci/annunci.html";
import home from "../home/home.html";
import profile from "../profiloUtente/profile.html";
import gestioneUtenti from "../gestioneUtenti/gestioneUtenti.html";


export function createNav() {
    document.getElementById("header").innerHTML = nav;
    createModal();
    document.getElementById("logo").onclick = () => {
        document.getElementById("main").innerHTML = home;
    };
    document.getElementById("insertions").onclick = () => {
        document.getElementById("main").innerHTML = annunci;
    };
    document.getElementById("management").onclick = () => {
        document.getElementById("main").innerHTML = gestioneUtenti;
    };
    document.getElementById("management").onclick = () => {
        document.getElementById("main").innerHTML = profile;
    };
}

export function setNav() {
    document.getElementById("header").innerHTML = nav;
}



export default createNav;
