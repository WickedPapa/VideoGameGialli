import annunci from './annunci.html'

var list:any = [];
function createList(){
    let insertions=document.getElementById("insertionContent")
    insertions.innerHTML="";
    let ul = document.createElement("ul");
    for(let l of list){
        let li = document.createElement("li");
        li.innerHTML=l;
        ul.append(li);
    }
}

function getAll(){
    /*prende tutti gli annunci da 
    backend facendo una fetch poi mette tutti gli annunci nella list*/
    createList();

}
function selectByGenre(genre : string){
    /*solo a livello frontend prende la list, e seleziona solo quelli che hanno il genre 
    corretto poi aggiorna la list*/

}
function selectByYear(year : number){
    /*solo a livello frontend prende la list, e seleziona solo quelli che hanno l'year 
    corretto poi aggiorna la list*/
}

export function showInsertions(){
    let main = document.getElementById("main");
    main.innerHTML = annunci;
}
export default showInsertions;