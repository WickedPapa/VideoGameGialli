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
    title.setAttribute('class','mt-3 border-bottom rounded-top border-2 border-primary bg-light')
    head.append(title);
    head.setAttribute("class","text-center mb-5")
    let view = document.getElementById("gameImage");
    let img = document.createElement("img");
    img.src=game.cover.link;
    img.setAttribute('style', 'height:400px;width:auto;')
    img.setAttribute('class','mb-5 rounded')

    view.append(img);
    let info = document.getElementById("gameInfo");
    let genere = document.createElement("h2")
    genere.innerHTML= "<b>GENERE/I: </b>";
    for(let i=0; i<game.genre.length; i++){
        genere.innerHTML += game.genre[i].genre +" ";
    } 
    genere.setAttribute('class','border-bottom border-2 border-primary')
    let console=document.createElement("h2");
    console.innerHTML= "<b>CONSOLE: </b>"+game.console.console;
    let year=document.createElement("h2");
    year.innerHTML="<b>ANNO: </b>"+game.year
    info.setAttribute('style', 'text-color:white;background-color: rgba(0,0,0,0.6)')
    info.setAttribute('class', 'border-bottom border-top rounded border-2 border-primary text-light text-center rounded')
    info.append(genere,console,year);
}

export default createGameVisualization