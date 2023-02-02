import creaAnnuncio from './creaAnnuncio.html'
import annunci from './annunci.html'
import videogame from '../interfaces/videogame';

let fullList: videogame[] = []
let userList: videogame[] = []
let wishList: string[] = []
let giocoDaScambiare: string;
let index = 0;


function getAllGames() {
    fetch("/videogames")
        .then((response) => response.json())
        .then((videogames) => {
            fullList = [];
            for (let game of videogames) {
                fullList.push(game);
            }
            let wishGames = document.getElementById("wishGames");
            wishGames.innerHTML = "";
            for (let game of fullList) {
                let li = document.createElement("li");
                let liBtn = document.createElement("button");
                liBtn.id = game.name;
                liBtn.setAttribute("type", "button");
                liBtn.setAttribute("class", "dropdown-item");
                liBtn.innerHTML = game.name;
                console.log(game);
                liBtn.onclick = () => {

                    let test: boolean = true;

                    if (wishList.length == 3) {
                        wishList = [];
                        index = 0;
                    }
                    for (let element of wishList) {
                        if (element == li.innerHTML) {
                            test = false;
                        }
                    }
                    if (test) {
                        wishList[index] = li.innerHTML;
                        index++;
                    }
                    showSelectedGames();
                }
                li.append(liBtn);
                wishGames.append(li);
            }
        })
}

function getUserGames() {
    fetch("/videogames/user")
        .then((response) => response.json())
        .then((videogames) => {
            userList = [];
            for (let game of videogames) {
                userList.push(game);
            }
            let tradeGame = document.getElementById("tradeGame");
            tradeGame.innerHTML = "";
            for (let game of userList) {
                let li = document.createElement("li");
                li.setAttribute("class", "dropdown-item");
                li.innerHTML = game.name;
                console.log(game.name);
                li.onclick = () => {
                    giocoDaScambiare = li.innerHTML;
                }
                tradeGame.append(li);
            }
        })
}


/* Mostra i giochi scelti dall'utente per lo scambio*/
function showSelectedGames() {
    let selectedGames = document.getElementById("selectedGames");
    selectedGames.innerHTML = "";
    for (let i = 0; i < wishList.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = wishList[i];
        selectedGames.append(li);
    }
}



/*Crea la lista dei giochi posseduti dall'utente */
export function createInsertionPage() {
    getUserGames();
    getAllGames();
}

export default createInsertionPage;