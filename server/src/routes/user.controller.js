const express = require("express");
const Customer = require("../models/customer");
const router = express.Router();

router.get("/allCustomers", async(req, res)=>{
    try {
        const CustomerData = await Customer.find();
        res.status(200).send({message:"Get all data successfully", data:CustomerData})
    } catch (error) {
        res.status(200).send({error})
    }

});
router.get("/customerdetai/:id", async(req, res)=>{
    try {
        const id2 = req.params.id
        const CustomerData = await Customer.findById(id2);
        res.status(200).send({message:"Get desire user data successfully", data:CustomerData})
    } catch (error) {
        res.status(200).send({error})
    }

});
router.delete("/delete/:id", async(req, res)=>{
    try {
        const id2 = req.params.id
        const CustomerData = await Customer.findByIdAndDelete(id2)  ;
        res.status(200).send({message:"Data delted successfully", data:CustomerData})
    } catch (error) {
        res.status(400).send({error})
    }

});
router.post("/create", async(req, res)=>{
    try {
        const payload = req.body;
        const customer = new Customer(payload);
        const CustomerData = await customer.save();
        res.status(201).send({message:"Data Create successfully", data:CustomerData})
    } catch (error) {
        res.status(400).send({error})
    }

});
router.put("/update/:id", async(req, res)=>{
    try {
        const {id} = req.params;
        const {name,email,password} = req.body;
        const updated = await customer.findByIdAndUpdate({_id:id},{name:name,email:email,password:password,})
        res.status(201).send({message:"Update data successfully", data:updated})
    } catch (error) {
        res.status(400).send({error})
    }

});

module.exports = router;