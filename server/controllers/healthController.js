const getHealth = (req, res) => {
  res.json({
    success: true,
    message: "Product API is running",
    timestamp: new Date().toISOString(),
  });
};

module.exports = {
  getHealth,
};
