const express = require('express');
const app = express();
app.use(express.json());
const port = 5000;
//const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const sellerRoute = require("./routes/seller");
const componyRoute = require("./routes/compony");



app.get('/', (req, res) => res.send('Welcome to product management!'));
//app.use("/users", userRoute);
app.use("/product", productRoute);
app.use("/seller", sellerRoute);
app.use("/compony", componyRoute);



app.listen(port, () => console.log(`Example app listening on port port!`));