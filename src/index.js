import dotenv from "dotenv"
import connectDb from "./db/index.js "
import { app } from "./app.js"


dotenv.config({
    path: ".env"
})


connectDb()
.then(()=>{
    app.on("error",(err)=>{
        console.log(err)
    })
    app.listen(process.env.PORT|| 5000,()=>{
        console.log(`app is listening on port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log(`error occur while execution of connectDB function in index.js file: ${error}`)

})


