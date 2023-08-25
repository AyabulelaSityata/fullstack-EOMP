<template >
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <img src="https://i.postimg.cc/9ff5gT7h/Screenshot-2023-08-21-113955.png" alt="logo" width="90px" class="rounded-5"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin">Admin</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>
<script>
export default {
    
}
</script>
<style scoped>
    nav {
        background-color: #D61355;
    }

    nav > div > div {
      display: flex;
      justify-content: end;
    }

    .nav-item {
        width: 90px;
        background-color: #C2DBF8;
        margin: 5px;
        border-radius: 15px;
    }

    .nav-link {
      color: black;
    }

    @media screen and (max-width: 992px){
      nav > div > div {
      display: flex;
      justify-content: center;
    }
    }

</style>