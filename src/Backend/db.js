const mongoose= require('mongoose');

const mongoURI="mongodb://localhost:27017/ecommerce"


const conectToMonog= () =>{
    mongoose.connect(mongoURI, () =>{
        console.log("connected successfully to mongo")
    })
}

module.exports=conectToMonog;