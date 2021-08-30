const express = require("express");
const cors = require("cors");

const data = require("./components/data");
const demo = express(); 

demo.use(cors());

demo.get("/api", (req, res) => {
    res.json(data);
});

demo.listen(5000, () => {
    console.log("");
});