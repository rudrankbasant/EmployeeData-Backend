const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Employee = require("./models/Employee");

const bodyParser = require('body-parser');
const { route } = require("./routes/Employee");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://rudrankbasant:rudrank123@cluster0.oxrthyh.mongodb.net/?retryWrites=true&w=majority").then(function(){

    app.get("/", function(req, res){
        const response =  {message : "API is working"};
        res.json(response);
    });

    const router = require("./routes/Employee");
    app.use("/allEmployees", router);


});

//Starting the server on a PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("Server started on port " + PORT );
});