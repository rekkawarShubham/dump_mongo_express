 const mongoose = require('mongoose')
 mongoose.connect('mongodb://localhost:27017/EmployeeDB',{useNewUrlParser :true},(err)=>{
     if(!err) {console.log("Connection Successfull")}
     else {console.log("Connection unsuccessfull" + err)}
 })

 require('./employee.model')