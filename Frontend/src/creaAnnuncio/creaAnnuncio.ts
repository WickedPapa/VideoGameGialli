import creaAnnuncio from './creaAnnuncio.html'
import annunci from './annunci.html'

export function createInsertion(){
    let btn = document.getElementById("addInsertion");
    btn.onclick=()=>{
        document.getElementById("main").innerHTML=creaAnnuncio;
    }
}
export default createInsertion;