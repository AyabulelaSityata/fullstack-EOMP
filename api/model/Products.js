const db = require('../config')

class Products{
    const 

    fetchProducts(req, res){
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
    fetchProduct(req, res){
        const query = `
            SELECT prodID, prodName, quantity, amount, Category, prodUrl FROM Products WHERE prodID = ${req.params.id}
        `;
    db.query(query, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
    }
    addProduct(req, res){
      const newProd = req.body;
      this.products.push(newProd);
      res.status(200).json({
        msg: "Product added successfully",
        product: newProd
      });
    }
    updateProduct(req, res){
      const query = `
            SELECT prodID, prodName, quantity, amount, Category, prodUrl FROM Products WHERE prodID = ${req.params.id}
        `;
      const updatedProd = req.body;
      const index = this.products.findIndex( product => product.id === prodID);
      
      if(index !== -1) {
        this.products[index] = {...this.products[index], ...updatedProd};
        res.json({
          msg: "Product updated successfully",
          product: this.products[index]
        });
      } else {
        res.status(404).json({
          msg: "Product not found"
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
    deleteProduct(req, res){
      const query = `
      SELECT prodID, prodName, quantity, amount, Category, prodUrl FROM Products WHERE prodID = ${req.params.id}
      `;
      const index = this.products.findIndex( product => product.id === prodID);

      if(index !== -1) {
        const deletedProd = this.products.splice(index, 1);
        res.json({
          msg: "Product deleted successfully",
          product: deletedProd
        });
      } else {
        res.status(404).json({
          msg: "Product not found"
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
module.exports = Products