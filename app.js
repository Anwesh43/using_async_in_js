const express = require('express')
const router = express.Router()
const path = require('path')
router.get('/test',(req,res)=>{
    setTimeout(()=>{
        res.send("hello")
    },1000)
})
const app = express()
app.use('/app',router)
app.use(express.static(path.join(__dirname,'public')))
app.listen(8000,()=>{
    console.log("started listening in 8000")
})
