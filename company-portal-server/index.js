const express = require("express");
const users = require("./routes/users");
const auth = require("./routes/auth");
const  mongoose  = require("mongoose");
const app = express();

mongoose.connect('mongodb://localhost/portal', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(() => console.log("connected to DB"))
app.use(express.json())

app.get("/", (req, res) =>{
    res.send("test");
})
app.use('/api/users', users)
app.use('/api/auth', auth)

app.listen(3001, () =>{
    console.log("running");
});