import genre from "./genre"
import image from "./image"
import console from "./console"

export interface videogame {
    id: number,
    name: string,
    genre: genre[],
    year: number,
    console: console,
    cover: image
}

export default videogame
