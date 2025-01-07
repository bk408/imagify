import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 4000;

const app = express();
await connectDB();

app.use(express.json());
app.use(
  cors({
    origin: ['https://imagify-zx66.onrender.com'], // Add your frontend URL here
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
   
  })
);




app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.get("/", (req, res) => res.send("Api working"));

app.listen(PORT, () => console.log("server running on port" + PORT));
