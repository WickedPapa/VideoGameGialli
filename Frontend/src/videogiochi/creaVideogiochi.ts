import creaVideogioco from "./creaVideogioco.html"

let radio: string;

export function createVideoGamePage() {
    document.getElementById("main").innerHTML = creaVideogioco;
    generateGenreList();
    generateConsoleList();
    document.getElementById("newGenreBtn").onclick = createGenre;
    document.getElementById("newConsoleBtn").onclick = createConsole;
    document.getElementById("newVideoGameBtn").onclick = createVideoGame;
}

function generateGenreList() {
    let genreList = document.getElementById("genreList");
    genreList.innerHTML = "";
    fetch("/genre")
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
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
                let snippet = `
            <div class="form-check form-check-inline">
                <input class="form-check-input genrescheck" type="checkbox" id="genre${i}" value="${data[i].genre}">
                <label class="form-check-label" for="genre${i}"><b>${data[i].genre}</b></label>
            </div>`
                genreList.innerHTML += snippet;
            }
        })
}

function generateConsoleList() {
    let consoleList = document.getElementById("consoleList");
    consoleList.innerHTML = "<br><br>";
    fetch("/console")
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                if (i == 0) {
                    let div = document.createElement("div");
                    let input = document.createElement("input");
                    let label = document.createElement("label");
                    let bold = document.createElement("b");
                    div.setAttribute("class", "form-check form-check-inline");
                    input.setAttribute("id", "console" + i);
                    input.setAttribute("name", "console");
                    input.setAttribute("class", "form-check-input");
                    input.setAttribute("type", "radio");
                    input.setAttribute("value", data[i].console);
                    input.onclick = ()=>{ setRadio(data[i].console)};
                    label.setAttribute("class", "form-check-label");
                    label.setAttribute("for", "console" + i);
                    bold.innerHTML = "" + data[i].console;
                    label.append(bold);
                    div.append(input, label);
                    consoleList.append(div);
                    /*
                    let firstSnippet=`
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="console${i}" name="console" value="${data[i].console}" onclick="()=>{ setRadio(${data[i].console})}" checked>
                        <label class="form-check-label" for="console${i}"><b>${data[i].console}</b></label>
                    </div>`
                    consoleList.innerHTML += firstSnippet;
                    */
                } else {
                    let div = document.createElement("div");
                    let input = document.createElement("input");
                    let label = document.createElement("label");
                    let bold = document.createElement("b");
                    div.setAttribute("class", "form-check form-check-inline");
                    input.setAttribute("id", "console" + i);
                    input.setAttribute("name", "console");
                    input.setAttribute("class", "form-check-input");
                    input.setAttribute("type", "radio");
                    input.setAttribute("value", data[i].console);
                    input.onclick = ()=>{ setRadio(data[i].console)};
                    label.setAttribute("class", "form-check-label");
                    label.setAttribute("for", "console" + i);
                    bold.innerHTML = "" + data[i].console;
                    label.append(bold);
                    div.append(input, label);
                    consoleList.append(div);
                   /*
                    let snippet = `
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="console${i}" name="console" value="${data[i].console}" onclick="()=>{ setRadio(${data[i].console})}">
                        <label class="form-check-label" for="console${i}"><b>${data[i].console}</b></label>
                    </div>`
                    consoleList.innerHTML += snippet;
                    */
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
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                (document.getElementById("newGenre") as HTMLInputElement).value = "";
                generateGenreList();
            }
        })
}


function createConsole() {
    let newConsole = (document.getElementById("newConsole") as HTMLInputElement).value;
    let request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newConsole)
    }
    fetch("/console", request)
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                (document.getElementById("newConsole") as HTMLInputElement).value = "";
                generateConsoleList();
            }
        })
}

function createVideoGame() {

    let genres = (document.getElementsByClassName("genrescheck") as HTMLCollectionOf<HTMLInputElement>);
    let checkedGenres  = [];
    for (let genre of genres) {
        if (genre.checked) {
            checkedGenres.push(genre.value);
        }
    }

    let newVideogame = {
        name: (document.getElementById("VGname") as HTMLInputElement).value,
        genre: checkedGenres,
        year: (document.getElementById("VGyear") as HTMLInputElement).value,
        console: radio,
        cover: (document.getElementById("VGcover") as HTMLInputElement).value
    };

    let request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVideogame)
    }
    
    fetch("/videogames", request)
    .then((response)=>response.json())
    .then((data)=>{
        if(data){
            alert("videogioco inserito");
        }
    })
    
}

function setRadio(value: string) {
    radio = value;
}

export default createVideoGamePage


