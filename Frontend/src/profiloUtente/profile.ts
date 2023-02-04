import profile from './profile.html'


let type;
let userInfo;
let adminInfo;

export function showProfile(){   
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

function createProfile(type:string){

    if (type == "ADMIN") {
        showAdminProfile();

    } else if(type == "USER") {
        showUserProfile();
    }else{

    }

}

function showAdminProfile(){

    fetch("/adminInfo")
    .then((response) => response.json())
    .then((data) => {
        adminInfo=data;
        let h1 = document.createElement("h1");
        let title = document.getElementById("titleprofile");
        h1.innerHTML="BENTORNATO AMMINISTRATORE "+adminInfo.username;
        title.append(h1);
        
        let body = document.getElementById("bodyprofile");
        let h2 = document.createElement("h2");
        h2.innerHTML=
         " <br><br><br> <b></b>"+adminInfo.username 
        + " <br><br> <b></b>"+adminInfo.email 
        + " <br><br> <b></b>"+adminInfo.name
        + " <br><br> <b></b>"+adminInfo.surname
        body.append(h2)

        let buttons = document.getElementById("buttons-profile");
        let btn1 = document.createElement("button");
        btn1.setAttribute("class","btn btn-primary my-1");
        btn1.onclick=()=>{
            let obj = {
                'username' : (document.getElementById("username") as HTMLInputElement).value,
                'email' : ""
            }
            
            let request = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj)
            }

            fetch("/admin/info", request)
            .then((response)=>response.json())
            .then((data)=> 
            {
                console.log(data);
                (document.getElementById("username") as HTMLInputElement).value="";
                showProfile()
            })           

        }
        btn1.innerHTML="Cambia Username"
        buttons.append(btn1)

        let buttonEmail = document.getElementById("buttons-profile");
        let btn2 = document.createElement("button");
        btn2.setAttribute("class","btn btn-primary   my-4");
        btn2.onclick=()=>{
            let obj = {
                'username' : "",
                'email' : (document.getElementById("email") as HTMLInputElement).value
            }
            
            let request = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj)
            }

            fetch("/admin/info", request)
            .then((response)=>response.json())
            .then((data)=> 
            {
                console.log(data);
                (document.getElementById("email") as HTMLInputElement).value="";
                showProfile()
                
            })
        }
        btn2.innerHTML="Cambia Email"
        buttons.append(btn2);
        
        let cp = document.getElementById("cp");
        let btn3 = document.createElement("button");
        btn3.setAttribute("class", "btn btn-primary")
        btn3.innerHTML="Cambia Password"
        btn3.onclick= ()=>{
            let obj = {
                'oldPassword' : (document.getElementById("oldPassword") as HTMLInputElement).value,
                'newPassword' : (document.getElementById("newPassword") as HTMLInputElement).value
            }
            
            let request = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj)
            }

            fetch("/admin/psw", request)
            .then((response)=>response.json())
            .then((data)=> 
            {
                console.log(data);
                (document.getElementById("oldPassword") as HTMLInputElement).value="";      
                (document.getElementById("newPassword") as HTMLInputElement).value="";      
                
            })
        }
        cp.append(btn3);

    })
   
}

function showUserProfile(){
    fetch("/userInfo")
    .then((response) => response.json())
    .then((data) => {
        userInfo=data;
        let h1 = document.createElement("h1");
        let title = document.getElementById("titleprofile");
        h1.innerHTML="BENTORNATO UTENTE "+ userInfo.username + " "+ userInfo.rating +" <i class='fa-regular fa-star'></i>";
        title.append(h1);
        let body = document.getElementById("bodyprofile");
        let h2 = document.createElement("h2");
        h2.innerHTML=
        " <br><br><br> <b></b>"+userInfo.username 
        + " <br><br> <b></b>"+userInfo.email 
        + " <br><br><b></b>"+userInfo.name
        + " <br><br> <b></b>"+userInfo.surname
        body.append(h2)

        let buttons = document.getElementById("buttons-profile");
        let btn1 = document.createElement("button");
        btn1.setAttribute("class","btn btn-primary my-1");
        btn1.onclick=()=>{
            
            let obj = {
                'username' : (document.getElementById("username") as HTMLInputElement).value,
                'email' : ""
            }
            
            let request = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj)
            }

            fetch("/user/info", request)
            .then((response)=>response.json())
            .then((data)=> 
            {
                console.log(data);
                (document.getElementById("username") as HTMLInputElement).value="";
                showProfile()
            })           
        }

        btn1.innerHTML="Cambia Username"
        buttons.append(btn1)

        let buttonEmail = document.getElementById("buttons-profile");
        let btn2 = document.createElement("button");
        btn2.setAttribute("class","btn btn-primary   my-4");
        btn2.onclick=()=>{
            
            let obj = {
                'username' : "",
                'email' : (document.getElementById("email") as HTMLInputElement).value
            }
            
            let request = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj)
            }

            fetch("/user/info", request)
            .then((response)=>response.json())
            .then((data)=> 
            {
                console.log(data);
                (document.getElementById("email") as HTMLInputElement).value="";
                 showProfile();
            })
        }
        btn2.innerHTML="Cambia Email"
        buttons.append(btn2);
        
    })
   
    let cp = document.getElementById("cp");
    let btn3 = document.createElement("button");
    btn3.setAttribute("class", "btn btn-primary")
    btn3.innerHTML="Cambia Password"
    btn3.onclick= ()=>{
        let obj = {
            'oldPassword' : (document.getElementById("oldPassword") as HTMLInputElement).value,
            'newPassword' : (document.getElementById("newPassword") as HTMLInputElement).value
        }
        
        let request = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        }

        fetch("/user/psw", request)
        .then((response)=>response.json())
        .then((data)=> 
        {
            console.log(data);
            (document.getElementById("oldPassword") as HTMLInputElement).value="";      
            (document.getElementById("newPassword") as HTMLInputElement).value="";      
            
        })
    }
    cp.append(btn3);

}



export default showProfile;