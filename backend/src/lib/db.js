import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
        const { MONGO_URI } = ENV;
        if (!MONGO_URI) {
            throw new Error("MONGO_URI is not set");
        }
        
        const connection = await mongoose.connect(ENV.MONGO_URI);
        console.log("MONGODB CONNECTED: ", connection.connection.host);
    } catch (error) {
        console.error("Error connection to MONGODB: ", error);
        process.exit(1);
    }
}