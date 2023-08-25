<template>
    <!-- Filter Products -->
    <div>
      <label for="productFilter">Filter Products:</label>
      <select v-model="productFilter" id="productFilter">
        <option value="">All Products</option>
        <option value="Nike">Nike</option>
        <option value="Adidas">Adidas</option>
        <option value="Puma">Puma</option>
        <option value="New Balance">New Balance</option>
        <option value="Jordans">Jordan</option>
      </select>
    </div>
    
    <!-- Filter Users -->
    <div>
      <label for="userFilter">Filter Users:</label>
      <select v-model="userFilter" id="userFilter">
        <option value="">All Users</option>
        <option value="admin">Admin</option>
        <option value="dealer">Dealer</option>
      </select>
    </div>
<div>
    <button class="add-btn">
        <router-link class="addProduct" to="/addProduct">Add new product</router-link>
    </button>
    <button class="add-btn">
        <router-link class="addUser" to="/addUser">Add new user</router-link>
    </button>
</div>
  <div v-if="products" class="p-5">
    <table class="col-12 w-100">
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
        <tr v-for="user in filteredUsers" :key="user.userID">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.userAge }}</td>
          <td>{{ user.Gender }}</td>
          <td>{{ user.userRole }}</td>
          <td>{{ user.emailAdd }}</td>
          <td>
            <div class="card bg-transparent">
                <img :src="user.userprofile" class="mx-auto" alt="...">
            </div>
          </td>
          <td>
            <button>edit</button>
            <button @click="deleteUser(user.userID)">delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="col-12 w-100">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Picture</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.prodID">
          <td>{{ product.prodName }}</td>
          <td>{{ product.quantity }}</td>
          <td>R{{ product.amount }}</td>
          <td>{{ product.Category }}</td>
          <td>
            <div class="card bg-transparent">
                <img :src="product.prodUrl" class="mx-auto"  alt="...">
            </div>
          </td>
          <td>
            <button>edit</button>
            <button @click="deleteProduct(product.prodID)">delete</button>
          </td>
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
      data() {
    return {
      productFilter: '',
      userFilter: '',
    };
  },

    computed: {
        products() {
            return this.$store.state.products;
        },
        users() {
            return this.$store.state.users;
        },
         filteredProducts() {
      if (!this.productFilter) {
        return this.products;
      }
      return this.products.filter(product => product.Category === this.productFilter);
    },
    filteredUsers() {
      if (!this.userFilter) {
        return this.users;
      }
      return this.users.filter(user => user.userRole === this.userFilter);
    },
    },

    methods: {
        async deleteProduct(productId) {
            if (confirm('Are you sure you want to delete this product?')) {
                try {
                    await this.$store.dispatch('deleteProduct', productId);
                } catch (error) {
                    console.error('Failed to delete product:', error); 
                }
            }
        },

        async deleteUser(userId) {
            if (confirm('Are you sure you want to delete this user?')) {
                try {
                    await this.$store.dispatch('deleteUser', userId);
                } catch (error) {
                    console.error('Failed to delete user:', error); 
                }
            }
        },
    },


    mounted() {
        this.$store.dispatch("fetchProducts");
        this.$store.dispatch("fetchUsers");
    },
    
    components: {
        Spinner
    }
}
</script>
<style scoped>
.add-btn {
        width: 200px !important;
        background-color: #C2DBF8 !important;
        margin: 5px !important;
        border-radius: 15px !important;
        padding: 3px;
    }

    .addProduct {
        text-decoration: none;
    }
    .addUser {
        text-decoration: none;
    }

    .card {
        height: 8rem;
    }

    .card > img {
        height: 100%;
        width: 150px;
    }

    @media screen and (max-width:950px ) {
        .card > img {
        height: 100%;
        width: 100px;
    }
    }
    @media screen and (max-width:875px ) {
        .card > img {
        height: 100%;
        width: 80px;
    }
    }

    table {
  border-collapse: collapse;
  margin: 10px;
}
 th {
  background: #ccc;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
}

tr:nth-child(even) {
  background: #C2DBF8;
}
</style>