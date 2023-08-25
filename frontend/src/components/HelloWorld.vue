<template>
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="8000">
      <img src="https://i.postimg.cc/2yVcW6YY/Screenshot-2023-08-21-120029.png" class="carousel-img d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src="https://i.postimg.cc/g0xt6Khn/index-1583529560.jpg" class="carousel-img d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src="https://i.postimg.cc/mgTJrTnd/sneaker21cm-1-214.webp" class="carousel-img d-block w-100" alt="..." >
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/kXx27rh5/sneakerheader.jpg" class="carousel-img d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="row m-0">
  <div class="col-12 col-lg-3 col-sm-6 p-1 m-0">
    <a href="">
      <img src="https://i.postimg.cc/HkjmmfL8/9cd1bf6c2d1a88e8ac473f62a2898c62.png" alt="" width="200px">
    </a>
  </div>
  <div class="col-12 col-lg-3 col-sm-6 p-1 m-0">
    <a href="">
      <img src="https://i.postimg.cc/44tbLdbm/adidas-logo-adidas-icon-transparent-free-png.webp" alt="" width="200px">
    </a>
  </div>
  <div class="col-12 col-lg-3 col-sm-6 p-1 m-0">
    <a href="">
      <img src="https://i.postimg.cc/KcwczGdr/puma-logo-transparent-free-png.webp" alt="" width="200px">
    </a>
  </div>
  <div class="col-12 col-lg-3 col-sm-6 p-1 m-0">
    <a href="">
      <img src="https://i.postimg.cc/W4Nqnppq/New-balance.png" alt="" width="200px">
    </a>
  </div>
</div>

</template>
<script>
export default {
  name: 'HelloWorld',
}
</script>
<style scoped>
.carousel-img {
  height: 80vh;
}
@media screen and (max-width: 700px) {
    .carousel-img {
      height: 50vh !important;
    }
   }
</style>