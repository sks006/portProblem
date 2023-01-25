var express = require("express")

const app = express()

app.get('/', (req, res) => {

    res.send("< h1 > I am here < /h1>")


})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {

        console.log(`Server is runing on port ${process.env.PORT}`)

    })
    /* $env:PORT=5000
     npm start   */