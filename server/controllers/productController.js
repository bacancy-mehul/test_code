const {
  getAllProducts,
  getProductById,
  getProductsByCategory,
  addProduct,
  validateProduct,
} = require("../models/Product");

const getProducts = (req, res) => {
  try {
    const { category } = req.query;

    if (category) {
      const filteredProducts = getProductsByCategory(category);
      res.json({
        success: true,
        data: filteredProducts,
        count: filteredProducts.length,
      });
    } else {
      const products = getAllProducts();
      res.json({
        success: true,
        data: products,
        count: products.length,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const getProduct = (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = getProductById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const createProduct = (req, res) => {
  try {
    const newProduct = req.body;

    const validationErrors = validateProduct(newProduct);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validationErrors,
      });
    }

    const productToAdd = addProduct(newProduct);

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: productToAdd,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
};
