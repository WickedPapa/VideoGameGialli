import annunci from './annunci.html'
import annuncio from './annuncio.html'
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
        let gameName = element.tradeGame.name
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
        if(element.tradeGame.genre==genre){
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
        if(element.tradeGame.year==year){
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

    const imageGioco1={
        link:"https://i.etsystatic.com/6277804/r/il/7df00e/697546340/il_1140xN.697546340_fivs.jpg"
    }
    
    const imageGioco2={
        link:"https://www.mobygames.com/images/covers/l/14445-the-legend-of-zelda-nes-front-cover.jpg"
    }
    
    const imageGallery1={
        link:"https://upload.wikimedia.org/wikipedia/it/thumb/7/77/Pikachu.png/1024px-Pikachu.png"
    }
    
    const imageGallery2={
        link:"https://www.pngmart.com/files/11/Frog-Meme-PNG-HD.png"
    }

    const imageGallery3={
        link:"https://media.licdn.com/dms/image/D5635AQHw3E5yYyXTLw/profile-framedphoto-shrink_800_800/0/1644518918606?e=1675620000&v=beta&t=x1RnXqWsDWAOVQUXGFujModXZhiGUQJu0a6FAsZN3Lo"
    }

    const gioco1={
        id: 1,
        name:"SuperMario",
        genre: "PLATFORM",
        year: 1985,
        console:"NES",
        cover: imageGioco1
    }
    
    const gioco2={
        id: 2,
        name:"The Legend of Zelda",
        genre: "AVVENTURA",
        year: 1986,
        console:"NES",
        cover: imageGioco2
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
        publisher: publisherGioco1,
        gallery:[imageGallery1,imageGallery2,imageGallery3],
        tradeGame:gioco1,
        wishList:[gioco2],
        outcome: "WIP",
        publicationDate: "29-01-2023"       
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
                li.onclick=()=>{
                    expandInsertion(list[start])
                }
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
                let trades = document.createElement("p");
                image.src=list[start].tradeGame.cover.link;
                image.width=200;
                title.innerHTML=list[start].title;
                description.innerHTML=list[start].description;
                game.innerHTML=list[start].tradeGame.name;
                genre.innerHTML=list[start].tradeGame.genre;
                year.innerHTML=""+list[start].tradeGame.year;
                console.innerHTML=list[start].tradeGame.console; 
                trades.innerHTML="Accetterei Scambio con: "+list[start].wishList[0].name;
                li.appendChild(title);
                li.appendChild(image);
                li.appendChild(description);
                li.appendChild(game);
                li.appendChild(genre);
                li.appendChild(year);
                li.appendChild(console);
                li.appendChild(trades);
                content.append(li);
            
        }
    }


function expandInsertion(insertion :insertion){
    
    /*Imposto la pagina principale con il template del singolo annuncio */
    let main= document.getElementById("main");
    main.innerHTML=annuncio;

    /*Creo un pulsante per tornare alla list annunci e il titolo */
    let button = document.createElement("button");
    button.setAttribute("class", "btn btn-success");
     button.innerHTML="Indietro"
     button.onclick=()=>{
        document.getElementById("main").innerHTML = annunci;
        createPage();
     }
    let back = document.getElementById("back") 
    back.append(button);

    let title = document.createElement("h1");
    title.innerHTML=insertion.title;
    back.append(title);

    

    /*Imposto il carosello delle immagini utente */
    let indicator = document.getElementById("indicator")
    for(let i=0; i<insertion.gallery.length; i++){
        let btn = document.createElement("button");
        btn.setAttribute("data-bs-target", "#imageSlider");
        btn.setAttribute("data-bs-slide-to", ""+i);
        if(i==0){
        btn.setAttribute("class", "active");  
        btn.setAttribute("aria-current", "true");  
        }
        btn.setAttribute("aria-label", "Slide "+(i+1));
        indicator.append(btn);
    }
    let inner = document.getElementById("inner")

    for(let i=0; i<insertion.gallery.length; i++){
        let div = document.createElement("div");
        if(i==0){
            div.setAttribute("class", "carousel-item active")
        }else{
            div.setAttribute("class", "carousel-item")
        }
        let img = document.createElement("img");
        img.src=insertion.gallery[i].link;
        img.width=400;
        img.setAttribute("class", "d-block w-100");
        img.alt="Gallery Image"+(i+1)
        div.append(img);
        inner.append(div)
    }
   
    /*Imposto l'immagine delle gioco scambiato*/

    let gameImage = document.createElement("img");
    gameImage.src=insertion.tradeGame.cover.link;
    gameImage.width=200;
    document.getElementById("givedGame").append(gameImage);

    /*Imposto il carosello delle giochi con cui effettuare lo scambio */
    
    let indicatorG = document.getElementById("indicatorG")
    for(let i=0; i<insertion.wishList.length; i++){
        let btn = document.createElement("button");
        btn.setAttribute("data-bs-target", "#imageSlider");
        btn.setAttribute("data-bs-slide-to", ""+i);
        if(i==0){
        btn.setAttribute("class", "active");  
        btn.setAttribute("aria-current", "true");  
        }
        btn.setAttribute("aria-label", "Slide "+(i+1));
        indicatorG.append(btn);
    }
    let innerG = document.getElementById("innerG")

    for(let i=0; i<insertion.wishList.length; i++){
        let div = document.createElement("div");
        if(i==0){
            div.setAttribute("class", "carousel-item active")
        }else{
            div.setAttribute("class", "carousel-item")
        }
        let img = document.createElement("img");
        img.src=insertion.wishList[i].cover.link;
        img.width=400;
        img.setAttribute("class", "d-block w-100");
        img.alt="Gallery Image"+(i+1)
        div.append(img);
        innerG.append(div)
    }


}

export default createPage







