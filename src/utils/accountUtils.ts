import bcrypt from "bcrypt";
import jwt, { DecodeOptions } from 'jsonwebtoken';


const JWT_SECRET = "PLASTIG-RUSTNING"

//PASSWORD UTILS

export const hashPassword = (password:string) => {
    const hashValue = bcrypt.hashSync(password, 8)
    return hashValue
}

export const comparePassword = (password:string, hash:string) => {
    const correct = bcrypt.compareSync(password, hash)
    return correct
}

// JWT UTILS

export const getJWT = (account:any) => {
    const userData = { userId: account.id, username: account.username }
    const accessToken = jwt.sign(userData, JWT_SECRET)
    return accessToken
}

export const verifyJWT = (token:string) => {
    return jwt.verify(token, JWT_SECRET)
}

export const decodeJWT = (token:string) => {
    return jwt.decode(token, JWT_SECRET as DecodeOptions)
}