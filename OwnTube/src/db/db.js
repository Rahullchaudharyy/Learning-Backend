import mongoose from "mongoose";
import dotenv from "dotenv"; 

dotenv.config(); 

const ConectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URL);
    console.log('Database connected successfully 🌿🌿 on', connectionInstance.connection.host);
  } catch (error) {
    console.log("Error while connecting to the database ...!!", error.message);
  }
};

export default ConectDB;
