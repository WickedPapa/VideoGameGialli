import gestioneUtenti from './gestioneUtenti.html'
import userInt from '../interfaces/user';
import showProfile from '../profiloUtente/profile';

let users: userInt[] = [];
let view = 5;

function showUsers(num: number) {
    let list = document.getElementById("userList");
    list.innerHTML = "";

    for (let i = (num - 1) * view; i < num * view; i++) {
        if (i >= users.length) {
            return;
        }
        let li = document.createElement("li");
        let btn_profile = document.createElement("button");
        btn_profile.setAttribute("class", "btn");
        btn_profile.onclick = showProfile;
        li.setAttribute('class', 'border-bottom border-2 border-primary list-group-item');
        li.setAttribute("style", "border: none")
        li.setAttribute('onmouseover', "setAttribute('class', 'border-bottom border-2 border-light list-group-item active')");
        li.setAttribute('onmouseout', "setAttribute('class', 'border-bottom border-2 border-primary list-group-item ')");
        let span = document.createElement("span");
        span.setAttribute("class", "float-end");
        let btn_ban = document.createElement("button") ;
        let btn_adm = document.createElement("button");
        let ban_img = document.createElement("img");
        let adm_img = document.createElement("img");

        btn_ban.setAttribute("class", "p-0 my-0 btn btn-sm");
        ban_img.src = "./img/button/bannBtn.png";
        ban_img.setAttribute('style', 'border:none;image-rendering: pixelated;')
        ban_img.height = 35;
        btn_ban.appendChild(ban_img);

        btn_adm.setAttribute("class", "p-0 my-0 btn btn-sm");
        adm_img.src = "./img/button/adminBtn.png";
        adm_img.setAttribute('style', 'border:none;image-rendering: pixelated;')
        adm_img.height = 35;
        btn_adm.appendChild(adm_img);
        btn_ban.onclick = () => { kickHisAssOutOfThisSite(users[i].userId)};
        btn_adm.onclick = () => { makeHimAdmin(users[i].userId) };
        span.append(btn_adm, btn_ban);
        btn_profile.innerHTML = users[i].username + " | " + users[i].name + " " + users[i].surname + " | " + users[i].email + " | " + users[i].rating + "<i class='fa-regular fa-star'></i>";
        li.append(btn_profile, span);
        list.appendChild(li);
    }

}

export function getAllUsers(): void {
    fetch("/user")
        .then((response) => response.json())
        .then((data) => {
            users = [];
            for (let element of data) {
                users.push(element);
            }
            createPagination();
            showUsers(1);
        });
}

/*
<li class="page-item active" aria-current="page">
            <span class="page-link">1</span>
        </li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
*/

function createPagination() {
    document.getElementById("pagination").innerHTML = "";
    let numberOfPages = Math.ceil(users.length / view);
    for (let i = 0; i < numberOfPages; i++) {
        let li = document.createElement("li");
        if (i == 0) {
            li.setAttribute("class", "page-item active");
            li.setAttribute("aria-current", "page");
        } else {
            li.setAttribute("class", "page-item");
        }
        let btn = document.createElement("button");
        btn.setAttribute("class", "page-link");
        btn.onclick = () => {
            let allLi = document.getElementById("pagination").children;
            for (let oneLi of allLi) {
                oneLi.setAttribute("class", "page-item");
                oneLi.removeAttribute("aria-current");
            }
            li.setAttribute("class", "page-item active");
            li.setAttribute("aria-current", "page");
            showUsers(i + 1);
        };
        btn.innerHTML = "" + (i + 1);
        li.appendChild(btn);
        document.getElementById("pagination").appendChild(li);
    }


}

function makeHimAdmin(id: number) {
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(id)
    }
    fetch("/admin", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(id)
    })
        .then((response) => response.json())
        .then((data) => { console.log("admin creato? " + data); getAllUsers(); });
}

function kickHisAssOutOfThisSite(id: number) {
    const request = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(id)
    }
    fetch("/user", request)
        .then((response) => response.json())
        .then((data) => { console.log("user cancellato? " + data); getAllUsers(); });

}

export default getAllUsers;