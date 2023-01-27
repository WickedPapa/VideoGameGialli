import gestioneUtenti from './gestioneUtenti.html'

const tempUsers = [{nickname: 'wicked', name: 'paolo', surname: 'montano', email: 'p.montano@gmail.com'}];


export function showAllUsers(){
    let main = document.getElementById("main");
    main.innerHTML = gestioneUtenti;
    let list = document.getElementById("userList");
    for(let user of tempUsers){
        let li = document.createElement("li");
        li.setAttribute('class','list-group-item');
    }
}
export default showAllUsers;

function getAllUser(){
    


}