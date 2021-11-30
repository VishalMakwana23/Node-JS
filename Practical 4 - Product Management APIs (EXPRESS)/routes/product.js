const express = require("express");
const router = express.Router();
router.use(express.json());
const prod = require("../productDetail")

router.get("/",(req,res)=> res.send("Product page"));

//add product
router.post("/addProduct",(req,res)=> {
    const productlist = req.body;
    const prolist = prod;
    prod.push(productlist)
    console.log(productlist); 
    res.json({data:prod});
});

//fetch product
router.post("/fetchProduct",(req,res)=> {
    res.json({data:prod});
});

//delete product
router.post("/deleteProduct",(req,res)=> {
    const deleteData = req.body;
    prod.pop(deleteData); 
    res.json({data:prod});
});  

//update product
router.post("/updateProduct",(req,res)=> {
    const productlist = req.body;
    prod[1]=productlist;
    res.json({data:prod});
});

module.exports = router;