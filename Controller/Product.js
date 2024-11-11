const pool = require("../connection/db.js");
const getProduct = (req, res) => {
  try {
    const sql = `SELECT p.id AS product_id, p.name, p.description, p.price, p.category, p.preprice,p.qty,pi.image_url FROM products p LEFT JOIN product_images pi ON p.id = pi.product_id ORDER BY p.id;`;
    pool.query(sql, (err, data) => {
      if (err) return res.json({ error: err.message });
      const products = {};
      data.forEach((row) => {
        const productId = row.product_id;
        if (!products[productId]) {
          products[productId] = {
            id: productId,
            name: row.name,
            description: row.description,
            price: row.price,
            category: row.category,
            preprice: row.preprice,
            images: [],
            qty: row.qty,
          };
        }
        if (
          row.image_url &&
          !products[productId].images.includes(row.image_url)
        ) {
          products[productId].images.push(row.image_url);
        }
      });
      res.json(Object.values(products));
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
module.exports = getProduct;