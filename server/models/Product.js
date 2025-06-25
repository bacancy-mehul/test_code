const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 89.99,
    description: "High-quality wireless headphones with noise cancellation",
    stock: 0,
    image: "https://m.media-amazon.com/images/I/61rFE093esL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    name: "Cotton T-Shirt",
    category: "Apparel",
    price: 24.99,
    description: "Comfortable cotton t-shirt in various colors",
    stock: 100,
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
  },
  {
    id: 3,
    name: "Smartphone Case",
    category: "Electronics",
    price: 19.99,
    description: "Protective case for smartphones",
    stock: 75,
    image:
      "https://m.media-amazon.com/images/I/81fU6kNz14L.__AC_SY300_SX300_QL70_ML2_.jpg",
  },
  {
    id: 4,
    name: "Running Shoes",
    category: "Apparel",
    price: 129.99,
    description: "Professional running shoes with cushioning",
    stock: 30,
    image: "https://m.media-amazon.com/images/I/71GaYB0dVLL._AC_SY695_.jpg",
  },
  {
    id: 5,
    name: "Coffee Mug",
    category: "Home & Garden",
    price: 12.99,
    description: "Ceramic coffee mug with handle",
    stock: 200,
    image:
      "https://m.media-amazon.com/images/I/41XLSuv-48L.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 6,
    name: "Laptop Stand",
    category: "Electronics",
    price: 45.99,
    description: "Adjustable laptop stand for ergonomic positioning",
    stock: 25,
    image:
      "https://m.media-amazon.com/images/I/61BK9+YGKML._AC_SY300_SX300_.jpg",
  },
  {
    id: 7,
    name: "Denim Jeans",
    category: "Apparel",
    price: 79.99,
    description: "Classic denim jeans in blue wash",
    stock: 60,
    image: "https://m.media-amazon.com/images/I/61pZl3DBCVL._AC_SY741_.jpg",
  },
  {
    id: 8,
    name: "Garden Tool Set",
    category: "Home & Garden",
    price: 89.99,
    description: "Complete set of essential garden tools",
    stock: 15,
    image: "https://m.media-amazon.com/images/I/71Dx-IyOOFL.jpg",
  },
];

const validateProduct = (product) => {
  const requiredFields = ["name", "category", "price", "description", "stock"];
  const errors = [];

  requiredFields.forEach((field) => {
    if (!product[field]) {
      errors.push(`${field} is required`);
    }
  });

  if (product.price && (isNaN(product.price) || product.price <= 0)) {
    errors.push("Price must be a positive number");
  }

  if (product.stock && (isNaN(product.stock) || product.stock < 0)) {
    errors.push("Stock must be a non-negative number");
  }

  return errors;
};

const getAllProducts = () => products;

const getProductById = (id) => products.find((p) => p.id === id);

const getProductsByCategory = (category) =>
  products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

const addProduct = (newProduct) => {
  const newId = Math.max(...products.map((p) => p.id)) + 1;

  const productToAdd = {
    id: newId,
    name: newProduct.name,
    category: newProduct.category,
    price: parseFloat(newProduct.price),
    description: newProduct.description,
    stock: parseInt(newProduct.stock),
    image: newProduct.image || "https://example.com/default.jpg",
  };

  products.push(productToAdd);
  return productToAdd;
};

module.exports = {
  products,
  validateProduct,
  getAllProducts,
  getProductById,
  getProductsByCategory,
  addProduct,
};
