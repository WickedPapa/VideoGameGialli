import { data } from "jquery";
import genre from "../interfaces/genre";
import videogame from "../interfaces/videogame";
import createVideoGamePage from "./creaVideogiochi";
import createGameVisualization from "./visualizzaVideogioco"

let gameList: videogame[] = [];
let gameFilteredList: videogame[] = []
let genres: string[] = []
let years: number[] = []
let gameView: number = 6;
let type: string;
let consolles: string[];

export function createGamePage() {
    fetch("/whoIsLogged")
        .then((response) => response.json())
        .then((data) => {
            if (data == "ADMIN") {
                document.getElementById("addVideogame").removeAttribute("hidden");
                document.getElementById("addVideogame").onclick = createVideoGamePage;
                type = "ADMIN";
            } else if (data == "USER") {
                document.getElementById("addVideogame").setAttribute("hidden", "true");
                type = "USER"
            } else {
                document.getElementById("addVideogame").setAttribute("hidden", "true");
                type = "GUEST"
            }
            fetch("/videogames")
                .then((response) => (response.json()))
                .then((data) => {
                    gameList = [];
                    for (let game of data) {
                        gameList.push(game);
                    }
                    createGamePagination();
                    showGames(1);
                    assignGameFilters();
                })
        })
}



function getAllGames() {

    fetch("/videogames")
        .then((response) => (response.json()))
        .then((data) => {
            gameList = [];
            for (let game of data) {
                gameList.push(game);
            }
        })
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



        let gameTitle = document.createElement("h3");
        gameTitle.setAttribute("class", "bg-light border-top border-rounded border-2 border-primary my-4")
        let image = document.createElement("img");
        image.src = gameList[start].cover.link;
        image.width = 200;
        image.height = 200;
        let game = gameList[start]
        image.onclick = () => {
            createGameVisualization(game)
        }
        gameTitle.innerHTML = "<b>" + gameList[start].name + "</b>";

        col.append(gameTitle, image);
        let divButton = document.createElement("div");

        let addButton = document.createElement("a");
        let imgButton = document.createElement("img");

        let id = gameList[start].id
        if (type == "USER") {
            imgButton.setAttribute("src", "./img/button/addBtn.png");
            imgButton.height = 35;
            imgButton.setAttribute("style", "image-rendering: pixelated;");
            imgButton.setAttribute('class', 'p-0 my-3 mx-auto')
            addButton.setAttribute("class", "p-0 my-3")
            divButton.setAttribute('class', 'p-0 mx-auto')

            addButton.onclick = () => {

                fetch("/user/game/" + id)
                    .then((response) => (response.json()))
                    .then((data) => {
                        if (data) {
                            alert("Videogioco aggiunto!");
                        } else {
                            alert("Possiedi già questo giuoco!");
                        }
                    });
            }
            addButton.appendChild(imgButton);
            
            divButton.append(addButton);
            col.append(divButton);
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



function setAllConsolles() {
    consolles = []
    for (let i = 0; i < gameList.length; i++) {
        if (!(consolles.includes(gameList[i].console.console))) {
            consolles.push(gameList[i].console.console)
            let ul = document.getElementById("gameConsolles");
            let li = document.createElement("li");
            li.id = gameList[i].console.console;
            let btn = document.createElement("button");
            btn.setAttribute("class", "dropdown-item");
            btn.innerHTML = gameList[i].console.console;
            btn.onclick = () => {
                searchByGameConsolle(li.id); 
            }
            ul.append(li);
            li.append(btn);
        }
    }
}



function setAllGenres() {

    genres = []
    for (let i = 0; i < gameList.length; i++) {
        for (let j = 0; j < gameList[i].genre.length; j++) {
            if (!(genres.includes(gameList[i].genre[j].genre))) {
                genres.push(gameList[i].genre[j].genre)
                let ul = document.getElementById("gameGenres");
                let li = document.createElement("li");
                li.id = gameList[i].genre[j].genre;
                let btn = document.createElement("button");
                btn.setAttribute("class", "dropdown-item");
                btn.innerHTML = gameList[i].genre[j].genre;
                btn.onclick = () => {
                    searchByGameGenre(li.id);
                }
                ul.append(li);
                li.append(btn);
            }
        }
    }
}


function setAllYears() {
    years = []
    for (let i = 0; i < gameList.length; i++) {
        if (!(years.includes(gameList[i].year))) {
            years.push(gameList[i].year)
            let ul = document.getElementById("gameYears");
            let li = document.createElement("li");
            li.id = "" + gameList[i].year;
            let btn = document.createElement("button");
            btn.setAttribute("class", "dropdown-item");
            btn.innerHTML = "" + gameList[i].year;
            btn.onclick = () => {
                searchByGameYear(Number(li.id))

            }
            ul.append(li);
            li.append(btn);
        }
    }
}


function searchByAllGames() {             /*La funziona del bottone che cerca tutti gli annunci senza filtri*/
    getAllGames();
    createGamePagination();
    showGames(1);
}


function searchByGameTitle(title: string) {
    gameFilteredList = []
    for (let element of gameList) {
        let gameName = element.name
        if ((gameName.toUpperCase().includes(title.toUpperCase()))) {
            gameFilteredList.push(element)
        }
    }
    gameList = [];
    gameList = gameFilteredList
    createGamePagination();
    showGames(1);
    getAllGames();
}



function searchByGameConsolle(console: string) {
    gameFilteredList = []
    for (let element of gameList) {

        if (element.console.console == console) {
            gameFilteredList.push(element);
        }
    
    }
    gameList = [];
    gameList = gameFilteredList
    createGamePagination();
    showGames(1);
    getAllGames();
}


function searchByGameGenre(genre: string) {
    gameFilteredList = []
    for (let element of gameList) {
        for (let i = 0; i < element.genre.length; i++) {
            if (element.genre[i].genre == genre) {
                gameFilteredList.push(element);
                i = element.genre.length;
            }
        }
    }
    gameList = [];
    gameList = gameFilteredList
    createGamePagination();
    showGames(1);
    getAllGames();
}

function searchByGameYear(year: number) {
    gameFilteredList = []
    for (let element of gameList) {
        if (element.year == year) {
            gameFilteredList.push(element)
        }
    }
    gameList = [];
    gameList = gameFilteredList
    createGamePagination();
    showGames(1);
    getAllGames();
}




function assignGameFilters() {             /*Assegna le funzioni ai pulsanti nelle dropDownList da provare*/
    let allGames = document.getElementById("selectAllGames")
    allGames.onclick = () => {
        searchByAllGames();
    }

    setAllConsolles();

    setAllGenres();

    setAllYears();

    let searchTitle = document.getElementById("searchTitleGame") as HTMLInputElement;
    searchTitle.onkeydown = (e) => {
        if (e.key == 'Enter') {
            searchByGameTitle(searchTitle.value)
        }
    }
}






export default createGamePage;