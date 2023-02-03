/*
<div class="list-group">
    <button type="button" class="list-group-item list-group-item-action"
        aria-current="true">
        The current button
    </button>
    <button type="button" class="list-group-item list-group-item-action">A
        second
        item</button>
    <button type="button" class="list-group-item list-group-item-action">A
        third button
        item</button>
    <button type="button" class="list-group-item list-group-item-action">A
        fourth button
        item</button>
    <button type="button" class="list-group-item list-group-item-action"
        disabled>A disabled button item</button>
</div>
*/

import user from "../interfaces/user";

function showUsersChat(){
    let users : user[] = [];
    fetch("/user")
    .then((response)=>response.json())
    .then((data)=> {
        for(let user of data){
            users.push(user);
        }
        document.getElementById("chatBox");
        for(let user of users){
            let div = document.createElement("div");
            div.setAttribute("class", "list-group")
            let btn = document.createElement("button");
            btn.setAttribute("type", "button");
            btn.setAttribute("class", "list-group-item list-group-item-action");
            btn.id = "" + user.userId;
            btn.innerHTML = user.username;
            btn.onclick = ()=>{findChat(btn.id)};
        }
    })
}

function findChat(idReceiver : string){
    fetch("/findChat", request)
}