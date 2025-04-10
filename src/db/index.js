import mongoose from "mongoose";
import DB_NAME from "../constant.js";

const connectDb = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`mongodb host || db connected: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`ERROR:(error in db/index.js file while connecting)`,error)
        process.exit(1)
    }
}

export default connectDb
