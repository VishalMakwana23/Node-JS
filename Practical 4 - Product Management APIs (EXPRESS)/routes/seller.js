const express = require("express");
const router = express.Router();
router.use(express.json());
const sel = require("../sellerDetail")


router.get("/",(req,res)=> res.send("seller page"));

//fetch seller
router.post("/fetchSeller",(req,res)=> {
    res.json({data:sel});
});

//add seller
router.post("/addSeller",(req,res)=> {
    const sellist = req.body;
    sel.push(sellist)
    res.json({data:sel});
});

//update seller
router.post("/updateSeller",(req,res)=> {
    const sellist = req.body;
    sel[1]=sellist;
    res.json({data:prod});
 });

//delete seller
 router.post("/deleteSeller",(req,res)=> {
    const deleteData = req.body;
    prod.pop(deleteData);
    res.json({data:sel});
}); 

module.exports = router;