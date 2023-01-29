import image from './image'
import user from './user'
import videogame from './videogame'

export interface insertion{
    approved: boolean,
    title: string,
    description: string,
    gallery: image[],
    videogame: videogame,
    publisher: user,
    outcome: string
}

export default insertion