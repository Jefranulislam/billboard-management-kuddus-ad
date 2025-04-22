import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}?retryWrites=true&w=majority`)
        .then(() => console.log("MongoDB connected"))
        .catch(err => console.error("MongoDB connection error:", err));
        console.log(`\n mongodb connected , DB Host`)
    } catch (error) {
        console.error(error)
        throw error
        process.exit()
    }
}

export default connectDB;