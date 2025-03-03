import { Schema,model } from "mongoose";

const companySchema=Schema(
    {
        name:{
            type:String,
            maxLength:[25,`Can't be overcome 25 characters`],
            required:[true,`Name is required`],
            unique:true
        },
        description:{
            type:String,
            maxLength:[100,`Can't be overcome 100 characters`],
            required:[true,`Description is required`]
        },
        email:{
            type:String,
            maxLength:[50,`Can't be overcome 50 characters`],
            required:[true,`Email is required`],
            unique:true
        },
        phone:{
            type: String,
            required:[true,'Phone is required'],
            minLength:[8, `Can't be  overcome 16 characters`],
            maxLenght:[15, 'Phone must be 13 numbers'],
        },
        address:{
            type:String,
            maxLength:[60, `Can't be overcome 60 characters`],
            required:[true,`Adress is required`]
        },
        category:{
            type:String,
            maxLength:[60,`Can't be overcome 60 characters`],
            required:[true,`Category is required`]
        },
        trajectory:{
            type:String,
            maxLength:[25,`Can't be overcome 25 characters`],
            required:[true, `Trajectory is required`]
        },
        impact:{
            type:String,
            maxLength:[25,`Can't be overcome 25 characters`],
            required:[true,`Impact is required`]
        }
    }
)

export default model('Company', companySchema)