const mongoose = require('mongoose');
const connectDB = mongoose.connect("mongodb://atlas-sql-652f6f1ef30f77480719340c-cojzm.a.query.mongodb.net/studentapi?ssl=true&authSource=admin",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection sucessfull");
}).catch((e)=>{
    console.log("not connected");
});

module.exports = connectDB;