const mongoose=require('mongoose')
const {Schema}=mongoose;
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});
const User=mongoose.model('user',userSchema)
User.createIndexes()
module.exports=User