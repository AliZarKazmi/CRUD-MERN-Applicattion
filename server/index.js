const express =  require ("express")
const mongoose =  require ("mongoose")
const cors =  require ("cors")

const app = express()
app.use(cors()) //sever side to frontend
app.use(express.json()) // conversion


//run server
app.listen(3001,()=>{ 
    console.log("server is running")
})