import home from './home.html'

export function createHome(){
    let main = document.getElementById('main');
    main.innerHTML += home;
    let head = document.getElementsByTagName('head')[0];
    head.innerHTML += '<link rel="stylesheet" href="./home.css">';
}

export default createHome;

/*
async function gettitle(title: string):{
    const response = await fetch()
    const data = await response.json();
    return data;

}
*/