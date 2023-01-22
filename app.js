var express = require("express")

const app = express()

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {

    console.log(`Server is runing on port ${process.env.PORT}`)

})