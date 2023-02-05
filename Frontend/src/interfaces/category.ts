import insertion from "./insertion";

export interface category{
    id: number,
    descriptor: string,
    list: insertion[];
}

export default category;