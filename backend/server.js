import express from "express";

const app = express()

app.get('/', (req, res) => {
    res.send('API is running.....')
})

const PORT = 5000

app.listen(PORT, console.log(
    `Server running in port ${PORT}`
))
