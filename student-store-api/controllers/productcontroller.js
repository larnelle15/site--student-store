
const Product = require("../Models/productmodel");


const getAllProducts = async (req, res) => {
  try {
    const {name, category, sort} = req.query;
    console.log("category", category)

    let filter = {}; 
    let orderBy = {}; 

    if(name) {
        filter.name = name;
    }

    if(category) {
        filter.category = category;
    }

    if(sort) {
        orderBy = {name: sort === "asc" ? "asc" : "desc"};
    }
    const products = await Product.getAllProducts(filter,orderBy);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getProductById = async (req, res) => {
  try {
    const product = await Product.getProductById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.updateProduct(req.params.id, req.body);
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.deleteProduct(req.params.id);
    if (deletedProduct) {
      res.status(200).json(deletedProduct);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};