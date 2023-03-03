import { IUser } from '../interface/IUser'

const data: IUser[] = [
    { email:"seller-lawyer@test.com", role:"seller-lawyer", access:1 },
    { email:"buyer-lawyer@test.com", role:"buyer-lawyer", access:1 },
    { email:"buyer-realtor@test.com", role:"buyer-realtor", access:1 },
    { email:"seller-realtor@test.com", role:"seller-realtor", access:0 },
    { email:"buyer@test.com", role:"buyer-buyer", access:1 },
    { email:"seller@test.com", role:"seller-seller", access:1 },
];

function ApiUser():boolean{
    return(true);
}

export default{
    ApiUser,
}