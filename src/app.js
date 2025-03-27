import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import mainRoutes from "./routes/mainRoutes.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


// API routes

app.use("/api", mainRoutes);

console.log(process.env.PORT);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});