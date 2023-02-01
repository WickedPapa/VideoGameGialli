import creaAnnuncio from './creaAnnuncio.html'
import annunci from './annunci.html'
import videogame from '../interfaces/videogame';

let fullList:videogame[]=[]
let userList:videogame[]=[]
let wishList:string[]=[]
let giocoDaScambiare: string;
let index=0;

    /*Cerco tutti i giochi */
/*function getAllGames(){
   fullList=[];
    fetch("/videogames")
    .then((response)=> response.json())
    .then((videogames)=>{
        for(let game of videogames){
            fullList.push(game);
        }
    })
}
  */   /*Cerco tutti i giochi posseduti dall'utente*/
/*function getUserGames(){
    userList=[];
    fetch("/videogames/user")
    .then((response)=> response.json())
    .then((videogames)=>{
        for(let game of videogames){
            userList.push(game);
        }
    })
}
*/

/* Mostra i giochi scelti dall'utente per lo scambio*/
function showSelectedGames(){
    let selectedGames = document.getElementById("selectedGames");
    selectedGames.innerHTML="";
    for(let i=0; i<wishList.length; i++){
        let li = document.createElement("li");
        li.innerHTML=wishList[i];
        selectedGames.append(li);
    }
}



 /*Crea la lista dei giochi posseduti dall'utente */
 export function createInsertionPage(){
    let tradeGame = document.getElementById("tradeGame");
    tradeGame.innerHTML="";
    for(let game of userList){
        let li = document.createElement("li");
        li.setAttribute("class", "dropdown-item");
        li.innerHTML=game.name;
        li.onclick=()=>{
            giocoDaScambiare=li.innerHTML;
        }
        tradeGame.append(li);
    }

    /*Crea la lista dei 3 giochi che l'utente vorrebbe scambiare */
    let wishGames = document.getElementById("wishGames");
    wishGames.innerHTML="";
    for(let game of fullList){
        let li = document.createElement("li");
        li.setAttribute("class", "dropdown-item");
        li.innerHTML=game.name;
        li.onclick=()=>{    
            let test:boolean=true;

            if(wishList.length==3){
                wishList=[];
                index=0;
            }
            for(let element of wishList){
                if(element==li.innerHTML){
                    test = false;
                }
            }
            if(test){
                wishList[index]=li.innerHTML;
                index++;
            } 
            showSelectedGames();
        }
        wishGames.append(li);
    }

}



 function createInsertion(){
    //getAllGames();
    //getUserGames();
    
    let btn = document.getElementById("addInsertion2");
    btn.onclick=()=>{
        document.getElementById("main").innerHTML=creaAnnuncio;
        createInsertionPage();
    }
}





export default createInsertionPage;