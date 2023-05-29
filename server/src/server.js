const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.controller")
// const adminRouter = require("./routes/user.controller")
const app = express()
const PORT = 3200;

app.use(express.json());
app.use("/users",userRouter);
// app.use("/admin",adminRouter);

// app.get('/', (req,res)=>{
//     res.send("Server is ready for working...")
// })

mongoose
    .connect("mongodb://localhost:27017/Customer")
    .then(() => console.log("Connected to MongoDB"))
    .catch((error)=> console.log(`Could'nt connected to MongoDB, ${error}`))

app.listen(PORT, () =>{
    console.log(`Server is listening ar port ${PORT}`)
})