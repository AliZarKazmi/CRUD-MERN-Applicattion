//Defining schema of User Collection(Table) 

// In No-sql 'Table' is Known as 'Collection' and 'Row/Record' as 'Document'
const mongoose = require('mongoose')

const UserSchema= new mongoose.Schema({
    name:String,
    email:String,
    age :Number
})

//In model we pass 2 parameters 
// 1) Collection Name i.e 'users'       2) Pass the Schema
const UserModel =  mongoose.model('users',UserSchema)

module.exports= UserModel




// Note
// First connect backend with Mongose
//Then define models