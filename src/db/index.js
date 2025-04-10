import mongoose from "mongoose";
import DB_NAME from "../constant.js";

const dbConnect = async () =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.log(`ERROR:(error in db/index.js file while connecting)`,error)
        process.exit(1)
    }
}

export default dbConnect
