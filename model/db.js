 const mongoose = require('mongoose')
 mongoose.connect('mongodb+srv://shubham:$hubhzz123@cluster0.2k8c4.mongodb.net/EmployeeDB',{useNewUrlParser :true},(err)=>{
     if(!err) {console.log("Connection Successfull")}
     else {console.log("Connection unsuccessfull" + err)}
 })

 require('./employee.model')