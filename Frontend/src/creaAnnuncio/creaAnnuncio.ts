import creaAnnuncio from './creaAnnuncio.html'
import annunci from './annunci.html'
import videogame from '../interfaces/videogame';

let fullList: videogame[] = []
let userList: videogame[] = []
let wishList: string[] = []
let listId:number[]=[]
let gameToTrade:videogame;
let giocoDaScambiare: number;
let index = 0;


/*Crea la lista dei giochi posseduti dall'utente */
export function createInsertionPage() {
    getUserGames();
    getAllGames();
    buttonTemplate();
    document.getElementById("sendInsertion").onclick=()=>{
        sendAll();
    }
}

function buttonTemplate(){
    let selected = document.getElementById("selectedTradeGame");
    let row = document.createElement("div");
    let liBtn = document.createElement("button");
    let col = document.createElement("div");
    let col2 = document.createElement("div");
    let title = document.createElement("div");
    let pic = document.createElement("img");
    
    title.innerHTML = "Seleziona il gioco da scambiare";

    row.setAttribute("class", "mx-auto row border-bottom border-2 border-primary");
    row.setAttribute('style', 'height:110px;width:330px;')
    col.setAttribute("class", "col-2 mx-auto ms-0 my-auto ms-1");
    col2.setAttribute("class", "col-2 mx-auto me-1 my-auto");
    title.setAttribute("class", "my-auto");
    col2.setAttribute('style', 'height:64px;width:auto;');  
    liBtn.setAttribute("type", "button");
    liBtn.setAttribute("class", "p-0 mx-auto my-auto dropdown-item");


    row.append(col, col2);
    col.append(title);
    col2.append(pic);
    liBtn.append(row);

    selected.append(liBtn);

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
            for (let i=0;i<fullList.length;i++) {
                let control = true;
                for(let j=0; j<userList.length;j++){
                    if(fullList[i].id == userList[j].id){
                        control=false;
                        continue;
                    }
                }
                if(!control){
                    continue;
                }
                let li = document.createElement("li");
                let liBtn = document.createElement("button");
                let title = document.createElement("p");

                let row = document.createElement("div");
                let col = document.createElement("div");
                let colPic = document.createElement("div");
                let pic = document.createElement("img");
                row.setAttribute("class", "mx-auto pb-4 row border-bottom border-2 border-primary");
                row.setAttribute('style', 'height:80px;width:330px;')
                col.setAttribute("class", "col-2 mx-auto ms-0 my-auto");
                colPic.setAttribute("class", "col-2 mx-auto me-1 my-auto");
                pic.setAttribute('src', fullList[i].cover.link);
                pic.setAttribute('alt', fullList[i].name);
                pic.setAttribute('class', 'border border-2 border-info rounded')
                pic.setAttribute('style', 'height:64px;width:auto;');    
                liBtn.id = fullList[i].name;
                liBtn.setAttribute("type", "button");
                liBtn.setAttribute("class", "dropdown-item");
                title.innerHTML = fullList[i].name;
                title.setAttribute("class", "my-auto");
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
                        listId[index] = fullList[i].id
                        index++;
                    }
                    console.log("Giochi desiderati: "+listId);
                    showSelectedGames();
                }

                li.append(liBtn);
                liBtn.append(row);
                col.append(title);
                colPic.append(pic)
                row.append(col, colPic);
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
                let title = document.createElement("p");
                let liBtn = document.createElement("button");
                let pic = document.createElement("img");
                let row = document.createElement("div");
                let col = document.createElement("div");
                let colPic = document.createElement("div");
                row.setAttribute("class", "mx-auto row border-bottom border-2 border-primary");
                row.setAttribute('style', 'height:110px;width:330px;')
                col.setAttribute("class", "col-2 mx-auto ms-0 my-auto ms-1");
                colPic.setAttribute("class", "col-2 mx-auto me-1 my-auto");
                li.setAttribute("class", "dropdown-item");
                li.setAttribute("id", "itemSelected");
                title.innerHTML = game.name;
                title.setAttribute("class", "my-auto");
                pic.src = game.cover.link;
                pic.setAttribute('class','border border-2 border-info rounded');
                pic.setAttribute('style', 'height:64px;width:auto;');  
                console.log(game.name);
                liBtn.id = game.name;
                liBtn.setAttribute("type", "button");
                liBtn.setAttribute("class", "p-0 mx-auto my-auto dropdown-item");
                liBtn.onclick = () => {
                    giocoDaScambiare = game.id;
                    console.log("gioco da Scambiare: "+ giocoDaScambiare);
                    gameToTrade=game;
                    showSelectedTradeGame()
                   // let btn = document.getElementById("selectedTradeGame");
                    //btn.append(li);
                }
                
                row.append(col, colPic);
                col.append(title);
                colPic.append(pic);
                liBtn.append(row);
                li.append(liBtn);
                tradeGame.append(li);
            }
        })
}


function showSelectedTradeGame(){
    gameToTrade;
    let selected = document.getElementById
    ("selectedTradeGame");
    selected.innerHTML = "";
    let row = document.createElement("div");
    row.setAttribute('style', 'height:110px;width:330px;')
    let liBtn = document.createElement("button");
    let col = document.createElement("div");
    let colPic = document.createElement("div");
    let title = document.createElement("div");
    let pic = document.createElement("img");
    
    title.innerHTML = gameToTrade.name;
    pic.src = gameToTrade.cover.link;

    row.setAttribute("class", "mx-auto row border-bottom border-2 border-primary");
    col.setAttribute("class", "col-2 mx-auto ms-0 my-auto ms-1");
    colPic.setAttribute("class", "col-2 mx-auto me-1 my-auto");
    title.setAttribute("class", "my-auto");
    pic.setAttribute('class','border border-2 border-info rounded');
    pic.setAttribute('style', 'height:64px;width:auto;');  
    liBtn.setAttribute("type", "button");
    liBtn.setAttribute("class", "p-0 mx-auto my-auto dropdown-item");


    row.append(col, colPic);
    col.append(title);
    colPic.append(pic);
    liBtn.append(row);

    selected.append(liBtn);
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
    .then((data)=>{
        if(data){
            alert("Annuncio inserito!");
        }else{
            alert("Ops, qualcosa è andato storto!");
        }
    });
}



export default createInsertionPage;