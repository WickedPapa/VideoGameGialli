import videogame from "../interfaces/videogame";
import visualizzaVideogioco from "./visualizzaVideogioco.html";
import createGamePage from "./videogiochi";
import videogiochi from "./videogiochi.html"


export function createGameVisualization(game:videogame){
    console.log(game);
    document.getElementById("main").innerHTML=visualizzaVideogioco;
    setback();
    setPage(game)
    
}


function setback(){
    let back = document.getElementById("back-games")
    back.onclick=()=>{
        document.getElementById("main").innerHTML=videogiochi
        createGamePage();
    }
}

function setPage(game:videogame){
    let head = document.getElementById("gameTitle");
    let title=document.createElement("h1");
    title.innerHTML="<b>"+game.name+"</b>";
    head.append(title);
    head.setAttribute("class","text-center mb-5")
    let view = document.getElementById("gameImage");
    let img = document.createElement("img");
    img.src=game.cover.link;
    img.setAttribute('style', 'height:400px;width:auto;')
    view.append(img);
    let info = document.getElementById("gameInfo");
    let genere = document.createElement("h2")
    genere.innerHTML= "<b>GENERE/I: </b>";
    for(let i=0; i<game.genre.length; i++){
        genere.innerHTML += game.genre[i].genre +" ";
    } 
    let console=document.createElement("h2");
    console.innerHTML= "<b>CONSOLE: </b>"+game.console.console;
    let year=document.createElement("h2");
    year.innerHTML="<b>ANNO: </b>"+game.year
    info.append(genere,console,year);
}

export default createGameVisualization