import creaAnnuncio from './creaAnnuncio.html'
import annunci from './annunci.html'
import videogame from '../interfaces/videogame';

let fullList: videogame[] = []
let userList: videogame[] = []
let wishList: string[] = []
let userGameList: string[] = []
let listId:number[]=[]
let giocoDaScambiare: number;
let index = 0;


/*Crea la lista dei giochi posseduti dall'utente */
export function createInsertionPage() {
    getUserGames();
    getAllGames();
    document.getElementById("sendInsertion").onclick=()=>{
        sendAll();
    }
}


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
                let row = document.createElement("div");
                let col = document.createElement("div");
                let colPic = document.createElement("div");
                let pic = document.createElement("img");
                row.setAttribute("class", "mx-auto pb-4 row border-bottom border-2 border-primary");
                col.setAttribute("class", "col-2 mx-auto ms-0 my-auto");
                colPic.setAttribute("class", "col-2 mx-auto me-1 my-auto");
                pic.setAttribute('src', game.cover.link);
                pic.setAttribute('alt', game.name);
                pic.setAttribute('class', 'border border-2 border-info rounded')
                pic.setAttribute('style', 'width:300%');    
                liBtn.id = game.name;
                liBtn.setAttribute("type", "button");
                liBtn.setAttribute("class", "dropdown-item");
                liBtn.innerHTML = game.name;
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
                        listId[index] = game.id
                        index++;
                    }
                    console.log("Giochi desiderati: "+listId);
                    showSelectedGames();
                }

                row.append(col, colPic);
                col.append(liBtn);
                colPic.append(pic);
                li.append(row);
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
                let liBtn = document.createElement("button");   
                let row = document.createElement("div");
                let col = document.createElement("div");
                let colPic = document.createElement("div");
                let pic = document.createElement("img");
                row.setAttribute("class", "mx-auto pb-4 row border-bottom border-2 border-primary");
                col.setAttribute("class", "col-2 mx-auto ms-0 my-auto");
                colPic.setAttribute("class", "col-2 mx-auto me-1 my-auto");
                pic.setAttribute('src', game.cover.link);
                pic.setAttribute('alt', game.name);
                pic.setAttribute('class', 'border border-2 border-info rounded')
                pic.setAttribute('style', 'width:300%');    
                liBtn.id = game.name;
                liBtn.setAttribute("type", "button");
                liBtn.setAttribute("class", "dropdown-item");
                liBtn.innerHTML = game.name;
                
                liBtn.onclick = () => {

                    let test: boolean = true;

                    if (userGameList.length == 1) {
                        userGameList = [];
                        index = 0;
                    }

                    for (let element of userGameList) {
                        if (element == li.innerHTML) {
                            test = false;
                        }
                    }
                    if (test) {
                        userGameList[index] = li.innerHTML;
                        listId[index] = game.id
                        index++;
                    }
                    giocoDaScambiare = game.id;
                    console.log("Giochi scambio: "+giocoDaScambiare);
                    tradeSelectedGames();

                    
                }
                
                row.append(col, colPic);
                col.append(liBtn);
                colPic.append(pic);
                li.append(row);
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
        let pic = document.createElement("img");
        pic.src = wishList[i];

        li.innerHTML = wishList[i];
        selectedGames.append(li);
    }
}

function tradeSelectedGames() {
    let selectedGames = document.getElementById("selectedTradeGame");
    selectedGames.innerHTML = "";
    //if(document.getElementById('selected')==null) {
        for (let i = 0; i < userGameList.length; i++) {
            let li = document.createElement("li");
            let pic = document.createElement("img");
            li.setAttribute("id", "selected")
    
            pic.src = userGameList[i];
    
            li.innerHTML = userGameList[i];
            selectedGames.append(li);
            
       // }
    /*}else{
        document.getElementById("selected").remove();
        for (let i = 0; i < userGameList.length; i++) {
            let li = document.createElement("li");
            let pic = document.createElement("img");
    
            pic.src = userGameList[i];
    
            li.innerHTML = userGameList[i];
            selectedGames.append(li);
        }*/
    }
}

interface InsertionDTO{
    title:string,
    description:string,
    gallery:string[],
    tradeGameId:number,
    wishListIds:number[]
}


function sendAll (){
    let compositelink=(document.getElementById("galleryInsertion") as HTMLInputElement).value
    let links=compositelink.split(",");
    
    let obj:InsertionDTO={
    title: (document.getElementById("titleInsertion") as HTMLInputElement).value,
	description: (document.getElementById("descriptionInsertion") as HTMLInputElement).value,
	gallery: links,
	tradeGameId: giocoDaScambiare,
	wishListIds: listId
    }

    let request ={
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }

    fetch("/insertion", request)
    .then((response)=>response.json())
    .then((data)=>console.log(data));
}



export default createInsertionPage;