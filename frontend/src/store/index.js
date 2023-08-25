import { createStore } from 'vuex';
import axios from 'axios';
const connection = 'https://fullstack-eomp.onrender.com/';
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
  },
  
  mutations: {
    setUsers: (state, users) => {
      state.users =  users;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    addProduct: (state, newProduct) => {
      state.products.push(newProduct);
    },
    addUser: (state, newUser) => {
      state.users.push(newUser);
    },
    deleteProduct: (state, productId) => {
      state.products = state.products.filter(product => product.prodID !== productId);
    },
    deleteUser: (state, userId) => {
      state.users = state.users.filter(user => user.userID !== userId);
    },
  },

  actions: {
    async fetchProducts(context) {
      try {
        const response = await fetch(`${connection}products`);
        if (!response.ok) {
          throw Error("Failed to fetch products");
        } else {
          const data = await response.json();
          const prods = data.results;
          context.commit("setProducts", prods);
          console.log(prods);
        }
      } catch (err) {
        context.commit("setProducts", null);
        console.log("Failed to get products", err.message);
      }
    },    

    async fetchUsers(context) {
      try {
        const response = await fetch(`${connection}users`);
        if (!response.ok) {
          throw Error("Failed to fetch users");
        } else {
          const data = await response.json();
          const users = data.results;
          context.commit("setUsers", users);
          console.log(users);
        }
      } catch (err) {
        context.commit("setUsers", null);
        console.log("Failed to get users", err.message);
      }
    }, 

    async addNewProduct(context, newProduct) {
      try {
        const response = await axios.post(`${connection}addproduct`, newProduct);
        if (response.status === 201) {
          context.commit('addProduct', newProduct);
        }
      } catch (error) {
        console.error('Error adding new product:', error);
      }
    },

    async addNewUser(context, newUser) {
      try {
        const response = await axios.post(`${connection}register`, newUser);
        if (response.status === 201) {
          context.commit('addUser', newUser);
        }
      } catch (error) {
        console.error('Error adding new user:', error);
      }
    },

    async deleteProduct(context, productId) {
      try {
        const response = await fetch(`${connection}product/${productId}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          context.commit('deleteProduct', productId);
        } else {
          throw new Error('Failed to delete product');
        }
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },

    async deleteUser(context, userId) {
      try {
        const response = await fetch(`${connection}user/${userId}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          context.commit('deleteUser',userId);
        } else {
          throw new Error('Failed to delete user');
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
  },

  modules: {
  }
})
