const getAllProducts = async (req, res) =>{
     res.status(200).json({msg:"I am getting my all products"});
};
const getAllProductsTesting = async (req, res) =>{
     res.status(200).json({msg:"I am getting my all testing products"});
};

module.exports = {getAllProducts,getAllProductsTesting}