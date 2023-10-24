import mongoose from "mongoose"
import { mongourl } from "./config.js"

export const connectDB = async () => {
    try {
        await mongoose.connect(mongourl,{
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log("conectado a mongo");
    } catch (error) {
        console.log(error, "error al conectar con mongo");
        process.exit(1);
    }
}