import home from './home.html'
import insertion from '../interfaces/insertion';
//import createInsertion from '../creaAnnuncio/creaAnnuncio';

let list: insertion[] = [];

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
        link: "https://static.wikia.nocookie.net/metalgear/images/e/e1/Metal_Gear.jpg"
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
        gallery: [gioco1.cover, imageGallery1, imageGallery2, imageGallery3],
        tradeGame: gioco1,
        wishList: [gioco2, gioco3, gioco4],
        outcome: "WIP",
        publicationDate: "29-01-2023"
    }

    const insertion2: insertion = {
        approved: true,
        title: "Scambio pacman",
        description: "Scambio supermario xkè mi sono sekkato a giocarci",
        publisher: publisherGioco1,
        gallery: [gioco2.cover, imageGallery2, imageGallery2, imageGallery3],
        tradeGame: gioco2,
        wishList: [gioco2, gioco3, gioco4],
        outcome: "WIP",
        publicationDate: "29-01-2023"
    }

    const insertion3: insertion = {
        approved: true,
        title: "scambio codesto",
        description: "Scambio supermario xkè mi sono sekkato a giocarci",
        publisher: publisherGioco1,
        gallery: [gioco3.cover, imageGallery3, imageGallery2, imageGallery3],
        tradeGame: gioco3,
        wishList: [gioco2, gioco3, gioco4],
        outcome: "WIP",
        publicationDate: "29-01-2023"
    }

    const insertion4: insertion = {
        approved: true,
        title: "Scambio pipolo",
        description: "Scambio supermario xkè mi sono sekkato a giocarci",
        publisher: publisherGioco1,
        gallery: [gioco4.cover, imageGallery1, imageGallery2, imageGallery3],
        tradeGame: gioco4,
        wishList: [gioco2, gioco3, gioco4],
        outcome: "WIP",
        publicationDate: "29-01-2023"
    }


    list.push(insertion1);
    list.push(insertion2);
    list.push(insertion3);
    list.push(insertion4);

    
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


export function createHome(){
    let main = document.getElementById('main');
    main.innerHTML += home;
    let head = document.getElementsByTagName('head')[0];
    head.innerHTML += '<link rel="stylesheet" href="./home.css">';
    
    getAllInsertions();
    createItemCarousel();
        
}

    function createItemCarousel(){

        
        
        let carInner = document.getElementById('innerCarouselHome');
        
        for(let i = 0; i < 4 && i < list.length; i++){
            let clCarouselIt = document.createElement('div');
            if(i == 0){
                clCarouselIt.setAttribute('class', 'carousel-item active');
            }else{
                clCarouselIt.setAttribute('class', 'carousel-item');
                }
    
            let img = document.createElement('img');
            img.setAttribute('src', list[i].tradeGame.cover.link);
            img.setAttribute('id', 'imgCard');
            let clCard = document.createElement('div');
            clCard.setAttribute('class', 'card text-bg-secondary');
            clCard.setAttribute('id', 'annCard');
            let carBody = document.createElement('div');
            carBody.setAttribute('class', 'card-body');
            let title = document.createElement('h5');
            title.setAttribute('class', 'card-title');
            title.innerHTML = list[i].tradeGame.name;
            let desc = document.createElement('p');
            desc.setAttribute('class', 'card-text');
            for (let i = 0; i < list[i].tradeGame.genre.length; i++) {
                desc.innerHTML += list[i].tradeGame.genre[i].genre + " "
            }
            desc.innerHTML += "<br>"
            + "Anno: " + list[i].tradeGame.year + " "
            + "Console: " + list[i].tradeGame.console.console + "<br>"
            +"Descrizione:";
            let goAnn = document.createElement('a');
            goAnn.setAttribute('href', "#");
            goAnn.setAttribute('class', 'btn btn-primary');
            goAnn.innerHTML = 'Vai all annuncio';
    
    
            carInner.appendChild(clCarouselIt);
                    clCarouselIt.appendChild(clCard);
                        clCard.append(img);
                        clCard.append(carBody);
                            carBody.append(title);
                            carBody.append(desc);
                            carBody.append(goAnn);
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