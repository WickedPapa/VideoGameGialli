import creaAnnuncio from '../creaAnnuncio/creaAnnuncio.html'
import insertion from '../interfaces/insertion';
import expandInsertion from './annuncio'
import createInsertionPage from '../creaAnnuncio/creaAnnuncio'

let list: insertion[] = [];
let view: number = 6

export function createPage2() {       /*Inizializza tutto ciò che serve alla pagina per funzionare */

    fetch('/insertion')
    .then((response) => response.json())
    .then((data) => {
        for(let d of data){
            list.push(d);
        }

        document.getElementById("selectAll2").onclick = searchByAll2;
        assignFilters2();
        document.getElementById("createCategory").onclick = createCategory;
        let btn = document.getElementById("addInsertion");
        btn.onclick=()=>{
            document.getElementById("main").innerHTML=creaAnnuncio;
            createInsertionPage();
        }
        //createInsertion();
        //getAllInsertions2();
        createPagination2();
        showResults2(1);


    });

   

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
    
    let searchTitle = document.getElementById("searchTitle2") as HTMLInputElement;
    searchTitle.onkeydown = (e) => {
        if (e.key == 'Enter') {
            searchByTitle2(searchTitle.value)
        }
    }

    let searchButton = document.getElementById("searchButton2");
    searchButton.onclick = () => {
        searchByTitle2(searchTitle.value)
    }

    /*let searchTitle = document.getElementById("searchTitle2") as HTMLInputElement;
    searchTitle.onkeydown = (e) => {
        if (e.key == 'Enter') {
            searchByTitle2(searchTitle.value)
        }
    }
    let searchButton = document.getElementById("searchButton2");
    searchButton.onclick = () => {
        searchByTitle2(searchTitle.value)
    }*/
}


function searchByTitle2(title: string) {
    getAllInsertions2();
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


function getAllInsertions2(){
    fetch('/insertion')
    .then((response) => response.json())
    .then((data) => {
        for(let d of data){
            list.push(d);
        }
    });
}



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


        let col = document.createElement("div")
        let juan = list[start].title  //"" + start;
        //Juan è l'id dei bottoni, sarà l'id delle inserzioni quando si implementeranno gli annunci dal db
        let isOnCheckedListResult: boolean = false;

        for(let element of checkedList){
            if(juan==element){
                isOnCheckedListResult=true;
            }
        }

        
        col.setAttribute("class", 'list-group-item');
        if(isOnCheckedListResult){
            col.setAttribute("style", "background-color: rgba(0,0,0,0.6)");
        } else {
            col.setAttribute("style", "background-color: rgba(0,0,0,0.2)");
            col.setAttribute('onmouseover', 'setAttribute("style", "background-color: rgba(0,0,0,0.6)")');
            col.setAttribute('onmouseout', 'setAttribute("style", "background-color: rgba(0,0,0,0.2)")');
        }
        
        col.setAttribute("id", juan);

        col.onclick = () => {
            addInsertionToList(juan)
        }
       
        let title = document.createElement("h2");
        title.setAttribute('style','font-weight: bold;');
        let description = document.createElement("p");
        title.innerHTML = list[start].title;
        description.innerHTML = "" + list[start].tradeGame.name;
        for(let i= 0; i<list[start].tradeGame.genre.length; i++){
            description.innerHTML += ", " + list[start].tradeGame.genre[i].genre + "";
        }
        description.innerHTML += ", " + list[start].tradeGame.year;

        description.innerHTML += ", " + list[start].tradeGame.console.console;

        col.append(title,description)
        content.append(col);

    }

    console.log(checkedList);

}

export default createPage2




let checkedList: string[] = [];

export function addInsertionToList(ins: string){

    let isOnCheckedList: boolean = false;

    for(let element of checkedList){
        if(ins==element){
            isOnCheckedList = true;
            checkedList.splice(checkedList.indexOf(element), 1);
        }
    }

    if(isOnCheckedList){
        document.getElementById(ins).setAttribute("style", "background-color: rgba(0,0,0,0.2)");
        document.getElementById(ins).setAttribute('onmouseover', 'setAttribute("style", "background-color: rgba(0,0,0,0.6)")');
        document.getElementById(ins).setAttribute('onmouseout', 'setAttribute("style", "background-color: rgba(0,0,0,0.2)")');
    } else {
        checkedList.push(ins);
        document.getElementById(ins).removeAttribute('onmouseover');
        document.getElementById(ins).removeAttribute('onmouseout');
        document.getElementById(ins).setAttribute("style", "background-color: rgba(0,0,0,0.6)");
    }

}

export function createCategory(){
    console.log(checkedList)
    
    const obj={
        description: (document.getElementById("categoryName") as HTMLInputElement).value,
        insertionsTitle: checkedList,
    }
    

    const request = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
    }

    fetch("/category", request)
    .then((response)=>response.json())
    .then((data)=>{
        if(data>0){
            alert("Categoria Creata")
        }else{
            alert("E' FINIIIITAA!!")
        }
    })

    //Prende il valore della casella di testo e lo mette come nome della categoria
   
    
    //TODO: LA FEEEEEEEEEEEEETCH!!!
    //TODO: inserisci gli elementi di checkedList in una categoria nel DB
    //TODO: Metodo da fare per inserire gli elementi nel database haha
    console.log("Categoria creata più o meno");

    //Svuota il valore della casella di testo e la lista

    checkedList = [];

    //Reimposta la pagina a come stava prima
    createPagination2();
    showResults2(1);

}





