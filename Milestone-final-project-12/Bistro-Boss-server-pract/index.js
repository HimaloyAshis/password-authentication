const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())



app.get('/', (req,res)=>{
    res.send('Here is bistro practice ready to serve you a good meal')
})

app.get('/', (req, res)=>{
    console.log(`The bistro practice is ready on port ${port}`)
})