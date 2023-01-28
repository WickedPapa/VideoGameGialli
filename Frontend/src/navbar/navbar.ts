import nav from "./navbar.html";
import createModal from "../modal/modal";
import annunci from "../annunci/annunci.html";
import createPage from "../annunci/annunci";
import home from "../home/home.html";
import profile from "../profiloUtente/profile.html";
import gestioneUtenti from "../gestioneUtenti/gestioneUtenti.html";
import getAllUsers from "../gestioneUtenti/gestioneUtenti";


export function createNav() {
    document.getElementById("header").innerHTML = nav;
    createModal();
    document.getElementById("logo").onclick = () => {
        document.getElementById("main").innerHTML = home;
    };
    document.getElementById("insertions").onclick = () => {
        document.getElementById("main").innerHTML = annunci;
        createPage();
    };
    document.getElementById("management").onclick = () => {
        document.getElementById("main").innerHTML = gestioneUtenti;
        getAllUsers();
    };
    document.getElementById("profile").onclick = () => {
        document.getElementById("main").innerHTML = profile;
    };
}

export function setNav() {
    document.getElementById("header").innerHTML = nav;
}



export default createNav;
