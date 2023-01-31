import videogame from "./videogame";

export interface logged{
    logged : boolean;
    accountType: string;
    accountInfoDto: info;
}

interface info{

}

class user implements info{
    userId: number;
    username: string;
    name: string;
    surname: string;
    email: string;
    rating: number;
    videogames: videogame[];
}

class admin implements info{
    adminId: number;
    username: string;
    name: string;
    surname: string;
    email: string;
}

export default logged;