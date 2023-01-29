import annunci from './annunci.html'
import creaAnnuncio from '../creaAnnuncio/creaAnnuncio.html'
import insertion from '../interfaces/insertion'; 


let list: insertion[] = [];
let view: number = 5

export function createPage(){       /*Inizializza tutto ciò che serve alla pagina per funzionare */
    document.getElementById("selectAll").onclick = searchByAll;
    assignFilters();

    getAllInsertions();
    createPagination();
    showResults(1);

}


function searchByAll(){             /*La funziona del bottone che cerca tutti gli annunci senza filtri*/
    getAllInsertions();
    createPagination();
    showResults(1);
}


function assignFilters(){             /*Assegna le funzioni ai pulsanti nelle dropDownList da provare*/
    let generi = document.getElementById("genres").children 
      for(let g of generi){
          (g as HTMLButtonElement).onclick = ()=>{
            searchByGenre(g.id);
          } 
      }
    let anni = document.getElementById("years").children
        for(let a of anni){
            (a as HTMLButtonElement).onclick = ()=>{
                searchByYear(Number( (a as HTMLButtonElement).id));
            } 
        }
    
      let searchTitle = document.getElementById("searchTitle") as HTMLInputElement;
      searchTitle.onkeydown=(e)=>{
        if(e.key=='Enter'){
          searchByTitle(searchTitle.value)
        }
      }
      let searchButton = document.getElementById("searchButton");
      searchButton.onclick=()=>{
        searchByTitle(searchTitle.value)
      }
  }


function searchByTitle(title : string){
    let filteredList=[]
    for(let element of list){
        let titolo = element.title;
        let gameName = element.videogame.name
        if( (titolo.toUpperCase().includes(title.toUpperCase())) 
        ||  (gameName.toUpperCase().includes(title.toUpperCase())) ) {
            filteredList.push(element)
        }
    }
    list = [];
    list = filteredList
    createPagination();
    showResults(1);
} 


function searchByGenre(genre :String){
    console.log(genre);
    let filteredList=[]
    for(let element of list){
        if(element.videogame.genre==genre){
            filteredList.push(element)
        }
    }
    list = [];
    list = filteredList
    createPagination();
    showResults(1);
}

function searchByYear(year : number){
    console.log(year);
    let filteredList=[];
    for(let element of list){
        if(element.videogame.year==year){
            filteredList.push(element)
        }
    }
    list = [];
    list = filteredList
    createPagination();
    showResults(1);
}



function getAllInsertions(){ /* Questa è solo una prova, scommentare la fetch più giù */
    list=[];
    const gioco1={
        id: 1,
        name:"SuperMario",
        genre: "PLATFORM",
        year: 1985,
        console:"SuperNintendo"    
    }
    const imageGioco1={
        link:"https://i.etsystatic.com/6277804/r/il/7df00e/697546340/il_1140xN.697546340_fivs.jpg"
    }
    const publisherGioco1={
        userId: 1,
        username: "Pieroaffondo",
        name: "Pierino",
        surname: "Ciccino",
        email: "pierinocuoricino@amorino.com",
        rating: 666,
        videogames: [gioco1]
    }

    const insertion1 : insertion={
        approved:true,
        title:"Scambio SuperMario",
        description: "Scambio supermario xkè mi sono sekkato a giocarci",
        gallery:[imageGioco1],
        videogame:gioco1,
        publisher: publisherGioco1,
        outcome: "WIP"       
    }

    const gioco2={
        title:"Zelda",
        description: "Cavaliere Innamorato",
        genre: "AVVENTURA",
        year: "1986"
    }

    for(let i=0; i<27; i++){
    if(i!=17){
        list.push(insertion1)
    }else{
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

function createPagination(){
    let size:number = list.length
    let tabs:number = Math.ceil(size/view);
    let pages = document.getElementById("pages");
    pages.innerHTML="";
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

function showResults(i:number){
        let content = document.getElementById("insertionContent");
        content.innerHTML="";
        let start = (i-1)*view;
        let stop = (i*view)-1;
        for(start; start<=stop; start++){
            if (start >= list.length) {
                return;
            }

            if (!list[start].approved){
                continue;
            }
                let li = document.createElement("li")
                li.setAttribute('class', 'list-group-item');
                li.setAttribute('onmouseover', "setAttribute('class', 'list-group-item active')");
                li.setAttribute('onmouseout', "setAttribute('class', 'list-group-item')");
                let title = document.createElement("h1");
                let image = document.createElement("img");
                let description=document.createElement("p");
                let game = document.createElement("p");
                let genre = document.createElement("p");
                let year=document.createElement("p");
                let console = document.createElement("p");
                image.src=list[start].gallery[0].link;
                image.width=200;
                title.innerHTML=list[start].title;
                description.innerHTML=list[start].description;
                game.innerHTML=list[start].videogame.name;
                genre.innerHTML=list[start].videogame.genre;
                year.innerHTML=""+list[start].videogame.year;
                console.innerHTML=list[start].videogame.console; 
                /* sarebbe il caso di aggiungere la console a videogames magari con una enum */
                li.appendChild(title);
                li.appendChild(image);
                li.appendChild(description);
                li.appendChild(game);
                li.appendChild(genre);
                li.appendChild(year);
                li.appendChild(console);
                content.append(li);
            
        }
    }

export default createPage







