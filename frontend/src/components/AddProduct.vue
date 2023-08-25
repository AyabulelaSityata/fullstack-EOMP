<template>
  <div>
    <form @submit.prevent="addProduct">

      <input v-model="newProduct.prodID" style="visibility: hidden; display: none" type="text">

      <label for="prodName">Product Name:</label>
      <input v-model="newProduct.prodName" type="text" id="prodName" required>

      <label for="quantity">Quantity:</label>
      <input v-model="newProduct.quantity" type="number" id="quantity" required>
      
      <label for="amount">Amount:</label>
      <input v-model.number="newProduct.amount" type="number" id="amount" required>

      <label for="Category">Category:</label>
      <input v-model="newProduct.Category" type="text" id="Category" required>

      <label for="prodUrl">Image Url:</label>
      <input v-model="newProduct.prodUrl" type="text" id="prodUrl">

      <button type="submit">Add Product</button>
    </form>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      newProduct: {
        prodID: null,
        prodName: '',
        quantity: 0,
        amount: 0,
        Category: '',
        prodUrl: '',
      },
    };
  },
  methods: {
    async addProduct() {
      try {
        await this.$store.dispatch('addNewProduct', this.newProduct);
        this.newProduct = {
            prodID: null,
            prodName: '',
            quantity: 0,
            amount: 0,
            Category: '',
            prodUrl: '',
          
        };
      } catch (error) {
        console.error('Failed to add product:', error);
        
      }
    },
  },
};
</script>
