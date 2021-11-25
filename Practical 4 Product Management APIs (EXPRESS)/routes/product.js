const express = require("express");
const product = require("../data/product");
const router = express.Router();
router.use(express.json());



router.get("/",(req,res) => {

    res.json({data:["Product Page"]});

});

router.get("/productList",(req,res) => {

    res.json({data:product});

});


router.get("/retriveSeller/:sid",(req,res) => {
    const sid = req.params.sid;
    const prod = product.filter((p)=>p.sellerId === parseInt(sid));

    if(prod.length === 0){
        return res.json({data:"not found any record!"})
    } else {
        return res.json({data: prod})
    }
});

router.get("/retriveCompony/:cid",(req,res) => {
    const sid = req.params.cid;
    const prod = product.filter((p)=>p.sellerId === parseInt(cid));

    if(prod.length === 0){
        return res.json({data:"not found any record!"})
    } else {
        return res.json({data: prod})
    }
});

router.post("/addProduct",(req,res) => {

    const prodId = req.body.productId;
    const title = req.body.title;
    const price = req.body.price;
    const category = req.body.category;
    const companyId = req.body.companyId;
    const sellerId = req.body.sellerId;

    const prod = product.filter((p)=>p.productId === prodId);
    if(prod.length === 0){
        product.push({productId: prodId,title: title,price: price,category: category,companyId: companyId,sellerId: sellerId});
        return res.json({data:"Product added successfully!"})
    } else {
        return res.json({data:"Product already Added!"})
    }
});

module.exports = router;