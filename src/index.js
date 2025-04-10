import dotenv from "dotenv"
import connectDb from "./db/index.js "


dotenv.config({
    path:".env"
})

try {
    connectDb() 
    console.log(`dbconnected`)
} catch (error) {
    console.log(error);
    
} 