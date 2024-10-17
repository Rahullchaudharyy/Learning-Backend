import mongoose from 'mongoose'


const patientSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true,

   },
   diogonesdWith:{
    type:String,
    required:true,

   },
   address:{
    type:String,
    required:true,

   },
   age:{
    type:Number,
    required:true,

   },
   bloodGroup:{
    type:String,
    required:true,

   },
   gender:{
    type:String,
    enum:["M","F","O"],
    required:true,

   },
   edmitedIn:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
   }

},{timestamps:true})
// All the practice has been done under the presence of mind 🙂

export const Patient  = mongoose.model("Patient",patientSchema)
