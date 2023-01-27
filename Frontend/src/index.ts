import createNav from "./navbar/navbar"

//import * as registrazionets from "./registrazione/registrazione"


//createNav();


//document.getElementById("submitSignUp").onclick = registrazionets.tryToSignUp;

function stampabuttontestaccept(){
    console.log("buttontestaccept.onclick");
}

let buttontestaccept : HTMLElement = document.getElementById("buttontestaccept");
if(buttontestaccept!=null){
    buttontestaccept.onclick=stampabuttontestaccept;
}

