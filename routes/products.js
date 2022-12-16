const express = require ("express");
const router = express.Router();

//now we have to import those functions from controllers (getallproducts , getallproductstesting)
const {getAllProducts, getAllProductsTesting} = require("../controllers/products");

//our home page
router.route("/").get(getAllProducts);

router.route("/testing").get(getAllProductsTesting);


module.exports= router;
