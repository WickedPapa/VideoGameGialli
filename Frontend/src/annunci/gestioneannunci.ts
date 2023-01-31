import gestioneannunci from './gestioneannunci.html'

import creaAnnuncio from '../creaAnnuncio/creaAnnuncio.html'
import insertion from '../interfaces/insertion';
import expandInsertion from './annuncio'
import createInsertion from '../creaAnnuncio/creaAnnuncio'

let list: insertion[] = [];
let view: number = 5

export function createPage2() {       /*Inizializza tutto ciò che serve alla pagina per funzionare */
    document.getElementById("selectAll2").onclick = searchByAll2;
    assignFilters2();
    createInsertion();
    getAllInsertions2();
    createPagination2();
    showResults2(1);

}


function searchByAll2() {             /*La funziona del bottone che cerca tutti gli annunci senza filtri*/
    getAllInsertions2();
    createPagination2();
    showResults2(1);
}


function assignFilters2() {             /*Assegna le funzioni ai pulsanti nelle dropDownList da provare*/
    let generi = document.getElementById("genres2").children
    for (let g of generi) {
        (g as HTMLButtonElement).onclick = () => {
            searchByGenre2(g.id);
        }
    }
    let anni = document.getElementById("years2").children
    for (let a of anni) {
        (a as HTMLButtonElement).onclick = () => {
            searchByYear2(Number((a as HTMLButtonElement).id));
        }
    }

    let searchTitle = document.getElementById("searchTitle") as HTMLInputElement;
    searchTitle.onkeydown = (e) => {
        if (e.key == 'Enter') {
            searchByTitle2(searchTitle.value)
        }
    }
    let searchButton = document.getElementById("searchButton2");
    searchButton.onclick = () => {
        searchByTitle2(searchTitle.value)
    }
    let categoryButton = document.getElementById("createCategory");
    categoryButton.onclick = () => {
        createCategory();
    }
}


function searchByTitle2(title: string) {
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
    createPagination2();
    showResults2(1);
}


function searchByGenre2(genre: String) {
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
    createPagination2();
    showResults2(1);
}

function searchByYear2(year: number) {
    console.log(year);
    let filteredList = [];
    for (let element of list) {
        if (element.tradeGame.year == year) {
            filteredList.push(element)
        }
    }
    list = [];
    list = filteredList
    createPagination2();
    showResults2(1);
}



function getAllInsertions2() { /* Questa è solo una prova, scommentare la fetch più giù */
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

    const insertion2: insertion = {
        approved: true,
        title: "Scambio Zelda",
        description: "Scambio zelda xkè mi sono sekkato a giocarci",
        publisher: publisherGioco1,
        gallery: [imageGallery1, imageGallery2, imageGallery3],
        tradeGame: gioco2,
        wishList: [gioco1, gioco3, gioco4],
        outcome: "WIP",
        publicationDate: "30-01-2023"
    }


    for (let i = 0; i < 27; i++) {
        if (i != 2) {
            list.push(insertion1)
        } else {
            list.push(insertion2)
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

function createPagination2() {
    let size: number = list.length
    let tabs: number = Math.ceil(size / view);
    let pages = document.getElementById("pages2");
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
            let allLi = document.getElementById("pages2").children;
            for (let oneLi of allLi) {
                oneLi.setAttribute("class", "page-item");
                oneLi.removeAttribute("aria-current");
            }
            li.setAttribute("class", "page-item active");
            li.setAttribute("aria-current", "page");
            showResults2(i);
        };
        btn.innerHTML = "" + (i);
        li.appendChild(btn);
        document.getElementById("pages2").appendChild(li);
    }
}

function showResults2(i: number) {
    let content = document.getElementById("insertionContent2");
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
        let li = document.createElement("li")
        li.onclick = () => {addInsertionToList(list[start])};
        li.setAttribute('class', 'list-group-item');
        //gli id devono essere diversi
        li.setAttribute('id', list[start].title);
        li.setAttribute('onmouseover', "setAttribute('class', 'list-group-item active')");
        li.setAttribute('onmouseout', "setAttribute('class', 'list-group-item')");
        let title = document.createElement("h2");
        let description = document.createElement("p");
        title.innerHTML = list[start].title;
        description.innerHTML = "" + list[start].tradeGame.name;
        for(let i= 0; i<list[start].tradeGame.genre.length; i++){
            description.innerHTML += ", " + list[start].tradeGame.genre[i].genre + "";
        }
        description.innerHTML += ", " + list[start].tradeGame.year;

        description.innerHTML += ", " + list[start].tradeGame.console.console;

        li.appendChild(title);
        li.appendChild(description);
        content.append(li);

        console.log("ho appeso" + start);

    }

}

export default createPage2

let checkedList: insertion[] = [];

export function addInsertionToList(insertion: insertion){

    /*TODO: Mettere l'inserzione in una lista, impostare il bottone
    blu e poi al click del bottone 'crea categoria' inserire la lista in
    una categoria e svuotare la lista */

    let isOnCheckedList: boolean = false;

    for(let element of checkedList){
        if(insertion==element){
            isOnCheckedList = true;
            checkedList.splice(checkedList.indexOf(element), 1);
        }
    }

    //gli id devono essere diversi dal titolo

    let idElement = `${insertion.title}`;

    if(isOnCheckedList){
        document.getElementById(idElement).removeAttribute('class');
        document.getElementById(idElement).setAttribute('class', 'list-group-item');
        document.getElementById(idElement).setAttribute('onmouseover', "setAttribute('class', 'list-group-item active')");
        document.getElementById(idElement).setAttribute('onmouseout', "setAttribute('class', 'list-group-item')");
    } else {
        checkedList.push(insertion);
        document.getElementById(idElement).removeAttribute('onmouseover');
        document.getElementById(idElement).removeAttribute('onmouseout');
        document.getElementById(idElement).setAttribute('class', 'list-group-item active');
    }

}

export function createCategory(){

    //TODO: inserisci gli elementi di checkedList in una categoria nel DB

    //Metodo da fare haha

    //Svuota checkedList e rimette i bottoni a posto
    for(let element of checkedList){
        addInsertionToList(element);
    }

    checkedList = [];

}





