import profile from './profile.html'


let type;
let userInfo;
let adminInfo;

export function showProfile() {
    fetch("/whoIsLogged")
        .then((response) => response.json())
        .then((data) => {
            if (data == "ADMIN") {
                type = "ADMIN";
            } else if (data == "USER") {
                type = "USER"
            } else {
                type = "GUEST"
            }

            let main = document.getElementById("main");
            main.innerHTML = profile;
            createProfile(type);
            console.log("ciao da show")
        })

}

function createProfile(type: string) {

    if (type == "ADMIN") {
        showAdminProfile();

    } else if (type == "USER") {
        showUserProfile();
    } else {

    }

}

function showAdminProfile() {

    fetch("/adminInfo")
        .then((response) => response.json())
        .then((data) => {
            adminInfo = data;
            let h1 = document.createElement("h1");
            let title = document.getElementById("titleprofile");
            h1.innerHTML = "<b>BENTORNATO AMMINISTRATORE " + adminInfo.username + "</b>";
            title.append(h1);

            let body = document.getElementById("bodyprofile");
            let h2 = document.createElement("h2");
            h2.innerHTML =
                " <br><br><br> <b></b>" + adminInfo.username
                + " <br><br> <b></b>" + adminInfo.email
                + " <br><br> <b></b>" + adminInfo.name
                + " <br><br> <b></b>" + adminInfo.surname
            body.append(h2)

            let buttons = document.getElementById("buttons-profile");
            let btn1 = document.createElement("button");
            buttons.setAttribute("style", "border:none;");
            btn1.setAttribute("class", "btn p-0 my-1");
            btn1.onclick = () => {
                let obj = {
                    'username': (document.getElementById("username") as HTMLInputElement).value,
                    'email': ""
                }

                let request = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(obj)
                }

                fetch("/admin/info", request)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        (document.getElementById("username") as HTMLInputElement).value = "";
                        showProfile()
                    })

            }
            btn1.innerHTML = '<img src="./img/button/newuserBtn.png" style="border:none;image-rendering:pixelated;" height="35">'
            buttons.append(btn1)

            let buttonEmail = document.getElementById("buttons-profile");
            let btn2 = document.createElement("button");
            btn2.setAttribute("class", "btn p-0 my-4");
            btn2.onclick = () => {
                let obj = {
                    'username': "",
                    'email': (document.getElementById("email") as HTMLInputElement).value
                }

                let request = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(obj)
                }

                fetch("/admin/info", request)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        (document.getElementById("email") as HTMLInputElement).value = "";
                        showProfile()

                    })
            }
            btn2.innerHTML = '<img src="./img/button/newmailBtn.png" style="border:none;image-rendering:pixelated;" height="35">'
            buttons.append(btn2);

            let cp = document.getElementById("cp");
            let btn3 = document.createElement("button");
            cp.setAttribute('style', 'border:none;');
            btn3.setAttribute("class", "btn p-0")
            btn3.innerHTML = '<img src="./img/button/newpassBtn.png" style="border:none;image-rendering:pixelated;" height="35">'
            btn3.onclick = () => {
                let obj = {
                    'oldPassword': (document.getElementById("oldPassword") as HTMLInputElement).value,
                    'newPassword': (document.getElementById("newPassword") as HTMLInputElement).value
                }

                let request = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(obj)
                }

                fetch("/admin/psw", request)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        (document.getElementById("oldPassword") as HTMLInputElement).value = "";
                        (document.getElementById("newPassword") as HTMLInputElement).value = "";

                    })
            }
            cp.append(btn3);

        })

}

function showUserProfile() {
    fetch("/userInfo")
        .then((response) => response.json())
        .then((data) => {
            userInfo = data;
            let h1 = document.createElement("h1");
            let title = document.getElementById("titleprofile");
            h1.innerHTML = "<b>BENTORNATO UTENTE " + userInfo.username + " " + userInfo.rating + "</b> <i class='fa-regular fa-star'></i>";
            title.append(h1);
            let body = document.getElementById("bodyprofile");
            let h2 = document.createElement("h2");
            h2.innerHTML =
                " <br><br><br> <b></b>" + userInfo.username
                + " <br><br> <b></b>" + userInfo.email
                + " <br><br><b></b>" + userInfo.name
                + " <br><br> <b></b>" + userInfo.surname
            body.append(h2)

            let buttons = document.getElementById("buttons-profile");
            let btn1 = document.createElement("button");
            buttons.setAttribute("style", "border:none;");
            btn1.setAttribute("class", "p-0 btn my-1");
            btn1.onclick = () => {

                let obj = {
                    'username': (document.getElementById("username") as HTMLInputElement).value,
                    'email': ""
                }

                let request = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(obj)
                }

                fetch("/user/info", request)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        (document.getElementById("username") as HTMLInputElement).value = "";
                        showProfile()
                    })
            }

            btn1.innerHTML = '<img src="./img/button/newuserBtn.png" style="border:none;image-rendering:pixelated;" height="35">'
            buttons.append(btn1)

            let buttonEmail = document.getElementById("buttons-profile");
            let btn2 = document.createElement("button");
            btn2.setAttribute("class", "btn p-0   my-4");
            btn2.onclick = () => {

                let obj = {
                    'username': "",
                    'email': (document.getElementById("email") as HTMLInputElement).value
                }

                let request = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(obj)
                }

                fetch("/user/info", request)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        (document.getElementById("email") as HTMLInputElement).value = "";
                        showProfile();
                    })
            }
            btn2.innerHTML = '<img src="./img/button/newmailBtn.png" style="border:none;image-rendering:pixelated;" height="35">'
            buttons.append(btn2);

            cp.append(btn3);
            let gamesList = document.getElementById("gamesList");
            let h3 = document.createElement("h3");
            h3.innerHTML = "<b>I tuoi giochi:</b>";
            let ul = document.createElement("ul");
            ul.setAttribute("class", "list-group");
            for (let game of userInfo.videogames) {
                let li = document.createElement("li");
                li.setAttribute("class", "list-group-item");
                li.innerHTML = game.name;
                ul.append(li);
            }
            gamesList.append(h3, ul);
        })

    let cp = document.getElementById("cp");
    let btn3 = document.createElement("button");
    cp.setAttribute('style', 'border:none;');
    btn3.setAttribute("class", "btn p-0")
    btn3.innerHTML = '<img src="./img/button/newpassBtn.png" style="border:none;image-rendering:pixelated;" height="35">'
    btn3.onclick = () => {
        let obj = {
            'oldPassword': (document.getElementById("oldPassword") as HTMLInputElement).value,
            'newPassword': (document.getElementById("newPassword") as HTMLInputElement).value
        }

        let request = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        }

        fetch("/user/psw", request)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                (document.getElementById("oldPassword") as HTMLInputElement).value = "";
                (document.getElementById("newPassword") as HTMLInputElement).value = "";

            })
    }
}



export default showProfile;