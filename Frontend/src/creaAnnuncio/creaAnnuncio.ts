import creaAnnuncio from './creaAnnuncio.html'

export function createInsertion(){
    let main = document.getElementById("main");
    main.innerHTML = creaAnnuncio;
}
export default createInsertion;