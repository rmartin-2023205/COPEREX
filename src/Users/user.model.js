import { Schema,model } from "mongoose";

const userSchema=Schema(
    {
        name:{
            type:String,
            maxLength:[25, `Can't be overcome 25 characters`],
            required:true
        },
        surname:{
            type:String,
            maxLength:[25,`Can't be overcome 25 characters`],
            required:true
        },
        username:{
            type:String,
            maxLength:[15, `Can't be overcome 15 characters`],
            unique:true,
            required:true
        },
        email:{
            type:String,
            maxLength:[50,`Can't be overcome 15`],
            unique:true,
            required:true
        },
        password:{
            type:String,
            maxLength:[100,`Can't be overcome 100 characters`],
            minLength:[8, `Can't be overcome 8 characters`]
        },
        role:{
            type:String,
            enum:['ADMIN'],
            uppercase:true
        }
        
    }
)

userSchema.methods.toJSON = function(){
    const { __v, password, ...user } = this.toObject() //Sirve para convertir un documento de MongoDB a Objeto de JS
    return user
}

export default model('User',userSchema)