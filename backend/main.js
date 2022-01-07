const express = require('express');
const app = express();

app.use(express.json());
const cors = require("cors");
app.use(cors());

const {adduser, selectuser }= require("./user");

app.get("/user", async (req, res) => {
    const list = await selectuser();
    res.json(list);
})

//http://localhost:4000/user

app.post("/add-user",async (req, res) => {
    const user = req.body;
        await adduser(user);
res.json({ massage: "added sucessfully"})
});



app.listen(4000, () => console.log("server started"));