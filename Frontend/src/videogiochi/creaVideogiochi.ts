import creaVideogioco from "./creaVideogioco.html"

export function createVideoGame(){
    document.getElementById("main").innerHTML = creaVideogioco;
}

export default createVideoGame