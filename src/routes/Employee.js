const express = require("express");
const router = express.Router();

const Employee = require("../models/Employee");

router.post("/list/", async function(req, res){
    var allEmployees = await Employee.find({ userid: req.body.userid});
    res.json(allEmployees);
});

router.post("/add", async function(req, res){

    //This line below is to delete the note with the same id so that we can update it and post it again
    await Employee.deleteOne({ id: req.body.id})

    const newEmployee = new Employee({
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        phone_number: req.body.phone_number,
        department: req.body.department,
    });

    await newEmployee.save();
    
    const response = { message: "Employee Saved " + `with id: ${req.body.id}` };
    res.json(response);

});

router.post("/delete", async function(req, res){
    await Employee.deleteOne({ id: req.body.id});
    const response = { message: "Employee Deleted" };
    res.json(response);
});


module.exports = router;