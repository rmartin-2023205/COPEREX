import { isValidObjectId } from 'mongoose'
import Company from '../src/Company/compay.model.js'

export const existEmail = async(email, company)=>{
    const alreadyEmail = await Company.findOne({company}) 
        if(alreadyEmail && alreadyEmail._id != user.uid){
        console.error(`Email ${email} is already taken`)
        throw new Error(`Email ${email} is already taken`)
    }
}

export const notRequiredField=(field)=>{
    if(field){
        throw new Error(`${field} is not required`)
    }
}

export const objectValid=(objectId)=>{
    if(!isValidObjectId(objectId)){
        throw new Error(`Id is not a valid ObjectId`)
    }
}

export const findUser=async(id)=>{
    try{
        const userExist=await User.findById(id)
        if(!userExist)return false
        return userExist
    }catch(e){
        console.error(e)
        return e
    }
}