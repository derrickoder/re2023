interface IUser{
    email:string;
    role:string;
    access:number; //0=owner, 1=contributor, 2=read only
}

export type {
    IUser,
}