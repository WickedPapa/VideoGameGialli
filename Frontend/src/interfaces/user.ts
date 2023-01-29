import videogame from './videogame'

export interface user {
    userId: number,
    username: string,
    name: string,
    surname: string,
    email: string,
    rating: number,
    videogames: videogame[]
}

export default user