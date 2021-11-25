const express = require("express");
const compony = require("../data/compony");
const product = require("../data/product");
const router = express.Router();
router.use(express.json());



router.get("/",(req,res) => {

    res.json({data:"compony page"});

});



router.post("/addCompony",(req,res) => {

    const compId = req.body.companyId;
    const name = req.body.name;
    const productId = req.body.productId;

    const comp = compony.filter((p)=>p.companyId === compId);
    if(comp.length === 0){
        compony.push({companyId: compId,name: name,productId: productId});
        return res.json({data:"Compony added successfully!"})
    } else {
        return res.json({data:"Compony already Added!"})
    }
});

router.get("/list",(req,res) => {

    res.json({data:compony});

});


//fetch company details based on product name
router.get("/componyDetailProduct/:title",(req,res) => {

    const pname = req.params.title;
    const prod = product.filter((p)=>p.title === pname);

    if(prod.length === 0){
        return res.json({data:"not found any record!"})
    } else {
        const pid = prod.productId;
        const comp = compony.filter((p)=>p.productId === pid);
        return res.json({data:prod})

    }
});



//fetch all products of a company

//fetch all products of a seller












module.exports = router;