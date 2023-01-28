import gestioneUtenti from './gestioneUtenti.html'

interface videogame{
    id : number,
    name : string,
    genre : string,
    year : number
}

interface user{
    id : number,
    username : string,
    name : string,
    surname : string,
    email : string,
    rating : number,
    videogames : videogame[]
}

let users : user[] = [];

function showAllUsers(){
    let list = document.getElementById("userList");
    list.innerHTML= "";
    for(let user of users){
        let li = document.createElement("li");
        li.setAttribute('class','list-group-item');
        li.setAttribute('onmouseover',"setAttribute('class', 'list-group-item active')");
        li.setAttribute('onmouseout',"setAttribute('class', 'list-group-item')");
        let span = document.createElement("span");
        span.setAttribute("class", "float-end");
        let btn_ban = document.createElement("button");
        let btn_adm = document.createElement("button");
        btn_ban.setAttribute("class", "btn btn-danger btn-sm");
        btn_adm.setAttribute("class", "btn btn-success btn-sm");
        btn_ban.innerHTML = "Banna";
        btn_adm.innerHTML = "Rendi Admin";
        btn_ban.onclick = () => {kickHisAssOutOfThisSite(user.id)};
        btn_adm.onclick = () => {makeHimAdmin(user.id)};
        span.append(btn_adm, btn_ban);
        li.innerHTML = user.username + " | " +user.name + " " +user.surname + " | " +user.email + " | " + user.rating + "<i class='fa-regular fa-star'></i>";
        li.appendChild(span);
        list.appendChild(li);
    }
}

export function getAllUsers() : void{
    fetch("/user")
    .then((response) => response.json())
    .then((data) => {
        users = [];
        for(let element of data){
            users.push(element);
        }
        showAllUsers();
    });
}

function makeHimAdmin(id : number){
    const request = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({'id':id})
    }
    fetch("/admin", request)
    .then((response) => response.json())
    .then((data)=>console.log("admin creato? " + data));
}

function kickHisAssOutOfThisSite(id : number){
    const request = {
        method : 'DELETE',
        headers : {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({'id':id})
    }
    fetch("/user", request)
    .then((response) => response.json())
    .then((data)=>console.log("user cancellato? " + data));
}

export default getAllUsers;