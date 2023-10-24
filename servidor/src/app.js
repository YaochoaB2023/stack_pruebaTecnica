import express from "express"
import morgan from "morgan"
import employeeRoutes from "./routes/employees.routes.js"

const app = express();
app.use(express.json());
app.use(morgan( 'dev' ));
app.use("/api",employeeRoutes);


export default app;