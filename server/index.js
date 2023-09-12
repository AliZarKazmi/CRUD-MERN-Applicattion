const express =  require ("express")
const mongoose =  require ("mongoose")
const cors =  require ("cors")
const UserModel = require ('./Models/Users')




const app = express()
app.use(cors()) //sever side to frontend
app.use(express.json()) // conversion




//mongoose connection : 1) local string 2) databaseName
mongoose.connect("mongodb://127.0.0.1:27017/CRUD")



// creating API
app.post('/createUser', (req, res)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(error=>res.json(error))
})

app.get('/',(req,res)=>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(error=>res.json(error))
})

app.get("/getUser/:id",(req,res)=>{
    const id = req.params.id
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(error=>res.json(error))
})


app.put("/updateUser/:id",(req,res)=>{
    const id = req.params.id 
    UserModel.findByIdAndUpdate({_id:id},{name:req.body.name, email:req.body.email,age :req.body.age})
    .then(users=>res.json(users))
    .catch(error=>res.json(error))
})

app.delete('deleteUser/:id',(req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result)  )
    .catch(error=>res.json(error))
})


//run server
app.listen(3001,()=>{ 
    console.log("server is running")
})