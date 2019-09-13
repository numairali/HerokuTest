// export interface IEpisode {
//     id: number;
//     gender?: number;
//     name?: string;
//     location?: string;
//     coordinates?: string;
//     timezone?: any;
//     email?: string;
//     login?: number;
//     dob?: number;
//     registered?: number;
//     phone?: string;
//     cell?: string;
//     picture?: string;
//     medium?: string;
//     thumbnail?: string;
//     info?:string;
// }
export interface IUser {
    id: number;
    name?: any;
    location?: any;
    email?: string;
    phone?: string;
    picture?: any;
}

export class User implements IUser {
    constructor(
        public id: number,
        public name?: any,
        public location?: any,
        public email?: string,
        public phone?: string,
        public picture?: any) {
    }
}
