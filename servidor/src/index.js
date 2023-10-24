import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();

app.listen( 5000 )
console.log("server on in port:", 5000)