
import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config();

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running : ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("Mongodb connection Failed", error);
})



/*
import express from "express";
const app = express()



( async ()=>{
    try {
     await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) 

     app.on("error", (error)=>{
        console.log(error)
        throw error
     })

     app.listen(process.env.PORT, ()=>{
        console.log(`App is Listening on port ${process.env.PORT}`)
     })




    } catch (error) {
        console.error(error);
        throw error
    }
})()

*/