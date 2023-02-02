import annunci from './annunci.html'

import creaAnnuncio from '../creaAnnuncio/creaAnnuncio.html'
import insertion from '../interfaces/insertion';
import expandInsertion from './annuncio'
import createInsertionPage from '../creaAnnuncio/creaAnnuncio'

let list: insertion[] = [];
let view: number = 6

export function createPage() {       /*Inizializza tutto ciò che serve alla pagina per funzionare */
    document.getElementById("selectAll").onclick = searchByAll;
    assignFilters();
    let btn = document.getElementById("addInsertion2");
    btn.onclick=()=>{
        document.getElementById("main").innerHTML=creaAnnuncio;
        createInsertionPage();
    }
    getAllInsertions();
    createPagination();
    showResults(1);

}


function searchByAll() {             /*La funziona del bottone che cerca tutti gli annunci senza filtri*/
    getAllInsertions();
    createPagination();
    showResults(1);
}


function assignFilters() {             /*Assegna le funzioni ai pulsanti nelle dropDownList da provare*/
    let generi = document.getElementById("genres").children
    for (let g of generi) {
        (g as HTMLButtonElement).onclick = () => {
            searchByGenre(g.id);
        }
    }
    let anni = document.getElementById("years").children
    for (let a of anni) {
        (a as HTMLButtonElement).onclick = () => {
            searchByYear(Number((a as HTMLButtonElement).id));
        }
    }

    let searchTitle = document.getElementById("searchTitle") as HTMLInputElement;
    searchTitle.onkeydown = (e) => {
        if (e.key == 'Enter') {
            searchByTitle(searchTitle.value)
        }
    }
}


export function searchByTitle(title: string) {
    getAllInsertions();
    let filteredList = []
    for (let element of list) {
        let titolo = element.title;
        let gameName = element.tradeGame.name
        if ((titolo.toUpperCase().includes(title.toUpperCase()))
            || (gameName.toUpperCase().includes(title.toUpperCase()))) {
            filteredList.push(element)
        }
    }
    list = [];
    list = filteredList
    createPagination();
    showResults(1);
}


function searchByGenre(genre: String) {
    console.log(genre);
    let filteredList = []
    for (let element of list) {
        for (let i = 0; i < element.tradeGame.genre.length; i++) {
            if (element.tradeGame.genre[i].genre == genre) {
                filteredList.push(element);
                i=element.tradeGame.genre.length;
            }
        }
    }
    list = [];
    list = filteredList
    createPagination();
    showResults(1);
}

function searchByYear(year: number) {
    console.log(year);
    let filteredList = [];
    for (let element of list) {
        if (element.tradeGame.year == year) {
            filteredList.push(element)
        }
    }
    list = [];
    list = filteredList
    createPagination();
    showResults(1);
}



function getAllInsertions() { /* Questa è solo una prova, scommentare la fetch più giù */
    list = [];

    const imageGioco1 = {
        link: "https://i.etsystatic.com/6277804/r/il/7df00e/697546340/il_1140xN.697546340_fivs.jpg"
    }

    const imageGioco2 = {
        link: "https://www.mobygames.com/images/covers/l/14445-the-legend-of-zelda-nes-front-cover.jpg"
    }

    const imageGioco3 = {
        link: "https://upload.wikimedia.org/wikipedia/it/b/b3/Pok%C3%A9mon_Giallo.png"
    }

    const imageGioco4 = {
        link: "https://metalgear.fandom.com/it/wiki/Metal_Gear?file=Metal_Gear.jpg"
    }

    const imageGallery1 = {
        link: "https://upload.wikimedia.org/wikipedia/it/thumb/7/77/Pikachu.png/1024px-Pikachu.png"
    }

    const imageGallery2 = {
        link: "https://www.pngmart.com/files/11/Frog-Meme-PNG-HD.png"
    }

    const imageGallery3 = {
        link: "https://media.licdn.com/dms/image/D5635AQHw3E5yYyXTLw/profile-framedphoto-shrink_800_800/0/1644518918606?e=1675620000&v=beta&t=x1RnXqWsDWAOVQUXGFujModXZhiGUQJu0a6FAsZN3Lo"
    }

    const gioco1 = {
        id: 1,
        name: "SuperMario",
        genre: [{genre: "PLATFORM"}],
        year: 1985,
        console: {console: "NES"},
        cover: imageGioco1
    }

    const gioco2 = {
        id: 2,
        name: "The Legend of Zelda",
        genre: [{genre: "AVVENTURA"}],
        year: 1986,
        console: {console: "NES"},
        cover: imageGioco2
    }

    const gioco3 = {
        id: 3,
        name: "Pokemon Giallo",
        genre: [{genre: "GDR"}],
        year: 1998,
        console: {console: "GAME_BOY_COLOR"},
        cover: imageGioco3
    }

    const gioco4 = {
        id: 4,
        name: "Metal Gear",
        genre: [{genre: "STEALTH"}],
        year: 1987,
        console: {console: "NES"},
        cover: imageGioco4
    }

    const publisherGioco1 = {
        userId: 1,
        username: "Pieroaffondo",
        name: "Pierino",
        surname: "Ciccino",
        email: "pierinocuoricino@amorino.com",
        rating: 666,
        videogames: [gioco1]
    }

    const insertion1: insertion = {
        approved: true,
        title: "Scambio SuperMario",
        description: "Scambio supermario xkè mi sono sekkato a giocarci",
        publisher: publisherGioco1,
        gallery: [imageGallery1, imageGallery2, imageGallery3],
        tradeGame: gioco1,
        wishList: [gioco2, gioco3, gioco4],
        outcome: "WIP",
        publicationDate: "29-01-2023"
    }


    for (let i = 0; i < 27; i++) {
        if (i != 17) {
            list.push(insertion1)
        } else {
            list.push(insertion1)
        }
    }

    /*QUESTO E' LA FUNZIONE GIUSTA NON FAMO CHE SBAGLIATE! */

    /*Fetch a backend con tutti gli annunci, aggiorna la lista list*/
    // list=[];
    // fetch('/TipoAnnunciCheneso')
    // .then((response) => response.json())
    // .then((data) => {
    //     for(let d of data){
    //         list.push(d);
    //     }
    // });
}

/*da qui in poi le funzioni servono a 
creare la pagina una volta cliccato  
sul bottone annunci e a ricaricarle*/

export function createPagination() {
    let size: number = list.length
    let tabs: number = Math.ceil(size / view);
    let pages = document.getElementById("pages");
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
            let allLi = document.getElementById("pages").children;
            for (let oneLi of allLi) {
                oneLi.setAttribute("class", "page-item");
                oneLi.removeAttribute("aria-current");
            }
            li.setAttribute("class", "page-item active");
            li.setAttribute("aria-current", "page");
            showResults(i);
        };
        btn.innerHTML = "" + (i);
        li.appendChild(btn);
        document.getElementById("pages").appendChild(li);
    }
}

function showResults(i: number) {
    let content = document.getElementById("insertionContent");
    content.innerHTML = "";
    let start = (i - 1) * view;
    let stop = (i * view) - 1;
    for (start; start <= stop; start++) {
        if (start >= list.length) {
            return;
        }

        if (!list[start].approved) {
            continue;
        }


        let col = document.createElement("div")
        col.setAttribute("class", "col-4 text-center");
        col.setAttribute("style", "background-color: rgba(0,0,0,0.2)");
        col.onmouseover=()=>{
            col.setAttribute("style", "background-color: rgba(0,0,0,0.6)");
        }
        col.onmouseout=()=>{
            col.setAttribute("style", "background-color: rgba(0,0,0,0.2)");
        }

        col.onclick = () => {
            expandInsertion(list[start])
        }
       
        let title = document.createElement("h1");
        let image = document.createElement("img");
        let description = document.createElement("h5");
        let game = document.createElement("h5");
        let genre = document.createElement("h5");
        let year = document.createElement("h5");
        let console = document.createElement("h5");
        let trades = document.createElement("h5");
        let date = document.createElement("h5");
        image.src = list[start].tradeGame.cover.link;
        image.setAttribute('class', 'mb-2 border border-3 border-info')
        image.width = 200;
        title.innerHTML = list[start].title
        title.setAttribute('class', 'mx-auto mt-2 rounded-top bg-light border-bottom border-3 border-primary');

        description.innerHTML = list[start].description;
        description.setAttribute('class', 'mb-0 border-top border-3 border-primary bg-light');

        game.innerHTML = list[start].tradeGame.name;
        game.setAttribute('class', 'mb-0 bg-light');

        
        for(let i= 0; i<list[start].tradeGame.genre.length; i++){
            genre.innerHTML += list[start].tradeGame.genre[i].genre + " ";
            genre.setAttribute('class', 'mb-0 bg-light');
            
        }
        year.innerHTML = "" + list[start].tradeGame.year;
        year.setAttribute('class', 'mb-0 bg-light');
        

        console.innerHTML = list[start].tradeGame.console.console;
        console.setAttribute('class', 'mb-0 bg-light');


        trades.innerHTML = "Accetterei Scambio con: " + list[start].wishList[0].name;
        trades.setAttribute('class', 'mb-0 bg-light');

        date.innerHTML= list[start].publicationDate;
        date.setAttribute('class', 'rounded-bottom border-bottom border-3 border-primary bg-light');

        col.append(title,image,description,game,genre,year,console,trades,date)
        content.append(col);

    }
}

export default createPage







