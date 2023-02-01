import videogame from "../interfaces/videogame";
import visualizzaVideogioco from "./visualizzaVideogioco.html"

function createGameVisualization(game:videogame){
    document.getElementById("main").innerHTML=visualizzaVideogioco;

    
    
}

