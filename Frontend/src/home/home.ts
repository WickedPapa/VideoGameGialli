import home from './home.html'
import {insertion} from '../interfaces/insertion';
import annunci from '../annunci/annunci.html';
import createPage, { searchByTitle } from "../annunci/annunci";
import { createPagination } from '../annunci/annunci';
import creaAnnuncio from '../creaAnnuncio/creaAnnuncio.html'
import createInsertionPage from "../creaAnnuncio/creaAnnuncio";
import expandInsertion from '../annunci/annuncio';
import annuncio from '../annunci/annuncio.html';
import { assignFilters } from '../annunci/annunci'

let homeList: insertion[] = [];


export  function createHome(){
    let main = document.getElementById('main');
    main.innerHTML = home;
   

    document.getElementById("insertionsCard").onclick = () => {
        document.getElementById("main").innerHTML = annunci;
        createPage();
    };

    document.getElementById("insertCard").onclick = () => {
        document.getElementById("main").innerHTML = creaAnnuncio;
        createInsertionPage();
    };

    document.getElementById("searchButtonTitle").onclick =  () => {
        let keyword = (document.getElementById("searchTitle") as HTMLInputElement).value;
        if(keyword != ""){
            document.getElementById("main").innerHTML = annunci;
            assignFilters()
            searchByTitle(keyword)     
        }
    }

    document.getElementById("searchTitle").onkeydown = (e) => {
        let keyword = document.getElementById("searchTitle") as HTMLInputElement;
        if(e.key == "Enter" && keyword.value!= ""){
            document.getElementById("main").innerHTML = annunci;
            assignFilters()
            searchByTitle(keyword.value)
           
         
           
        }

    }

    homeList=[];
    fetch('/insertion')
    .then((response) => response.json())
    .then((data) => {
        for(let d of data){
            homeList.push(d);
        }
        createItemCarousel();  
    })
    }


function createItemCarousel(){

for(let i = homeList.length-1; i > homeList.length-5 && i >= 0; i--){
    let carInner = document.getElementById('innerCarouselHome');
    let clCarouselIt = document.createElement('div');

     
    if(i == homeList.length-1){
        clCarouselIt.setAttribute('class', 'carousel-item active');
    }else{
        clCarouselIt.setAttribute('class', 'carousel-item');
        }

    let img = document.createElement('img');
    img.setAttribute('src', homeList[i].tradeGame.cover.link);
    img.setAttribute('id', 'imgCard');
    img.setAttribute('class', 'mt-2');
    img.setAttribute('style', 'height:250px;width:auto');
    let annTitle = document.createElement('h1');
    annTitle.setAttribute('class', 'card-title border-top border-2 border-info');
    annTitle.innerHTML = homeList[i].title;
    let clCard = document.createElement('div');
    clCard.setAttribute('class', 'card bg-secondary');
    clCard.setAttribute('id', 'annCard');
    let carBody = document.createElement('div');
    carBody.setAttribute('class', 'card-body');
    let title = document.createElement('h5');
    title.setAttribute('class', 'card-subtitle');
    title.innerHTML = homeList[i].tradeGame.name;
    let desc = document.createElement('p');
    desc.setAttribute('class', 'card-text');
    for (let i = 0; i < homeList[i].tradeGame.genre.length; i++) {
        desc.innerHTML += homeList[i].tradeGame.genre[i].genre + " "
    }
    desc.innerHTML += "<br>"
    + "Anno: " + homeList[i].tradeGame.year + " "
    + "Console: " + homeList[i].tradeGame.console.console + "<br>"
    +"Descrizione:";
    let goAnn = document.createElement('a');
    let imgGoAnn = document.createElement('img');
    goAnn.setAttribute('href', "#");
    imgGoAnn.setAttribute('class', 'p-0 btn dropdown-toggle" type="button');
    imgGoAnn.src = "./img/button/goBtn.png";
    goAnn.appendChild(imgGoAnn);
    imgGoAnn.setAttribute('style', 'border:none;float:center;image-rendering: pixelated;width: 10%;height:auto;');
    goAnn.append(imgGoAnn);
    goAnn.onclick = () => {
        document.getElementById('main').innerHTML = annuncio;
        expandInsertion(homeList[i]);
    }

    carInner.appendChild(clCarouselIt);
            clCarouselIt.appendChild(clCard);
                clCard.append(img,carBody);
                    carBody.append(annTitle,title,desc,goAnn);
    }
}
export default createHome;

/*
async function gettitle(title: string):{
    const response = await fetch()
    const data = await response.json();
    return data;

}
*/