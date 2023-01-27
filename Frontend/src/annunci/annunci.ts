import annunci from './annunci.html'

export function showInsertions(){
    let main = document.getElementById("main");
    main.innerHTML += annunci;
}
export default showInsertions;