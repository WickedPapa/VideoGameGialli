import image from "./image"

export interface videogame {
    id: number,
    name: string,
    genre: string,
    year: number,
    console: string,
    cover: image
}

export default videogame
