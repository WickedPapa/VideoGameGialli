import home from './home.html'
import insertion from '../interfaces/insertion';
import createInsertion from '../creaAnnuncio/creaAnnuncio';

export function createHome(){
    let main = document.getElementById('main');
    main.innerHTML += home;
    let head = document.getElementsByTagName('head')[0];
    head.innerHTML += '<link rel="stylesheet" href="./home.css">';

    function createItemCarousel(insertion:insertion){
        
        let carInner = document.getElementsByClassName("carousel-inner")[0];
        
        for(let i = 0; i < insertion.gallery.length; i++){
            let clCarouselIt = document.createElement('div');
            if(i == 0){
                clCarouselIt.setAttribute('class', 'carousel-item active');
            }else{
                clCarouselIt.setAttribute('class', 'carousel-item');
                }
            let img = document.createElement('img');
            img.setAttribute('src', insertion.gallery[i].link);
            let clCard = document.createElement('div');
            clCard.setAttribute('class', 'card text-bg-secondary');
            let carBody = document.createElement('div');
            carBody.setAttribute('class', 'card-body');
            let title = document.getElementById('title');
            title.setAttribute('class', 'card-title');
            title.innerHTML = insertion.tradeGame.name;


            carInner.appendChild(clCarouselIt);
                clCarouselIt.appendChild(clCard);
                    clCard.appendChild(img);
                    clCard.appendChild(carBody);
                        carBody.appendChild(title);

            
            }
        }
        

        let clCard

        let title = document.getElementById('carTitle');
        let image = document.getElementById('carImage');
        let text = document.getElementById('carText');


    }



export default createHome;

/*
async function gettitle(title: string):{
    const response = await fetch()
    const data = await response.json();
    return data;

}
*/