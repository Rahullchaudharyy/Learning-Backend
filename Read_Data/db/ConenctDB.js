import mongoose from "mongoose";
const conectDB = async(DATABASE_URL) =>{
    try {
        await mongoose.connect(DATABASE_URL)
        console.log("DB Conected Succesfully")
    } catch (error) {
        
    }
}

export default conectDB