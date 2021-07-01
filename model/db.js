const { MongoClient } = require('mongodb');
 const mongoose = require('mongoose')
 mongoose.connect('mongodb+srv://shubham:$hubhzz123@cluster0.2k8c4.mongodb.net/EmployeeDB',{useNewUrlParser :true},(err)=>{
     if(!err) {console.log("Connection Successfull")}
     else {console.log("Connection unsuccessfull" + err)}
 })
// const uri = "mongodb+srv://shubham:$hubhzz123@cluster0.2k8c4.mongodb.net/EmployeeDB?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     if (!err) { console.log("Connection Successfull") }
//     else { console.log("Connection unsuccessfull" + err) }
// });
require('./employee.model')