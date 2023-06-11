require("dotenv/config");
const express = require("express");
const mongooseConnection = require("./data/mongoConnect")
const cors = require("cors");
const pinsRouter = require("./routes/pin.routes");
const usersRouter = require("./routes/users.routes");

const app = express();
app.use(express.json());
app.use(cors("*"));
app.use("/api/pins", pinsRouter);
app.use("/api/users", usersRouter);



mongooseConnection()

app.listen(process.env.PORT, ()=>{
    console.log("Backend server is running!");
})