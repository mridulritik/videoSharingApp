import dotenv from "dotenv"
import dbConnect from "./db/index.js "

dotenv.config({
    path:".env"
})

try {
    dbConnect() 
    console.log(`dbconnected`)
} catch (error) {
    console.log(error);
    
} 