import home from './home.html'
import insertion from '../interfaces/insertion';
//import createInsertion from '../creaAnnuncio/creaAnnuncio';

let list: insertion[] = [];

export function createHome(){
    let main = document.getElementById('main');
    main.innerHTML += home;
    let head = document.getElementsByTagName('head')[0];
    head.innerHTML += '<link rel="stylesheet" href="./home.css">';
    
    //getAllInsertions();
    createItemCarousel();
        
}

function createItemCarousel(){
        
    let carInner = document.getElementsByClassName("carousel-inner")[0];
    
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < list[i].gallery.length; j++){
        let clCarouselIt = document.createElement('div');
        if(i == 0){
            clCarouselIt.setAttribute('class', 'carousel-item active');
        }else{
            clCarouselIt.setAttribute('class', 'carousel-item');
            }

        let img = document.createElement('img');
        img.setAttribute('src', list[i].gallery[j].link);
        let clCard = document.createElement('div');
        clCard.setAttribute('class', 'card text-bg-secondary');
        let carBody = document.createElement('div');
        carBody.setAttribute('class', 'card-body');
        let title = document.getElementById('title');
        title.setAttribute('class', 'card-title');
        title.innerHTML = list[i].tradeGame.name;
        let desc = document.createElement('p');
        desc.setAttribute('class', 'card-text');
        desc.innerHTML =
        "Genere: " + list[i].tradeGame.genre + " "
        + "Anno: " + list[i].tradeGame.year + " "
        + "Console: " + list[i].tradeGame.console + "<br>"
        +"Descrizione:";
        let goAnn = document.createElement('a');
        goAnn.setAttribute('href', "#");
        goAnn.setAttribute('class', 'btn btn-primary');
        goAnn.innerHTML = 'Vai all annuncio';

        carInner.appendChild(clCarouselIt);
            clCarouselIt.appendChild(clCard);
                clCard.appendChild(img);
                clCard.appendChild(carBody);
                    carBody.appendChild(title);
                    carBody.appendChild(desc);
                    carBody.appendChild(goAnn);
        }
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