import { hash, verify } from "argon2";
export const encryp=async(password)=>{
    try{
        return await hash(password)
    }catch(e){
        console.error(e)
        return e
    }
}

export const checkpassword=async(hash,password)=>{
    try{
        return await verify(hash,password)
    }catch(e){
        console.error(e)
        return e
    }
}