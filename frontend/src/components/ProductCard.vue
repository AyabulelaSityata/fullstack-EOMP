<template>
<div class="col-12 col-lg-3 col-sm-6 p-1">
  <div class="product-card">
    <img :src="product.prodUrl" :alt="product.prodName" class="product-image" />
    <div class="product-details">
      <h3 class="product-title">{{ product.prodName }}</h3>
      <p class="product-description">{{ product.Category }}</p>
      <p class="product-price">R{{ product.amount }}</p>
      <!-- <button class="add-to-cart-button" @click="addToCart">Add to Cart</button> -->
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ["product"]
//   methods: {
//     addToCart() {
//       this.$emit('add-to-cart', this.product);
//     },
//   },
};
</script>

<style scoped>
.product-card {
  background-color: #C2DBF8;
  height: 25rem;
}
img {
  height: 15rem;
}
</style>
