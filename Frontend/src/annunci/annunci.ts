import annunci from './annunci.html'

import creaAnnuncio from '../creaAnnuncio/creaAnnuncio.html'
import insertion from '../interfaces/insertion';
import expandInsertion from './annuncio'
import createInsertionPage from '../creaAnnuncio/creaAnnuncio'
import showProfile from '../profiloUtente/profile';
import category from '../interfaces/category';
let categoryList: category[] = [];
let categories: string[] = [];
let fullList: insertion[] = [];
let list: insertion[] = [];
let filteredList: insertion[] = [];
let view: number = 6
let type: string;
let genres: string[];
let years: number[];
let consolles: string[];
export async function createPage() {       /*Inizializza tutto ciò che serve alla pagina per funzionare */

    fetch("/whoIsLogged")
        .then((response) => response.json())
        .then((data) => {
            if (data == "ADMIN" || data == "USER") {
                document.getElementById("addInsertion2").removeAttribute("hidden");
                let btn = document.getElementById("addInsertion2");
                btn.onclick = () => {
                    document.getElementById("main").innerHTML = creaAnnuncio;
                    createInsertionPage();
                }

            } else {
                document.getElementById("addInsertion2").setAttribute("hidden", "true");
                type = "GUEST"
            }

            list = [];
            fetch('/insertion')
                .then((response) => response.json())
                .then((data) => {
                    for (let d of data) {
                        if (!d.approved || d.outcome != "WIP") {
                            fullList.push(d);
                        } else {
                            fullList.push(d);
                            list.push(d);
                        }
                    }

                    fetch("/category")
                        .then((response) => response.json())
                        .then((data) => {
                            for (let c of data) {
                                categoryList.push(c);
                            }

                            createPagination();
                            showResults(1);
                            assignFilters();

                        })
                })
        })
}

















async function getAllInsertions() {

    await fetch('/insertion')
        .then((response) => response.json())
        .then((data) => {
            list = [];
            for (let d of data) {
                list.push(d);
            }
        });
}





async function showResults(i: number) {

    let content = document.getElementById("insertionContent");
    let content2 = document.getElementById("insertionContent2");
    content.innerHTML = "";
    let start = (i - 1) * view;
    let stop = (i * view) - 1;
    let startCopy = start;
    for (start; start <= stop; start++) {
        if (start >= list.length) {
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
        let insertionOne = list[start];
        col.onclick = () => {
            expandInsertion(insertionOne)
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
        let div = document.createElement("div");
        div.setAttribute("style", "height:37%;");
        div.setAttribute("class", "rounded-top bg-light border-bottom border-3 border-primary rounded-bottom bg-light");
        image.src = list[start].tradeGame.cover.link;
        image.setAttribute('class', 'mb-2 border border-3 border-info')
        image.setAttribute('style', 'height:200px;width:auto;')
        title.innerHTML = '<b>' + list[start].title + '</b>';

        title.setAttribute('class', 'mx-auto mt-2 rounded-top bg-light border-bottom border-3 border-primary');
        title.setAttribute('style', 'height: 20%');
        description.innerHTML = "<b>"+list[start].description+"</b>";
        description.setAttribute('class', 'mb-0');

        game.innerHTML = "<b>"+list[start].tradeGame.name+"</b>";
        game.setAttribute('class', 'mb-0 bg-light');


        for (let i = 0; i < list[start].tradeGame.genre.length; i++) {
            genre.innerHTML += list[start].tradeGame.genre[i].genre + " ";
            genre.setAttribute('class', 'mb-0 bg-light');

        }
        year.innerHTML = "" + list[start].tradeGame.year;
        year.setAttribute('class', 'mb-0 bg-light');


        console.innerHTML = list[start].tradeGame.console.console;
        console.setAttribute('class', 'mb-0 bg-light');


        trades.innerHTML = "Accetterei Scambio con: <b>" + list[start].wishList[0].name+"</b>";
        trades.setAttribute('class', 'mb-0 bg-light');

        date.innerHTML = list[start].publicationDate;
        div.append(game, description, trades, date);
        col.append(title, image, div);

        if(start>=startCopy && start<=(stop/2)){
            content.append(col);
        }else{
            content2.append(col);
        }

        

    }
}

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



function setAllCategories() {
    categories = [];
    for (let i = 0; i < categoryList.length; i++) {
        if (!(categories.includes(categoryList[i].descriptor))) {
            categories.push(categoryList[i].descriptor)
            let ul = document.getElementById("categories");
            let li = document.createElement("li");
            li.id = "" + categoryList[i].id;
            let btn = document.createElement("button");
            btn.setAttribute("class", "dropdown-item");
            btn.innerHTML = categoryList[i].descriptor;
            btn.onclick = () => {
                searchByCategory(Number(li.id));
            }
            ul.append(li);
            li.append(btn);
        }
    }

}


function setAllConsolles() {
    consolles = []
    for (let i = 0; i < list.length; i++) {
        if (!(consolles.includes(list[i].tradeGame.console.console))) {
            consolles.push(list[i].tradeGame.console.console)
            let ul = document.getElementById("consolles");
            let li = document.createElement("li");
            li.id = list[i].tradeGame.console.console;
            let btn = document.createElement("button");
            btn.setAttribute("class", "dropdown-item");
            btn.innerHTML = list[i].tradeGame.console.console;
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
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[i].tradeGame.genre.length; j++) {
            if (!(genres.includes(list[i].tradeGame.genre[j].genre))) {
                genres.push(list[i].tradeGame.genre[j].genre)
                let ul = document.getElementById("genres");
                let li = document.createElement("li");
                li.id = list[i].tradeGame.genre[j].genre;
                let btn = document.createElement("button");
                btn.setAttribute("class", "dropdown-item");
                btn.innerHTML = list[i].tradeGame.genre[j].genre;
                btn.onclick = () => {
                    searchByGenre(li.id);
                }
                ul.append(li);
                li.append(btn);
            }
        }
    }
}


function setAllYears() {
    years = []
    for (let i = 0; i < list.length; i++) {
        if (!(years.includes(list[i].tradeGame.year))) {
            years.push(list[i].tradeGame.year)
            let ul = document.getElementById("years");
            let li = document.createElement("li");
            li.id = "" + list[i].tradeGame.year;
            let btn = document.createElement("button");
            btn.setAttribute("class", "dropdown-item");
            btn.innerHTML = "" + list[i].tradeGame.year;
            btn.onclick = () => {
                searchByYear(Number(li.id))

            }
            ul.append(li);
            li.append(btn);
        }
    }
}


async function searchByAll() {             /*La funziona del bottone che cerca tutti gli annunci senza filtri*/
    list = [];
    fetch('/insertion')
        .then((response) => response.json())
        .then((data) => {
            for (let d of data) {
                list.push(d);
            }
            setAllGenres();
            createPagination();
            showResults(1);
        });

}


function searchByCategory(insertionId: number) {
    filteredList = [];
    let chosenCategory: category;
    for (let element of categoryList) {
        if (element.id == insertionId) {
            chosenCategory = element
        }
    }
    for (let i = 0; i < chosenCategory.list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (list[j].id == chosenCategory.list[i].id) {
                filteredList.push(list[j])
            }
        }
    }
    list = [];
    list = filteredList
    createPagination();
    showResults(1).then(() => {
        getAllInsertions();
    })


}

export function searchByTitle(title: string) {
    filteredList = []
    for (let element of list) {
        let gameName = element.tradeGame.name
        let insertionTitle = element.title
        if ((gameName.toUpperCase().includes(title.toUpperCase()))
            || (insertionTitle.toUpperCase().includes(title.toUpperCase()))) {
            filteredList.push(element)
        }
    }
    list = [];
    list = filteredList
    createPagination();
    showResults(1).then(() => {
        getAllInsertions();
    })


}


function searchByGameConsolle(console: string) {
    filteredList = []
    for (let element of list) {

        if (element.tradeGame.console.console == console) {
            filteredList.push(element);
        }

    }
    list = [];
    list = filteredList
    createPagination();
    showResults(1);
    getAllInsertions();
}


function searchByGenre(genre: String) {
    filteredList = []
    for (let element of list) {
        for (let i = 0; i < element.tradeGame.genre.length; i++) {
            if (element.tradeGame.genre[i].genre == genre) {
                filteredList.push(element);
                i = element.tradeGame.genre.length;
            }
        }
    }
    list = [];
    list = filteredList
    createPagination();
    showResults(1);
    getAllInsertions();
}


function searchByYear(year: number) {
    filteredList = []
    for (let element of list) {
        if (element.tradeGame.year == year) {
            filteredList.push(element)
        }
    }
    list = [];
    list = filteredList
    createPagination();
    showResults(1);
    getAllInsertions();
}




export function assignFilters() {

    let allGames = document.getElementById("selectAll")
    allGames.onclick = () => {
        searchByAll();
    }

    setAllCategories();

    setAllConsolles();

    setAllGenres();

    setAllYears();

    let searchTitle = document.getElementById("searchTitleInsertions") as HTMLInputElement;
    searchTitle.onkeydown = (e) => {
        if (e.key == 'Enter') {
            searchByTitle(searchTitle.value)
        }
    }
}







export default createPage







