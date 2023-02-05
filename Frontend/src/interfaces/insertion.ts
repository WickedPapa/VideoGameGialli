import image from './image'
import user from './user'
import videogame from './videogame'

export interface insertion{
    id: number,
    approved: boolean,
    title: string,
    description: string,
    publisher: user,
    gallery: image[],
    tradeGame: videogame,
    wishList: videogame[],
    outcome: string
    publicationDate: string
}

export default insertion