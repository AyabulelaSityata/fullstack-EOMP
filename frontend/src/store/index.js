import { createStore } from 'vuex';
// import axios from 'axios';
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
    }
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
        const response = await fetchUsers(`${connection}users`);
        if (!response.ok) {
          throw Error("Failed to fetch users");
        } else {
          const data = await response.json();
          const users = data.results;
          context.commit("setProducts", users);
          console.log(users);
        }
      } catch (err) {
        context.commit("setUsers", null);
        console.log("Failed to get users", err.message);
      }
    }, 
  },

  modules: {
  }
})
