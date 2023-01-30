import home from './home.html'
import insertion from '../interfaces/insertion';
import createInsertion from '../creaAnnuncio/creaAnnuncio';

let list: insertion[] = [];

export function createHome(){
    let main = document.getElementById('main');
    main.innerHTML += home;
    let head = document.getElementsByTagName('head')[0];
    head.innerHTML += '<link rel="stylesheet" href="./home.css">';
    
    getAllInsertions();
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
        genre: "PLATFORM",
        year: 1985,
        console: "NES",
        cover: imageGioco1
    }

    const gioco2 = {
        id: 2,
        name: "The Legend of Zelda",
        genre: "AVVENTURA",
        year: 1986,
        console: "NES",
        cover: imageGioco2
    }

    const gioco3 = {
        id: 3,
        name: "Pokemon Giallo",
        genre: "GDR",
        year: 1998,
        console: "GAME_BOY_COLOR",
        cover: imageGioco3
    }

    const gioco4 = {
        id: 4,
        name: "Metal Gear",
        genre: "STEALTH",
        year: 1987,
        console: "NES",
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
    }


export default createHome;

/*
async function gettitle(title: string):{
    const response = await fetch()
    const data = await response.json();
    return data;

}
*/