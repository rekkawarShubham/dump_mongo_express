const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

router.get('/', (req, res) => {
    res.render("employee/addorEdit", {
        viewTitle: "Insert Employee"
    })
})

router.post('/', (req, res) => {
    if (req.body._id == "") { insertEmployee(req, res); }
    else {
        updateEmployee(req, res);
    }

})


function insertEmployee(req, res) {
    var employee = new Employee();
    employee.fullname = req.body.fullname;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;

    employee.save((err, doc) => {
        if (!err) {
            res.redirect("/list");
        }
        else { console.log("Error while inserting new employee" + err); }
    })
}
function updateEmployee(req, res){
    Employee.findOneAndUpdate({_id : req.body._id} , req.body , {new : true} , (err,doc)=>{
        if(!err){
            res.redirect("/list");
        }else{
            console.log("Error during record update");
        }
    })
}
router.get('/list', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.render('employee/list', {
                list: docs
            })
        }
        else {
            console.log("Error while fetching employees");
        }
    })
})

router.get('/:id', (req, res) => {
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("employee/addorEdit", {
                viewTitle: "Update Employee",
                employee: doc
            })
        }
    })
})
router.get('/delete/:id', (req, res)=>{
  Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
      if(!err){
          res.redirect("/list");
      }
      else{
          console.log("Error while deleting the record" +err)
      }
  })

})
module.exports = router;