const express = require("express");
const router = express.Router();
router.use(express.json());
const cmp = require("../companyDetail");


router.get("/",(req,res)=> res.send("company page"));

// fetch Company detail
router.post("/fetchCompany",(req,res)=> {
    res.json({data:cmp});
});

//add Company
router.post("/addCompany",(req,res)=> {
    const comonyList = req.body;
    cmp.push(comonyList)
    res.json({data:cmp});
});

//delete Company
router.post("/deleteCompany",(req,res)=> {
   const deleteData = req.body;
   prod.pop(deleteData);
   res.json({data:cmp});
});  

//update Company
router.post("/updateCompany",(req,res)=> {
   const comonyList = req.body; 
   cmp[1]=comonyList;
   res.json({data:cmp});
});

module.exports = router;