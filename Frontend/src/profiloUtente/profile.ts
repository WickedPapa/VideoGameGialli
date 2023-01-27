import profile from './profile.html'

export function showProfile(){
    let main = document.getElementById("main");
    main.innerHTML = profile;
}
export default showProfile();