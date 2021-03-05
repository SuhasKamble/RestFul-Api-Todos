const express = require("express");
require("./db/conn")
const router = require("./routers/routers")
const Todo = require("./models/todos")
const app = express();
app.use(router)

app.use(express.json())


const port = process.env.PORT || 8000;


app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
})
