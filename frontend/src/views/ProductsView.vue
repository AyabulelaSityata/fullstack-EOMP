<template >
 <div v-if="products" class="row p-4">
   <ProductCard v-for="product in products" :key="product.prodID" :product="product"/>
 </div>
 <div v-else>
    <Spinner/>
 </div>
</template>
<script>
import Spinner from '../components/Spinner.vue';
import ProductCard from '../components/ProductCard.vue';
export default {
    computed: {
        products() {
            return this.$store.state.products
        }
    },

    mounted() {
        this.$store.dispatch("fetchProducts")
    },

    components: {
        Spinner, ProductCard
    }
}
</script>
<style scoped>
    
</style>
