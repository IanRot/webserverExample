import express from "express";

const port = process.env?.port || 3000;
const app = express()

app.get("/", (req, res) => {
    return res.json({message: "Hola Mundo"})
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})