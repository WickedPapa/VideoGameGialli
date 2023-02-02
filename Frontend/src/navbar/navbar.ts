import nav from "./navbar.html";
import createModal from "../modal/modal";
import annunci from "../annunci/annunci.html";
import gestioneannunci from "../annunci/gestioneannunci.html";
import createPage from "../annunci/annunci";
import home from "../home/home.html";
import createItemCarousel from "../home/home"
import createHome from "../home/home";
import profile from "../profiloUtente/profile.html";
import showProfile from "../profiloUtente/profile";
import gestioneUtenti from "../gestioneUtenti/gestioneUtenti.html";
import getAllUsers from "../gestioneUtenti/gestioneUtenti";
import createPage2 from "../annunci/gestioneannunci";
import creaAnnuncio from "../creaAnnuncio/creaAnnuncio.html"
import videogiochi from "../videogiochi/videogiochi.html"
import createInsertionPage from "../creaAnnuncio/creaAnnuncio"
import createGamePage from "../videogiochi/videogiochi";

export function createNav() {
    
    document.getElementById("header").innerHTML = nav;
    createModal();
    document.getElementById("logo").onclick = () => {
        document.getElementById("main").innerHTML = "";
        createHome();

    };

    document.getElementById("games").onclick=()=>{
      document.getElementById("main").innerHTML=videogiochi; 
      createGamePage(); 
    };

    document.getElementById("insertions").onclick = () => {
        document.getElementById("main").innerHTML = annunci;
        createPage();
    };
    document.getElementById("addInsertion").onclick = () => {
        document.getElementById("main").innerHTML = creaAnnuncio;
        createInsertionPage();
    };
    document.getElementById("insManagement").onclick = () => {
        document.getElementById("main").innerHTML = gestioneannunci;
        createPage2();
    };
    document.getElementById("management").onclick = () => {
        document.getElementById("main").innerHTML = gestioneUtenti;
        getAllUsers();
    };
    document.getElementById("profile").onclick = () => {
        document.getElementById("main").innerHTML = profile;
        showProfile();
    };
    fetch("/whoIsLogged")
    .then((response) => response.json())
    .then((data)=>{
        setNav(data);
    })
}

export function setNav(accountType : string) {
    const btn_gestUtenti = document.getElementById("management");
    const btn_insManagement = document.getElementById("insManagement");
    const btn_login = document.getElementById("login");
    const btn_signOutButton = document.getElementById("signOutButton");
    const btn_addInsertion = document.getElementById("addInsertion");
    const button_profile = document.getElementById("profile");
    if(accountType=="ADMIN"){
        btn_gestUtenti.removeAttribute("hidden");
        btn_addInsertion.setAttribute("hidden", "true");
        btn_insManagement.removeAttribute("hidden");
        btn_login.setAttribute("hidden", "true");
        btn_signOutButton.removeAttribute("hidden");
        button_profile.removeAttribute("hidden")
    }else if(accountType=="USER"){
        btn_gestUtenti.setAttribute("hidden", "true");
        btn_addInsertion.removeAttribute("hidden");
        btn_insManagement.setAttribute("hidden", "true");
        btn_login.setAttribute("hidden", "true");
        btn_signOutButton.removeAttribute("hidden");
        button_profile.removeAttribute("hidden")
    }else{
        btn_gestUtenti.setAttribute("hidden", "true");
        btn_addInsertion.setAttribute("hidden", "true");
        btn_insManagement.setAttribute("hidden", "true");
        btn_login.removeAttribute("hidden");
        btn_signOutButton.setAttribute("hidden", "true");
        button_profile.setAttribute("hidden", "true");
    }
}



export default createNav;
