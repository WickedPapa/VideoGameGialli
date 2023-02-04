import insertion from '../interfaces/insertion';
import annuncio from './annuncio.html'
import createPage from './annunci';
import annunci from './annunci.html'
import videogame from '../interfaces/videogame';
import userInfo from '../interfaces/userInfo';
import user from '../interfaces/user';

export function expandInsertion(insertion: insertion) {

    /*Imposto la pagina principale con il template del singolo annuncio */
    let main = document.getElementById("main");
    main.innerHTML = annuncio;

    
    document.getElementById("backgames").onclick = () => {
        document.getElementById("main").innerHTML = annunci;
        createPage();
    }
    let back = document.getElementById("back")
    //back.append(button);

    let title = document.createElement("h1");
    title.innerHTML = insertion.title;
    back.append(title);



    /*Imposto il carosello delle immagini utente */
    let indicator = document.getElementById("indicator")
    for (let i = 0; i < insertion.gallery.length; i++) {
        let btn = document.createElement("button");
        btn.setAttribute("data-bs-target", "#imageSlider");
        btn.setAttribute("data-bs-slide-to", "" + i);
        if (i == 0) {
            btn.setAttribute("class", "active");
            btn.setAttribute("aria-current", "true");
        }
        btn.setAttribute("aria-label", "Slide " + (i + 1));
        indicator.append(btn);
    }
    let inner = document.getElementById("inner")

    for (let i = 0; i < insertion.gallery.length; i++) {
        let div = document.createElement("div");
        if (i == 0) {
            div.setAttribute("class", "carousel-item active")
        } else {
            div.setAttribute("class", "carousel-item")
        }
        let img = document.createElement("img");
        img.src = insertion.gallery[i].link;
        img.width = 400;
        img.setAttribute("class", "d-block w-100");
        img.alt = "Gallery Image" + (i + 1)
        div.append(img);
        inner.append(div)
    }
    let img = document.createElement("img");
    img.src = insertion.tradeGame.cover.link;
    img.setAttribute("class", "img-fluid rounded-start")
    document.getElementById("card-image").append(img);
    let h4 = document.createElement("h4");
    h4.setAttribute("class", "card-title");
    h4.innerHTML = insertion.tradeGame.name;
    let p = document.createElement("p");
    p.setAttribute("class", "card-text");
    p.setAttribute("style", "font-size: 1.5em;")
    p.innerHTML = "Genere: ";
    for (let i = 0; i < insertion.tradeGame.genre.length; i++) {
        p.innerHTML += insertion.tradeGame.genre[i].genre + " "
    }
    p.innerHTML += "<br>"
        + "Anno: " + insertion.tradeGame.year + "<br>"
        + "Console: " + insertion.tradeGame.console.console;
    document.getElementById("card-body").append(h4, p);
    let desc = document.createElement("h2");
    desc.setAttribute("style","color:white")
    desc.innerHTML = "Descrizione:"
    let insDesc = document.createElement("h3");
    insDesc.setAttribute("style","color:white")
    insDesc.innerHTML = insertion.description;
    document.getElementById("insertion-creator").innerHTML = "L'utente"//insertion.publisher.username;
    document.getElementById("insertion-description").append(desc, insDesc);
    for (let i = 0; i < 3; i++) {
        document.getElementById("btn-item-" + (i + 1)).innerHTML = insertion.wishList[i].name;
        let img = document.createElement("img");
        img.src = insertion.wishList[i].cover.link;
        img.setAttribute("class", "card-img-top")
        img.onclick = ()=>{ createProposal(insertion.wishList[i], insertion.tradeGame, insertion.publisher)}
        document.getElementById("img-item-" + (i + 1)).append(img);
        let p = document.createElement("p");
        p.setAttribute("class", "card-text");
        p.setAttribute("style", "font-size: 1.5em;");
        p.innerHTML = "Genere: ";
        for (let i = 0; i < insertion.tradeGame.genre.length; i++) {
            p.innerHTML += insertion.tradeGame.genre[i].genre + " "
        }
        p.innerHTML += "<br>"
            + "Anno: " + insertion.tradeGame.year + "<br>"
            + "Console: " + insertion.tradeGame.console.console;
        document.getElementById("body-item-" + (i + 1)).append(p);
    }
} 

function createProposal(wishGame:videogame, tradeGame:videogame, publisher : user){
    let proposalDiv = document.getElementById("insertion-confirm");
    let h3 = document.createElement("h3");
    h3.innerHTML = "Sei sicuro di voler scambiare "+ wishGame.name + " per "+ tradeGame.name +"?";
    let btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "btn btn-outline-success");
    btn.innerHTML = "Conferma";
    const proposal = {
        tradeGame: tradeGame,
        wishGame: wishGame,
        publisher:publisher
    }
    btn.onclick = ()=>{confirmProposal(proposal) };
}

function confirmProposal(proposal : any){

    request

    fetch("/insertion/confirm")
}   

export default expandInsertion