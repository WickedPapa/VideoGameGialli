import creaVideogioco from "./creaVideogioco.html"

let radio = "";

export function createVideoGamePage(){
    document.getElementById("main").innerHTML = creaVideogioco;
    generateGenreList();
    generateConsoleList();
    document.getElementById("newGenreBtn").onclick = createGenre;
    document.getElementById("newConsoleBtn").onclick = createConsole;
    document.getElementById("newVideoGameBtn").onclick = createVideoGame;
}

function generateGenreList(){
    let genreList = document.getElementById("genreList");
    genreList.innerHTML = "";
    fetch("/genre")
    .then((response) => response.json())
    .then((data)=>{
        for(let i = 0; i<data.length; i++){
            /*
            let div = document.createElement("div");
            let input = document.createElement("input");
            let label = document.createElement("label");
            let bold = document.createElement("b");
            div.setAttribute("class", "form-check form-check-inline");
            input.setAttribute("id", "genre"+i);
            input.setAttribute("class", "form-check-input");
            input.setAttribute("type", "checkbox");
            input.setAttribute("value", data[i].genre);
            label.setAttribute("class", "form-check-label");
            label.setAttribute("for", "genre"+i);
            bold.innerHTML=""+data[i].genre;
            label.append(bold);
            div.append(input, label);
            */
            let snippet=`
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="genre${i}" value="option1">
                <label class="form-check-label" for="genre${i}"><b>${data[i].genre}</b></label>
            </div>`
            genreList.innerHTML += snippet;
        }
    })
}

function generateConsoleList(){
    let consoleList = document.getElementById("consoleList");
    consoleList.innerHTML = "<br><br>";
    fetch("/console")
    .then((response) => response.json())
    .then((data)=>{
        for(let i = 0; i<data.length; i++){
            if(i==0){
                let firstSnippet=`
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="console${i}" name="console" value="${data[i].console}" onclick="()=>{setRadio(this.value)}" checked>
                    <label class="form-check-label" for="console${i}"><b>${data[i].console}</b></label>
                </div>`
                consoleList.innerHTML += firstSnippet;
            }else{
                let snippet=`
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="console${i}" name="console" value="${data[i].console}" onclick="()=>{setRadio(this.value)}">
                    <label class="form-check-label" for="console${i}"><b>${data[i].console}</b></label>
                </div>`
                consoleList.innerHTML += snippet;
            }
        }
    })
}

function createGenre() {
    let newGenre = (document.getElementById("newGenre") as HTMLInputElement).value;
    let request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGenre)
    }
    fetch("/genre", request)
    .then((response)=>response.json())
    .then((data)=>{
        if(data){
            console.log((document.getElementById("newGenre") as HTMLInputElement).value);
            (document.getElementById("newGenre") as HTMLInputElement).value = "";
            generateGenreList();
        }
    })
}


function createConsole(){
    let newConsole = (document.getElementById("newConsole") as HTMLInputElement).value;
    let request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newConsole)
    }
    fetch("/console", request)
    .then((response)=>response.json())
    .then((data)=>{
        if(data){
            (document.getElementById("newConsole") as HTMLInputElement).value = "";
            generateConsoleList();
        }
    })
}

function createVideoGame(){
    
}

function setRadio(value: string){
    radio = value;
}

export default createVideoGamePage


