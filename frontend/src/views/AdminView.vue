<template>
  <div v-if="products">
    <table class="w-100">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Picture</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.prodID">
          <td>{{ product.prodName }}</td>
          <th>{{ product.quantity }}</th>
          <td>R{{ product.amount }}</td>
          <td>{{ product.Category }}</td>
          <td>{{ product.prodUrl }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="users">
    <table>
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Role</th>
          <th>Email</th>
          <th>Profile</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.userID">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.userAge }}</td>
          <td>{{ user.Gender }}</td>
          <td>{{ user.userRole }}</td>
          <td>{{ user.emailAdd }}</td>
          <td>{{ user.userProfile }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <Spinner/>
  </div>
</template>
<script>
import Spinner from '../components/Spinner.vue';
export default {
    computed: {
        products() {
            return this.$store.state.products
        },
        users() {
            return this.$store.state.users
        }
    },

    mounted() {
        this.$store.dispatch("fetchProducts"),
        this.$store.dispatch("fetchUsers")
    },
    
    components: {
        Spinner
    }
}
</script>