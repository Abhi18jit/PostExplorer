require("dotenv").config();
const express = require("express");
const connectDb=require("./db/db")
const userRouter=require("./router/user.router")
const cors = require("cors");
const errorMiddleware = require("./middleware/error.middleware")

const app=express();
const PORT=process.env.PORT || 8000;

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    method:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true
}))

app.use(express.json());
app.use("/api/v1/users",userRouter);

app.use(errorMiddleware);

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at port: ${PORT}`);
    });

})