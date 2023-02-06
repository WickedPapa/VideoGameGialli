import creaAnnuncio from '../creaAnnuncio/creaAnnuncio.html'
import insertion from '../interfaces/insertion';
import expandInsertion from './annuncio'
import createInsertionPage from '../creaAnnuncio/creaAnnuncio'

let list: insertion[] = [];
let view: number = 6

export function createPage2() {
    list = [];
    fetch('/insertion')
    .then((response) => response.json())
    .then((data) => {
        for(let d of data){
            list.push(d);
        }
        list.reverse();
        document.getElementById("createCategory").onclick = createCategory;
        let btn = document.getElementById("addInsertion");
        btn.onclick=()=>{
            document.getElementById("main").innerHTML=creaAnnuncio;
            createInsertionPage();
        }
        createPagination2();
        showResults2(1);
    });
}

function createPagination2() {
    let size: number = list.length
    let tabs: number = Math.ceil(size / view);
    let pages = document.getElementById("pages2");
    pages.innerHTML = "";
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
            let allLi = document.getElementById("pages2").children;
            for (let oneLi of allLi) {
                oneLi.setAttribute("class", "page-item");
                oneLi.removeAttribute("aria-current");
            }
            li.setAttribute("class", "page-item active");
            li.setAttribute("aria-current", "page");
            showResults2(i);
        };
        btn.innerHTML = "" + (i);
        li.appendChild(btn);
        document.getElementById("pages2").appendChild(li);
    }
}

function showResults2(i: number) {
    let content = document.getElementById("insertionContent2");
    content.innerHTML = "";
    let start = (i - 1) * view;
    let stop = (i * view) - 1;
    for (start; start <= stop; start++) {
        if (start >= list.length) {
            return;
        }

        let col = document.createElement("div")
        let juan = list[start].title  //"" + start;
        //Juan è l'id dei bottoni, sarà l'id delle inserzioni quando si implementeranno gli annunci dal db
        let isOnCheckedListResult: boolean = false;

        for(let element of checkedList){
            if(juan==element){
                isOnCheckedListResult=true;
            }
        }

        
        col.setAttribute("class", 'list-group-item');
        if(isOnCheckedListResult){
            col.setAttribute("style", "background-color: rgba(0,0,0,0.6)");
        } else {
            col.setAttribute("style", "background-color: rgba(0,0,0,0.2)");
            col.setAttribute('onmouseover', 'setAttribute("style", "background-color: rgba(0,0,0,0.6)")');
            col.setAttribute('onmouseout', 'setAttribute("style", "background-color: rgba(0,0,0,0.2)")');
        }
        
        col.setAttribute("id", juan);

        col.onclick = () => {
            addInsertionToList(juan)
        }
       
        let title = document.createElement("h2");
        title.setAttribute('style','font-weight: bold;');
        let description = document.createElement("p");
        title.innerHTML = list[start].title + " | " + list[start].outcome;
        description.innerHTML = "" + list[start].tradeGame.name;
        for(let i= 0; i<list[start].tradeGame.genre.length; i++){
            description.innerHTML += ", " + list[start].tradeGame.genre[i].genre + "";
        }
        description.innerHTML += ", " + list[start].tradeGame.year;

        description.innerHTML += ", " + list[start].tradeGame.console.console;

        let col2 = document.createElement("div");
        let btn_show = document.createElement("button");
        let btn_approve = document.createElement("button");
        let ins = list[start];
        let id = list[start].id;
        btn_approve.id = "btn_approve"+id;
        btn_show.setAttribute("class", "btn btn-primary btn-sm");
        btn_show.innerHTML = "Mostra annuncio";
        if(list[start].approved){
            btn_approve.setAttribute("class", "btn btn-success btn-sm");
            btn_approve.innerHTML = "Annuncio approvato";
        }else{
            btn_approve.setAttribute("class", "btn btn-warning btn-sm");
            btn_approve.innerHTML = "Da approvare";
        }
        
        btn_approve.onclick = ()=>{changeInsertionStatus(id);}
        btn_show.onclick = ()=>{expandInsertion(ins);} 
        col.append(title,description)
        col2.append(btn_show, btn_approve);
        content.append(col, col2);
    }
}


function changeInsertionStatus(id:number){
    fetch("/insertion/"+id)
    .then((response)=>response.json())
    .then((data)=>{
        let btn_approve = document.getElementById("btn_approve"+id);
        if(data){
            btn_approve.setAttribute("class", "btn btn-success btn-sm");
            btn_approve.innerHTML = "Annuncio approvato";
        }else{
            btn_approve.setAttribute("class", "btn btn-warning btn-sm");
            btn_approve.innerHTML = "Da approvare";
        }
    })
}

export default createPage2




let checkedList: string[] = [];

export function addInsertionToList(ins: string){

    let isOnCheckedList: boolean = false;

    for(let element of checkedList){
        if(ins==element){
            isOnCheckedList = true;
            checkedList.splice(checkedList.indexOf(element), 1);
        }
    }

    if(isOnCheckedList){
        document.getElementById(ins).setAttribute("style", "background-color: rgba(0,0,0,0.2)");
        document.getElementById(ins).setAttribute('onmouseover', 'setAttribute("style", "background-color: rgba(0,0,0,0.6)")');
        document.getElementById(ins).setAttribute('onmouseout', 'setAttribute("style", "background-color: rgba(0,0,0,0.2)")');
    } else {
        checkedList.push(ins);
        document.getElementById(ins).removeAttribute('onmouseover');
        document.getElementById(ins).removeAttribute('onmouseout');
        document.getElementById(ins).setAttribute("style", "background-color: rgba(0,0,0,0.6)");
    }

}

export function createCategory(){
    
    const obj={
        description: (document.getElementById("categoryName") as HTMLInputElement).value,
        insertionsTitle: checkedList,
    }
    

    const request = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
    }

    fetch("/category", request)
    .then((response)=>response.json())
    .then((data)=>{
        if(data>0){
            alert("Categoria Creata")
        }else{
            alert("E' FINIIIITAA!!")
        }
    })

    //Prende il valore della casella di testo e lo mette come nome della categoria
   
    
    //TODO: LA FEEEEEEEEEEEEETCH!!!
    //TODO: inserisci gli elementi di checkedList in una categoria nel DB
    //TODO: Metodo da fare per inserire gli elementi nel database haha

    //Svuota il valore della casella di testo e la lista

    checkedList = [];

    //Reimposta la pagina a come stava prima
    createPagination2();
    showResults2(1);

}





