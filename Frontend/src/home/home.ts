import home from './home.html'

export function createHome(){
    let main = document.getElementById('main');
    main.innerHTML += home;
}

export default createHome;