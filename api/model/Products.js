const db = require("../config");

class Products {
  addProduct(req, res) {
    const product = {
      prodName: req.body.prodName,
      quantity: req.body.quantity,
      amount: req.body.amount,
      Category: req.body.Category,
      prodUrl: req.body.prodUrl,
    };

    const query = "INSERT INTO Products SET ?";
    db.query(query, product, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Product added successfully",
        productID: result.insertID,
      });
    });
  }
  //retrieving products

  fetchProducts(req, res) {
    const query = `
            SELECT prodID, prodName, quantity, amount, Category, prodUrl FROM Products 
        `;

    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  //retrieving a single product
  fetchProduct(req, res) {
    const query = `
            SELECT prodID, prodName, quantity, amount, Category, prodUrl FROM Products WHERE prodID = ${req.params.id}
        `;
    db.query(query, (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        res.status(404).json({
          status: 404,
          msg: "Product not found",
        });
      } else {
        res.json({
          status: res.statusCode,
          results: result[0],
        });
      }
    });
  }

  // updating a product
  updateProduct(req, res) {
    const query = `
            SELECT prodID, prodName, quantity, amount, Category, prodUrl FROM Products WHERE prodID = ${req.params.id}
        `;
    const updatedProd = req.body;
    const index = this.products.findIndex((product) => product.id === prodID);

    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProd };
      res.json({
        msg: "Product updated successfully",
        product: this.products[index],
      });
    } else {
      res.status(404).json({
        msg: "Product not found",
      });
    }

    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  deleteProduct(req, res) {
    const query = `
      SELECT prodID, prodName, quantity, amount, Category, prodUrl FROM Products WHERE prodID = ${req.params.id}
      `;
    const index = this.products.findIndex((product) => product.id === prodID);

    if (index !== -1) {
      const deletedProd = this.products.splice(index, 1);
      res.json({
        msg: "Product deleted successfully",
        product: deletedProd,
      });
    } else {
      res.status(404).json({
        msg: "Product not found",
      });
    }
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
}
module.exports = Products;
