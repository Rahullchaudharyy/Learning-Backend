import mongoose from 'mongoose'


const HospitalSchema = new mongoose.Schema({


    name:{
        type:String,
        required:true
    },
    addressLine1:{
        type:String,
        required:true

    },
    addressLine2:{
     type:String
    },
    city:{
        type:String,
        required:true

    },
    pinocde:{
        type:String,
        required:true

    },
    specialisedIn:[
        {
            type:String,
            
        }
    ]
},{timestamps:true})


export const Hospital  = mongoose.model("Hospital",HospitalSchema)