
function createGamePage(){
    fetch("/whoIsLogged")
    .then((response) => response.json())
    .then((data)=>{
        if(data=="ADMIN"){
            document.getElementById("addVideogame").removeAttribute("hidden");
        }else{
            document.getElementById("addVideogame").setAttribute("hidden","true"); 
        }
    })
}