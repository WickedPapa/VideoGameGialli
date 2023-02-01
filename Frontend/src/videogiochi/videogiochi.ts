import { data } from "jquery";
import videogame from "../interfaces/videogame";
import createVideoGame from "./creaVideogiochi";

let gameList: videogame[] = [];
let gameView: number = 6;
let type: string;

export function createGamePage() {
    fetch("/whoIsLogged")
        .then((response) => response.json())
        .then((data) => {
            if (data == "ADMIN") {
                document.getElementById("addVideogame").removeAttribute("hidden");
                document.getElementById("addVideogame").onclick = createVideoGame;
                type = "ADMIN";
            } else if (data == "USER") {
                document.getElementById("addVideogame").setAttribute("hidden", "true");
                type = "USER"
            } else {
                document.getElementById("addVideogame").setAttribute("hidden", "true");
                type = "GUEST"
            }
            getAllGames(); 
            createGamePagination();
            showGames(1);
        })
}



function getAllGames() {
    gameList=[];
   /* fetch("/videogames")
        .then((response) => (response.json()))
        .then((data) => {
            for (let game of data) {
                gameList.push(game)
            }
        })
    */

        const imageGioco1 = {
            link: "https://i.etsystatic.com/6277804/r/il/7df00e/697546340/il_1140xN.697546340_fivs.jpg"
        }

        const gioco1 = {
            id: 1,
            name: "SuperMario",
            genre: [{genre: "PLATFORM"}],
            year: 1985,
            console: {console: "NES"},
            cover: imageGioco1
        }
        
        for (let i = 0; i < 27; i++) {
            if (i != 17) {
                gameList.push(gioco1)
            } else {
                gameList.push(gioco1)
            }
        }
        
}

function showGames(i: number) {
    let content = document.getElementById("VideogameContent");
    content.innerHTML = "";
    let start = (i - 1) * gameView;
    let stop = (i * gameView) - 1;
    for (start; start <= stop; start++) {
        if (start >= gameList.length) {
            return;
        }
        let col = document.createElement("div")
        col.setAttribute("class", "col-4 text-center");
        col.setAttribute("style", "background-color: rgba(0,0,0,0.2)");
        col.onmouseover = () => {
            col.setAttribute("style", "background-color: rgba(0,0,0,0.6)");
        }
        col.onmouseout = () => {
            col.setAttribute("style", "background-color: rgba(0,0,0,0.2)");
        }

        col.onclick = () => {
            // createGameVisualization(list[start])
        }
        
        let gameTitle = document.createElement("h3");
        gameTitle.setAttribute("class","my-4")
        let image = document.createElement("img");
        image.src = gameList[start].cover.link;
        image.width = 200;
        gameTitle.innerHTML = gameList[start].name;

        col.append(gameTitle, image);
        let addButton = document.createElement("button");
        
        if (type == "USER") {
            addButton.innerHTML = "Aggiungi alla tua Lista!"
            
            addButton.onclick = () => {
                
                fetch("/user/game/"+gameList[start].id)
                .then((response)=>(response.json()))
                .then((data)=>{
                    console.log(data);
                });
            }
            col.append(addButton);
        }
        content.append(col);
    }
}


function createGamePagination() {
    let size: number = gameList.length
    let tabs: number = Math.ceil(size / gameView);
    let pages = document.getElementById("pagesV");
    pages.innerHTML = "";
    for (let i = 1; i <= tabs; i++) {
        let li = document.createElement("li");
        if (i == 1) {
            li.setAttribute("class", "page-item active");
            li.setAttribute("aria-current", "page");
        } else {
            li.setAttribute("class", "page-item");
        }
        let btn = document.createElement("button");
        btn.setAttribute("class", "page-link");
        btn.onclick = () => {
            let allLi = document.getElementById("pagesV").children;
            for (let oneLi of allLi) {
                oneLi.setAttribute("class", "page-item");
                oneLi.removeAttribute("aria-current");
            }
            li.setAttribute("class", "page-item active");
            li.setAttribute("aria-current", "page");
            showGames(i);
        };
        btn.innerHTML = "" + (i);
        li.appendChild(btn);
        pages.appendChild(li);
    }
}



export default createGamePage;